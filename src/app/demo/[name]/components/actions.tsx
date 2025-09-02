import { Actions, Action } from "@/components/ai-elements/actions";
import { Copy, ThumbsUp, ThumbsDown, RefreshCw } from "lucide-react";

export const actions = {
  name: "actions",
  components: {
    Default: (
      <Actions>
        <Action tooltip="Copy response">
          <Copy className="h-4 w-4" />
        </Action>
        <Action tooltip="Good response">
          <ThumbsUp className="h-4 w-4" />
        </Action>
        <Action tooltip="Bad response">
          <ThumbsDown className="h-4 w-4" />
        </Action>
        <Action tooltip="Regenerate">
          <RefreshCw className="h-4 w-4" />
        </Action>
      </Actions>
    ),
  },
};