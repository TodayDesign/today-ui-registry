"use client";

import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from "@/components/ai-elements/conversation";
import { Message, MessageContent } from "@/components/ai-elements/message";
import {
  PromptInput,
  PromptInputButton,
  PromptInputModelSelect,
  PromptInputModelSelectContent,
  PromptInputModelSelectItem,
  PromptInputModelSelectTrigger,
  PromptInputModelSelectValue,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputToolbar,
  PromptInputTools,
  type MentionResource,
} from "@/components/ai-elements/prompt-input";
import { useState } from "react";
import { useChat } from "@ai-sdk/react";
import { Response } from "@/components/ai-elements/response";
import { GlobeIcon } from "lucide-react";
import {
  Source,
  Sources,
  SourcesContent,
  SourcesTrigger,
} from "@/components/ai-elements/sources";
import {
  Reasoning,
  ReasoningContent,
  ReasoningTrigger,
} from "@/components/ai-elements/reasoning";
import { Loader } from "@/components/ai-elements/loader";
import type { SourceUrlUIPart } from "ai";

const models = [
  {
    name: "GPT 4o",
    value: "openai/gpt-4o",
  },
  {
    name: "Deepseek R1",
    value: "deepseek/deepseek-r1",
  },
];

// Sample session resources for @ mentions
const sessionResources: MentionResource[] = [
  { id: "1", name: "Project kick-off", type: "Session" },
  { id: "2", name: "Research workshop", type: "Session" },
  { id: "3", name: "Tech discovery", type: "Session" },
  { id: "4", name: "Design review", type: "Session" },
  { id: "5", name: "Sprint planning", type: "Session" },
];

const fileResources: MentionResource[] = [
  { id: "101", name: "Project_Plan.pdf", type: "File" },
  { id: "102", name: "Meeting_Notes.docx", type: "File" },
  { id: "103", name: "Design_Mockup.png", type: "File" },
];

const resources = [...sessionResources, ...fileResources];

// Sample session transcripts - in a real app, these would come from your backend
const sessionTranscripts: Record<string, string> = {
  "1": `Project Kick-off Session Transcript:
- Discussed project scope and objectives
- Defined key stakeholders and roles
- Established timeline: 12-week development cycle
- Budget allocation: $150K approved
- Key deliverables: MVP by week 8, full launch by week 12
- Risk assessment identified potential integration challenges`,

  "2": `Research Workshop Transcript:
- User interviews conducted with 15 participants
- Key findings: 73% prefer mobile-first experience
- Pain points: Complex navigation, slow load times
- Feature requests: Dark mode, offline capability
- Competitive analysis of 5 major competitors
- Recommended UX improvements based on research`,

  "3": `Tech Discovery Session:
- Architecture review: Microservices vs Monolith
- Technology stack evaluation: React, Node.js, PostgreSQL
- Infrastructure requirements: AWS deployment
- Security considerations: OAuth 2.0, data encryption
- Performance targets: <200ms API response time
- Database design and scaling strategy discussed`,

  "4": `Design Review Meeting:
- UI mockups presented for all major screens
- Brand guidelines and design system established
- Color palette: Primary blue #007ACC, secondary gray #666
- Typography: Inter font family
- Component library structure defined
- Accessibility standards (WCAG 2.1) requirements`,

  "5": `Sprint Planning Session:
- Sprint 1 scope: Authentication and user management
- Story points estimated: 34 points total
- Team capacity: 30 points per sprint
- Dependencies identified with backend team
- Testing strategy: Unit tests + E2E with Playwright
- Definition of done criteria established`,
};

// File content mapping - in a real app, these would be fetched from storage
const fileContents: Record<string, string> = {
  "101":
    "Project Plan: Q1 2024 roadmap with milestones and resource allocation...",
  "102":
    "Meeting notes from stakeholder alignment session covering requirements and constraints...",
  "103":
    "Design mockup showing the main dashboard interface with user navigation flow...",
};

