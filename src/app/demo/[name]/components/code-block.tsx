import { CodeBlock, CodeBlockCopyButton } from "@/components/ai-elements/code-block";

export const codeBlock = {
  name: "code-block",
  components: {
    Default: (
      <CodeBlock
        code={`function greetUser(name: string) {
  console.log(\`Hello, \${name}!\`);
  return \`Welcome to our application, \${name}.\`;
}

// Usage example
const message = greetUser("Alice");
console.log(message);`}
        language="typescript"
        showLineNumbers={true}
      >
        <CodeBlockCopyButton />
      </CodeBlock>
    ),
    "Without Line Numbers": (
      <CodeBlock
        code={`const items = ['apple', 'banana', 'cherry'];
items.forEach(item => console.log(item));`}
        language="javascript"
      >
        <CodeBlockCopyButton />
      </CodeBlock>
    ),
  },
};