import { Suggestions, Suggestion } from "@/components/ai-elements/suggestion";

export const suggestion = {
  name: "suggestion",
  components: {
    Default: (
      <Suggestions>
        <Suggestion suggestion="How do I create a React component?" />
        <Suggestion suggestion="What is JSX?" />
        <Suggestion suggestion="How to use React hooks?" />
        <Suggestion suggestion="State management in React" />
        <Suggestion suggestion="React best practices" />
      </Suggestions>
    ),
    "With Click Handler": (
      <Suggestions>
        <Suggestion suggestion="Explain TypeScript interfaces" />
        <Suggestion suggestion="Show me async/await examples" />
        <Suggestion suggestion="CSS Grid vs Flexbox" />
        <Suggestion suggestion="React vs Vue comparison" />
      </Suggestions>
    ),
    "Long Suggestions": (
      <Suggestions>
        <Suggestion suggestion="How do I implement server-side rendering with Next.js?" />
        <Suggestion suggestion="What are the performance implications of using Context API?" />
        <Suggestion suggestion="Best practices for TypeScript in large React applications" />
        <Suggestion suggestion="How to optimize bundle size in modern React apps?" />
        <Suggestion suggestion="Implementing authentication with React and JWT tokens" />
      </Suggestions>
    ),
    "Short Suggestions": (
      <Suggestions>
        <Suggestion suggestion="useState" />
        <Suggestion suggestion="useEffect" />
        <Suggestion suggestion="Props" />
        <Suggestion suggestion="JSX" />
        <Suggestion suggestion="Components" />
        <Suggestion suggestion="Hooks" />
        <Suggestion suggestion="State" />
        <Suggestion suggestion="Events" />
      </Suggestions>
    ),
  },
};
