import {
  Tool,
  ToolHeader,
  ToolContent,
  ToolInput,
  ToolOutput,
} from "@/components/ai-elements/tool";

export const tool = {
  name: "tool",
  components: {
    "Pending Tool": (
      <Tool>
        <ToolHeader type="tool-search_web" state="input-streaming" />
        <ToolContent>
          <ToolInput
            input={{ query: "React components best practices", limit: 5 }}
          />
        </ToolContent>
      </Tool>
    ),
    "Running Tool": (
      <Tool defaultOpen>
        <ToolHeader type="tool-code_execution" state="input-available" />
        <ToolContent>
          <ToolInput
            input={{
              language: "javascript",
              code: "console.log('Hello World');",
            }}
          />
        </ToolContent>
      </Tool>
    ),
    "Completed Tool": (
      <Tool defaultOpen>
        <ToolHeader type="tool-file_search" state="output-available" />
        <ToolContent>
          <ToolInput
            input={{ pattern: "*.tsx", directory: "src/components" }}
          />
          <ToolOutput
            output={
              <div className="space-y-1 text-xs">
                <div>Found 15 files:</div>
                <div className="ml-2">
                  <div>• src/components/Button.tsx</div>
                  <div>• src/components/Input.tsx</div>
                  <div>• src/components/Modal.tsx</div>
                  <div>• src/components/Card.tsx</div>
                  <div>• ... and 11 more files</div>
                </div>
              </div>
            }
            errorText=""
          />
        </ToolContent>
      </Tool>
    ),
    "Error Tool": (
      <Tool defaultOpen>
        <ToolHeader type="tool-api_call" state="output-error" />
        <ToolContent>
          <ToolInput input={{ endpoint: "/api/users", method: "GET" }} />
          <ToolOutput
            output=""
            errorText="Network request failed: Connection timeout after 30 seconds"
          />
        </ToolContent>
      </Tool>
    ),
    "Complex Tool Output": (
      <Tool defaultOpen>
        <ToolHeader type="tool-database_query" state="output-available" />
        <ToolContent>
          <ToolInput
            input={{
              query:
                "SELECT name, email FROM users WHERE active = true LIMIT 10",
              database: "production",
            }}
          />
          <ToolOutput
            output={
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-1">Name</th>
                    <th className="text-left p-1">Email</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-1">Alice Johnson</td>
                    <td className="p-1">alice@example.com</td>
                  </tr>
                  <tr>
                    <td className="p-1">Bob Smith</td>
                    <td className="p-1">bob@example.com</td>
                  </tr>
                  <tr>
                    <td className="p-1">Carol Davis</td>
                    <td className="p-1">carol@example.com</td>
                  </tr>
                </tbody>
              </table>
            }
            errorText=""
          />
        </ToolContent>
      </Tool>
    ),
  },
};
