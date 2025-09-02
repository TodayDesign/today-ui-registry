import { 
  PromptInput, 
  PromptInputTextarea, 
  PromptInputToolbar, 
  PromptInputTools, 
  PromptInputButton, 
  PromptInputSubmit,
  PromptInputModelSelect,
  PromptInputModelSelectTrigger,
  PromptInputModelSelectContent,
  PromptInputModelSelectItem,
  PromptInputModelSelectValue
} from "@/components/ai-elements/prompt-input";
import { Paperclip, Mic } from "lucide-react";

export const promptInput = {
  name: "prompt-input",
  components: {
    Default: (
      <div className="max-w-2xl">
        <PromptInput>
          <PromptInputTextarea placeholder="Ask me anything..." />
          <PromptInputToolbar>
            <PromptInputTools>
              <PromptInputButton>
                <Paperclip className="h-4 w-4" />
              </PromptInputButton>
              <PromptInputButton>
                <Mic className="h-4 w-4" />
              </PromptInputButton>
            </PromptInputTools>
            <PromptInputSubmit />
          </PromptInputToolbar>
        </PromptInput>
      </div>
    ),
    "With Model Selection": (
      <div className="max-w-2xl">
        <PromptInput>
          <PromptInputTextarea placeholder="What would you like to know?" />
          <PromptInputToolbar>
            <PromptInputTools>
              <PromptInputModelSelect defaultValue="gpt-4">
                <PromptInputModelSelectTrigger>
                  <PromptInputModelSelectValue />
                </PromptInputModelSelectTrigger>
                <PromptInputModelSelectContent>
                  <PromptInputModelSelectItem value="gpt-4">GPT-4</PromptInputModelSelectItem>
                  <PromptInputModelSelectItem value="gpt-3.5">GPT-3.5</PromptInputModelSelectItem>
                  <PromptInputModelSelectItem value="claude">Claude</PromptInputModelSelectItem>
                </PromptInputModelSelectContent>
              </PromptInputModelSelect>
              <PromptInputButton>
                <Paperclip className="h-4 w-4" />
              </PromptInputButton>
            </PromptInputTools>
            <PromptInputSubmit />
          </PromptInputToolbar>
        </PromptInput>
      </div>
    ),
    "Different States": (
      <div className="max-w-2xl space-y-4">
        <div>
          <p className="text-sm text-muted-foreground mb-2">Default State:</p>
          <PromptInput>
            <PromptInputTextarea placeholder="Type your message..." />
            <PromptInputToolbar>
              <PromptInputTools />
              <PromptInputSubmit />
            </PromptInputToolbar>
          </PromptInput>
        </div>
        
        <div>
          <p className="text-sm text-muted-foreground mb-2">Streaming State:</p>
          <PromptInput>
            <PromptInputTextarea value="Tell me about React hooks" readOnly />
            <PromptInputToolbar>
              <PromptInputTools />
              <PromptInputSubmit status="streaming" />
            </PromptInputToolbar>
          </PromptInput>
        </div>
      </div>
    ),
  },
};