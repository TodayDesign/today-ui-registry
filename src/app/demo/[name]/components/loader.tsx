import { Loader } from "@/components/ai-elements/loader";

export const loader = {
  name: "loader",
  components: {
    Default: (
      <div className="p-4 space-y-4">
        <div className="flex items-center gap-2">
          <Loader />
          <span className="text-sm text-muted-foreground">Loading...</span>
        </div>
      </div>
    ),
    "Different Sizes": (
      <div className="p-4 space-y-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Loader size={12} />
            <span className="text-xs text-muted-foreground">Small</span>
          </div>
          <div className="flex items-center gap-2">
            <Loader size={16} />
            <span className="text-sm text-muted-foreground">Default</span>
          </div>
          <div className="flex items-center gap-2">
            <Loader size={24} />
            <span className="text-base text-muted-foreground">Large</span>
          </div>
        </div>
      </div>
    ),
    "In Context": (
      <div className="p-4 border rounded-lg">
        <div className="flex items-center justify-center h-24">
          <div className="text-center space-y-2">
            <Loader size={20} />
            <p className="text-sm text-muted-foreground">Thinking...</p>
          </div>
        </div>
      </div>
    ),
  },
};