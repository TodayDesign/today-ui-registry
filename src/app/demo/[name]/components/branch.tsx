import { Branch, BranchMessages, BranchSelector, BranchPrevious, BranchNext, BranchPage } from "@/components/ai-elements/branch";

export const branch = {
  name: "branch",
  components: {
    Default: (
      <Branch>
        <BranchMessages>
          <div key="branch-1">
            <p className="text-sm">This is the first branch of the conversation.</p>
          </div>
          <div key="branch-2">
            <p className="text-sm">This is an alternative response branch.</p>
          </div>
          <div key="branch-3">
            <p className="text-sm">Here's a third possible response.</p>
          </div>
        </BranchMessages>
        <BranchSelector from="assistant">
          <BranchPrevious />
          <BranchPage />
          <BranchNext />
        </BranchSelector>
      </Branch>
    ),
  },
};