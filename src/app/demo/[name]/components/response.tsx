import { Response } from "@/components/ai-elements/response";

export const response = {
  name: "response",
  components: {
    Default: (
      <div className="max-w-2xl">
        <Response>
          {`# React Components

React components are the building blocks of React applications. They let you split the UI into independent, reusable pieces.

## Creating a Component

Here's a simple example:

\`\`\`jsx
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}
\`\`\`

## Using the Component

\`\`\`jsx
<Welcome name="Alice" />
\`\`\`

This will render: **Hello, Alice!**

Components can be either function components or class components, though function components are more common in modern React.`}
        </Response>
      </div>
    ),
    "Rich Content": (
      <div className="max-w-2xl">
        <Response>
          {`# Advanced React Patterns

## 1. Custom Hooks

Custom hooks let you extract component logic into reusable functions:

\`\`\`javascript
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  
  return { count, increment, decrement };
}
\`\`\`

## 2. Context Pattern

For passing data through many levels:

- Create context with \`createContext()\`
- Provide value with \`<Context.Provider>\`
- Consume with \`useContext()\`

> **Tip:** Use context sparingly - prop drilling isn't always bad!

## 3. Compound Components

Components that work together:

\`\`\`jsx
<Accordion>
  <Accordion.Item>
    <Accordion.Header>Question 1</Accordion.Header>
    <Accordion.Panel>Answer 1</Accordion.Panel>
  </Accordion.Item>
</Accordion>
\`\`\`

These patterns help create more maintainable and reusable code.`}
        </Response>
      </div>
    ),
  },
};