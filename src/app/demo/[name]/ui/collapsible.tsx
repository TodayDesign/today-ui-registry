import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export const collapsible = {
  name: "collapsible",
  components: {
    Default: (
      <Collapsible className="w-[350px] space-y-2">
        <CollapsibleTrigger asChild>
          <Button variant="ghost" className="flex w-full justify-between p-4">
            <span>Can I use this in my project?</span>
            <ChevronDown className="h-4 w-4" />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-2">
          <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
            Yes. Free to use for personal and commercial projects. No attribution
            required.
          </div>
        </CollapsibleContent>
      </Collapsible>
    ),
    "With Multiple Items": (
      <Collapsible className="w-[350px] space-y-2">
        <CollapsibleTrigger asChild>
          <Button variant="ghost" className="flex w-full justify-between p-4">
            <span>@peduarte starred 3 repositories</span>
            <ChevronDown className="h-4 w-4" />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-2">
          <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
            @radix-ui/primitives
          </div>
          <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
            @radix-ui/colors
          </div>
          <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
            @stitches/react
          </div>
        </CollapsibleContent>
      </Collapsible>
    ),
  },
};