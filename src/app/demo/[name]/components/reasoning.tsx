import { Reasoning, ReasoningTrigger, ReasoningContent } from "@/components/ai-elements/reasoning";

export const reasoning = {
  name: "reasoning",
  components: {
    Default: (
      <Reasoning>
        <ReasoningTrigger />
        <ReasoningContent>
          The user is asking about React components, which is a fundamental concept in React development. I should provide a clear explanation with examples to help them understand how components work.

          First, I'll explain what components are, then show a simple example, and finally discuss props and state if needed.
        </ReasoningContent>
      </Reasoning>
    ),
    "Custom Trigger": (
      <Reasoning defaultOpen={true}>
        <ReasoningTrigger>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>💭</span>
            <span>AI reasoning process (2.3s)</span>
          </div>
        </ReasoningTrigger>
        <ReasoningContent>
          To answer this question about TypeScript interfaces, I need to:
          
          1. Explain what interfaces are in TypeScript
          2. Show practical examples of interface usage
          3. Discuss the benefits of using interfaces
          4. Compare interfaces with types where relevant
          
          This will give the user a comprehensive understanding of TypeScript interfaces.
        </ReasoningContent>
      </Reasoning>
    ),
    "Streaming Example": (
      <Reasoning isStreaming={true}>
        <ReasoningTrigger />
        <ReasoningContent>
          I'm currently thinking about the best way to approach this problem...
        </ReasoningContent>
      </Reasoning>
    ),
    "With Duration": (
      <Reasoning duration={5}>
        <ReasoningTrigger />
        <ReasoningContent>
          This is a complex question that requires me to consider multiple aspects:
          
          1. Performance implications of different approaches
          2. Browser compatibility requirements  
          3. Accessibility considerations
          4. Maintenance and scalability factors
          
          Based on these factors, I recommend using the modern approach with proper fallbacks.
        </ReasoningContent>
      </Reasoning>
    ),
  },
};