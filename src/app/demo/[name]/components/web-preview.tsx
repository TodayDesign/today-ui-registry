import {
  WebPreview,
  WebPreviewNavigation,
  WebPreviewNavigationButton,
  WebPreviewUrl,
  WebPreviewBody,
  WebPreviewConsole,
} from "@/components/ai-elements/web-preview";
import { ArrowLeft, ArrowRight, RotateCcw, ExternalLink } from "lucide-react";

export const webPreview = {
  name: "web-preview",
  components: {
    Default: (
      <div className="h-96">
        <WebPreview defaultUrl="https://react.dev">
          <WebPreviewNavigation>
            <WebPreviewNavigationButton tooltip="Back" disabled>
              <ArrowLeft className="h-4 w-4" />
            </WebPreviewNavigationButton>
            <WebPreviewNavigationButton tooltip="Forward" disabled>
              <ArrowRight className="h-4 w-4" />
            </WebPreviewNavigationButton>
            <WebPreviewNavigationButton tooltip="Refresh">
              <RotateCcw className="h-4 w-4" />
            </WebPreviewNavigationButton>
            <WebPreviewUrl />
            <WebPreviewNavigationButton tooltip="Open in new tab">
              <ExternalLink className="h-4 w-4" />
            </WebPreviewNavigationButton>
          </WebPreviewNavigation>
          <WebPreviewBody />
        </WebPreview>
      </div>
    ),
    "With Console": (
      <div className="h-96">
        <WebPreview defaultUrl="https://example.com">
          <WebPreviewNavigation>
            <WebPreviewNavigationButton tooltip="Back">
              <ArrowLeft className="h-4 w-4" />
            </WebPreviewNavigationButton>
            <WebPreviewNavigationButton tooltip="Forward">
              <ArrowRight className="h-4 w-4" />
            </WebPreviewNavigationButton>
            <WebPreviewNavigationButton tooltip="Refresh">
              <RotateCcw className="h-4 w-4" />
            </WebPreviewNavigationButton>
            <WebPreviewUrl />
          </WebPreviewNavigation>
          <WebPreviewBody />
          <WebPreviewConsole
            logs={[
              {
                level: "log",
                message: "Page loaded successfully",
                timestamp: new Date(),
              },
              {
                level: "warn",
                message: "Deprecated API usage detected",
                timestamp: new Date(),
              },
              {
                level: "error",
                message: "Failed to load resource: 404",
                timestamp: new Date(),
              },
            ]}
          />
        </WebPreview>
      </div>
    ),
    "Simple Preview": (
      <div className="h-64">
        <WebPreview>
          <WebPreviewNavigation>
            <WebPreviewUrl placeholder="Enter URL to preview..." />
            <WebPreviewNavigationButton tooltip="Load">
              <ArrowRight className="h-4 w-4" />
            </WebPreviewNavigationButton>
          </WebPreviewNavigation>
          <WebPreviewBody src="https://ai-sdk.dev" />
        </WebPreview>
      </div>
    ),
    "Console Only": (
      <div className="h-48">
        <WebPreview>
          <WebPreviewConsole
            logs={[
              {
                level: "log",
                message: "Console initialized",
                timestamp: new Date(Date.now() - 5000),
              },
              {
                level: "log",
                message: "Application started",
                timestamp: new Date(Date.now() - 4000),
              },
              {
                level: "warn",
                message: "Performance warning: Large DOM detected",
                timestamp: new Date(Date.now() - 3000),
              },
              {
                level: "error",
                message: "TypeError: Cannot read property of undefined",
                timestamp: new Date(Date.now() - 2000),
              },
              {
                level: "log",
                message: "Attempting to recover...",
                timestamp: new Date(Date.now() - 1000),
              },
              {
                level: "log",
                message: "Recovery successful",
                timestamp: new Date(),
              },
            ]}
          />
        </WebPreview>
      </div>
    ),
  },
};
