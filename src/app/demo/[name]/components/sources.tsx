import {
  Sources,
  SourcesTrigger,
  SourcesContent,
  Source,
} from "@/components/ai-elements/sources";

export const sources = {
  name: "sources",
  components: {
    Default: (
      <Sources>
        <SourcesTrigger count={3} />
        <SourcesContent>
          <Source href="https://react.dev" title="React Documentation" />
          <Source href="https://reactjs.org/tutorial" title="React Tutorial" />
          <Source href="https://react.dev/learn" title="Learn React" />
        </SourcesContent>
      </Sources>
    ),
    "Custom Trigger": (
      <Sources>
        <SourcesTrigger count={2}>
          <div className="flex items-center gap-2">
            <span className="text-sm">📚</span>
            <span className="text-sm font-medium">Referenced 2 sources</span>
          </div>
        </SourcesTrigger>
        <SourcesContent>
          <Source
            href="https://typescript-eslint.io"
            title="TypeScript ESLint"
          />
          <Source
            href="https://www.typescriptlang.org/docs"
            title="TypeScript Handbook"
          />
        </SourcesContent>
      </Sources>
    ),
    "Many Sources": (
      <Sources>
        <SourcesTrigger count={5} />
        <SourcesContent>
          <Source
            href="https://react.dev"
            title="React - The library for web and native user interfaces"
          />
          <Source
            href="https://nextjs.org"
            title="Next.js - The React Framework"
          />
          <Source
            href="https://tailwindcss.com"
            title="Tailwind CSS - A utility-first CSS framework"
          />
          <Source
            href="https://www.radix-ui.com"
            title="Radix UI - Unstyled, accessible components"
          />
          <Source
            href="https://ui.shadcn.com"
            title="shadcn/ui - Re-usable components"
          />
        </SourcesContent>
      </Sources>
    ),
  },
};
