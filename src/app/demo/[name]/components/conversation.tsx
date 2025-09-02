import { Conversation, ConversationContent, ConversationScrollButton } from "@/components/ai-elements/conversation";

export const conversation = {
  name: "conversation",
  components: {
    Default: (
      <div className="h-96 border rounded-lg">
        <Conversation>
          <ConversationContent>
            <div className="space-y-4">
              <div className="p-3 rounded-lg bg-muted">
                <p className="text-sm">Hello! How can I help you today?</p>
              </div>
              <div className="p-3 rounded-lg bg-primary text-primary-foreground ml-auto max-w-[80%]">
                <p className="text-sm">I need help with creating a React component.</p>
              </div>
              <div className="p-3 rounded-lg bg-muted">
                <p className="text-sm">I'd be happy to help you create a React component! What kind of component are you looking to build?</p>
              </div>
              <div className="p-3 rounded-lg bg-primary text-primary-foreground ml-auto max-w-[80%]">
                <p className="text-sm">A simple button component with TypeScript.</p>
              </div>
              <div className="p-3 rounded-lg bg-muted">
                <p className="text-sm">Here's a simple TypeScript button component for you...</p>
              </div>
            </div>
          </ConversationContent>
          <ConversationScrollButton />
        </Conversation>
      </div>
    ),
  },
};