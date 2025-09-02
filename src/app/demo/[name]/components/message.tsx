import { Message, MessageContent, MessageAvatar } from "@/components/ai-elements/message";

export const message = {
  name: "message",
  components: {
    "User Message": (
      <Message from="user">
        <MessageAvatar src="/avatars/user.png" name="User" />
        <MessageContent>
          <p>Hello! Can you help me create a React component?</p>
        </MessageContent>
      </Message>
    ),
    "Assistant Message": (
      <Message from="assistant">
        <MessageAvatar src="/avatars/assistant.png" name="AI" />
        <MessageContent>
          <p>Of course! I'd be happy to help you create a React component. What kind of component would you like to build?</p>
        </MessageContent>
      </Message>
    ),
    "Conversation Example": (
      <div className="space-y-4">
        <Message from="user">
          <MessageAvatar src="/avatars/user.png" name="John" />
          <MessageContent>
            <p>I need to build a button component with TypeScript. Can you show me how?</p>
          </MessageContent>
        </Message>
        
        <Message from="assistant">
          <MessageAvatar src="/avatars/assistant.png" name="Assistant" />
          <MessageContent>
            <p>Sure! Here's a simple TypeScript button component:</p>
            <pre className="bg-muted p-2 rounded text-xs mt-2">
{`interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
};`}
            </pre>
          </MessageContent>
        </Message>
      </div>
    ),
  },
};