export default function ChatbotPage() {
  const [input, setInput] = useState("");
  const [model, setModel] = useState<string>(models[0].value);
  const [webSearch, setWebSearch] = useState(false);
  const [mentionedResources, setMentionedResources] = useState<Set<string>>(
    new Set(),
  );
  const { messages, sendMessage, status } = useChat();

  // Extract mentioned resource names from the input text
  const extractMentionedResources = (text: string): MentionResource[] => {
    const mentioned: MentionResource[] = [];
    const mentionRegex = /@([^@\s]+(?:\s+[^@\s]+)*)/g;
    const matches = text.matchAll(mentionRegex);

    for (const match of matches) {
      const mentionName = match[1].trim();
      const resource = resources.find((r) => r.name === mentionName);
      if (resource) {
        mentioned.push(resource);
      }
    }

    return mentioned;
  };

  // Get context content for a resource
  const getResourceContext = (resource: MentionResource): string => {
    if (resource.type === "Session") {
      return (
        sessionTranscripts[resource.id] ||
        `No transcript available for ${resource.name}`
      );
    }
    if (resource.type === "File") {
      return (
        fileContents[resource.id] || `No content available for ${resource.name}`
      );
    }
    return "";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      // Extract mentioned resources from the input
      const mentionedInMessage = extractMentionedResources(input);

      // Build context from mentioned resources (for API, not UI)
      const contextData = mentionedInMessage.map((resource) => ({
        resourceId: resource.id,
        resourceName: resource.name,
        resourceType: resource.type,
        content: getResourceContext(resource),
      }));

      sendMessage(
        { text: input }, // Keep UI message clean
        {
          body: {
            model: model,
            webSearch: webSearch,
            context: contextData, // Pass context separately
          },
        },
      );
      setInput("");
      setMentionedResources(new Set()); // Clear mentioned resources after sending
    }
  };

  const handleMentionSelect = (resource: MentionResource) => {
    // Track that this resource was mentioned
    setMentionedResources((prev) => new Set([...prev, resource.id]));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 relative size-full h-screen">
      <div className="flex flex-col h-full">
        <Conversation className="h-full">
          <ConversationContent>
            {messages.map((message) => (
              <div key={message.id}>
                {message.role === "assistant" && (
                  <Sources>
                    <SourcesTrigger
                      count={
                        message.parts.filter(
                          (part) => part.type === "source-url",
                        ).length
                      }
                    />
                    {message.parts
                      .filter((part) => part.type === "source-url")
                      .map((part, i) => (
                        <SourcesContent key={`${message.id}-${i}`}>
                          <Source
                            key={`${message.id}-${i}`}
                            href={(part as SourceUrlUIPart).url}
                            title={(part as SourceUrlUIPart).url}
                          />
                        </SourcesContent>
                      ))}
                  </Sources>
                )}
                <Message from={message.role} key={message.id}>
                  <MessageContent>
                    {message.parts.map((part, i) => {
                      switch (part.type) {
                        case "text":
                          return (
                            <Response key={`${message.id}-${i}`}>
                              {part.text}
                            </Response>
                          );
                        case "reasoning":
                          return (
                            <Reasoning
                              key={`${message.id}-${i}`}
                              className="w-full"
                              isStreaming={status === "streaming"}
                            >
                              <ReasoningTrigger />
                              <ReasoningContent>{part.text}</ReasoningContent>
                            </Reasoning>
                          );
                        default:
                          return null;
                      }
                    })}
                  </MessageContent>
                </Message>
              </div>
            ))}
            {status === "submitted" && <Loader />}
          </ConversationContent>
          <ConversationScrollButton />
        </Conversation>

        <PromptInput onSubmit={handleSubmit} className="mt-4">
          <PromptInputTextarea
            onChange={(e) => setInput(e.target.value)}
            value={input}
            placeholder="Ask anything... Type @ to mention a session"
            mentionResources={resources}
            onMentionSelect={handleMentionSelect}
          />
          <PromptInputToolbar>
            <PromptInputTools>
              <PromptInputButton
                variant={webSearch ? "default" : "ghost"}
                onClick={() => setWebSearch(!webSearch)}
              >
                <GlobeIcon size={16} />
                <span>Search</span>
              </PromptInputButton>
              <PromptInputModelSelect
                onValueChange={(value) => {
                  setModel(value);
                }}
                value={model}
              >
                <PromptInputModelSelectTrigger>
                  <PromptInputModelSelectValue />
                </PromptInputModelSelectTrigger>
                <PromptInputModelSelectContent>
                  {models.map((model) => (
                    <PromptInputModelSelectItem
                      key={model.value}
                      value={model.value}
                    >
                      {model.name}
                    </PromptInputModelSelectItem>
                  ))}
                </PromptInputModelSelectContent>
              </PromptInputModelSelect>
            </PromptInputTools>
            <PromptInputSubmit disabled={!input} status={status} />
          </PromptInputToolbar>
        </PromptInput>
      </div>
    </div>
  );
}
