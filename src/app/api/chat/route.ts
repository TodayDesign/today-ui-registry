import { streamText, type UIMessage, convertToModelMessages } from "ai";
import { Experimental_Agent as Agent } from "ai";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

type ContextData = {
  resourceId: string;
  resourceName: string;
  resourceType: string;
  content: string;
};

export async function POST(req: Request) {
  const {
    messages,
    model,
    webSearch,
    context,
  }: {
    messages: UIMessage[];
    model: string;
    webSearch: boolean;
    context?: ContextData[];
  } = await req.json();

  // const result = streamText({
  //   model: webSearch ? "perplexity/sonar" : model,
  //   messages: convertToModelMessages(messages),
  //   system:
  //     "You are a helpful assistant that can answer questions and help with tasks",
  // });

  // Build system prompt with context if available
  let systemPrompt =
    "You are a helpful assistant that can answer questions and help with tasks.";

  if (context && context.length > 0) {
    const contextSections = context
      .map(
        (ctx) =>
          `--- Context from ${ctx.resourceName} (${ctx.resourceType}) ---\n${ctx.content}`,
      )
      .join("\n\n");

    systemPrompt += `\n\nThe user has mentioned the following resources in their message. Use this context to provide more accurate and relevant responses:\n\n${contextSections}`;
  }

  const myAgent = new Agent({
    model: webSearch ? "perplexity/sonar" : model,
    system: systemPrompt,
    tools: {
      // Your tools here
    },
  });

  const result = myAgent.stream({
    messages: convertToModelMessages(messages),
  });

  // send sources and reasoning back to the client
  return result.toUIMessageStreamResponse({
    sendSources: true,
    sendReasoning: true,
    messageMetadata: ({ part }) => {
      // Send metadata when streaming starts
      if (part.type === "start") {
        return {
          createdAt: Date.now(),
          model: "gpt-4o",
        };
      }

      // Send additional metadata when streaming completes
      if (part.type === "finish") {
        return {
          totalTokens: part.totalUsage.totalTokens,
        };
      }
    },
  });
}
