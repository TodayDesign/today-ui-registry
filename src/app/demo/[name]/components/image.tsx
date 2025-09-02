import { Image } from "@/components/ai-elements/image";

// Mock base64 image data for demo (a small red square)
const mockImageData =
  "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==";

export const image = {
  name: "image",
  components: {
    Default: (
      <Image
        base64={mockImageData}
        uint8Array={
          new Uint8Array([
            /* mock image data */
          ])
        }
        mediaType="image/png"
        alt="AI generated image demo"
        className="max-w-64"
      />
    ),
    "With Custom Styling": (
      <div className="p-4 border rounded-lg">
        <h3 className="text-sm font-medium mb-2">Generated Image</h3>
        <Image
          base64={mockImageData}
          uint8Array={
            new Uint8Array([
              /* mock image data */
            ])
          }
          mediaType="image/png"
          alt="Custom styled AI image"
          className="border-2 border-dashed border-muted-foreground rounded-md"
        />
      </div>
    ),
  },
};
