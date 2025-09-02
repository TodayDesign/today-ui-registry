import { Task, TaskTrigger, TaskContent, TaskItem, TaskItemFile } from "@/components/ai-elements/task";

export const task = {
  name: "task",
  components: {
    Default: (
      <Task>
        <TaskTrigger title="Searching for React components" />
        <TaskContent>
          <TaskItem>
            Found 15 component files in <TaskItemFile>src/components/</TaskItemFile>
          </TaskItem>
          <TaskItem>
            Analyzing component dependencies in <TaskItemFile>package.json</TaskItemFile>
          </TaskItem>
          <TaskItem>
            Checking TypeScript definitions in <TaskItemFile>src/types/</TaskItemFile>
          </TaskItem>
        </TaskContent>
      </Task>
    ),
    "File Analysis Task": (
      <Task defaultOpen>
        <TaskTrigger title="Analyzing project structure" />
        <TaskContent>
          <TaskItem>
            Reading configuration from <TaskItemFile>tsconfig.json</TaskItemFile>
          </TaskItem>
          <TaskItem>
            Found 23 React components in <TaskItemFile>src/components/ui/</TaskItemFile>
          </TaskItem>
          <TaskItem>
            Checking test coverage in <TaskItemFile>__tests__/</TaskItemFile>
          </TaskItem>
          <TaskItem>
            Validating imports in <TaskItemFile>src/lib/utils.ts</TaskItemFile>
          </TaskItem>
        </TaskContent>
      </Task>
    ),
    "Build Task": (
      <Task>
        <TaskTrigger title="Building production bundle" />
        <TaskContent>
          <TaskItem>
            Compiling TypeScript files...
          </TaskItem>
          <TaskItem>
            Bundling assets with <TaskItemFile>webpack.config.js</TaskItemFile>
          </TaskItem>
          <TaskItem>
            Optimizing images in <TaskItemFile>public/assets/</TaskItemFile>
          </TaskItem>
          <TaskItem>
            Generated build output in <TaskItemFile>dist/</TaskItemFile>
          </TaskItem>
          <TaskItem>
            ✅ Build completed successfully
          </TaskItem>
        </TaskContent>
      </Task>
    ),
    "Custom Trigger": (
      <Task>
        <TaskTrigger title="">
          <div className="flex items-center gap-2 text-muted-foreground hover:text-foreground cursor-pointer">
            <span>🔍</span>
            <span className="text-sm">Searching codebase for patterns</span>
          </div>
        </TaskTrigger>
        <TaskContent>
          <TaskItem>
            Scanning <TaskItemFile>src/</TaskItemFile> for unused imports
          </TaskItem>
          <TaskItem>
            Found 3 potential optimizations in <TaskItemFile>components/</TaskItemFile>
          </TaskItem>
          <TaskItem>
            Checking accessibility issues in <TaskItemFile>pages/</TaskItemFile>
          </TaskItem>
        </TaskContent>
      </Task>
    ),
  },
};