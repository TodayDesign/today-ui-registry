import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
);

export const scrollArea = {
  name: "scroll-area",
  components: {
    Default: (
      <ScrollArea className="h-72 w-48 rounded-md border">
        <div className="p-4">
          <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
          {tags.map((tag) => (
            <>
              <div key={tag} className="text-sm">
                {tag}
              </div>
              <Separator className="my-2" />
            </>
          ))}
        </div>
      </ScrollArea>
    ),
    "Horizontal": (
      <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
        <div className="flex w-max space-x-4 p-4">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="shrink-0 rounded-md bg-muted p-4"
              style={{ width: "250px" }}
            >
              <div className="space-y-3">
                <div className="h-4 bg-muted-foreground/20 rounded" />
                <div className="space-y-2">
                  <div className="h-3 bg-muted-foreground/20 rounded" />
                  <div className="h-3 bg-muted-foreground/20 rounded w-4/5" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    ),
  },
};