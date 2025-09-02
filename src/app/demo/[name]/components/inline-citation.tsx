import { 
  InlineCitation, 
  InlineCitationText, 
  InlineCitationCard, 
  InlineCitationCardTrigger, 
  InlineCitationCardBody,
  InlineCitationCarousel,
  InlineCitationCarouselContent,
  InlineCitationCarouselItem,
  InlineCitationCarouselHeader,
  InlineCitationCarouselIndex,
  InlineCitationCarouselPrev,
  InlineCitationCarouselNext,
  InlineCitationSource,
  InlineCitationQuote
} from "@/components/ai-elements/inline-citation";

export const inlineCitation = {
  name: "inline-citation",
  components: {
    Default: (
      <div className="max-w-md">
        <p className="text-sm">
          <InlineCitation>
            <InlineCitationText>
              React is a popular JavaScript library for building user interfaces
            </InlineCitationText>
            <InlineCitationCard>
              <InlineCitationCardTrigger sources={["https://react.dev", "https://reactjs.org"]} />
              <InlineCitationCardBody>
                <InlineCitationCarousel>
                  <InlineCitationCarouselHeader>
                    <InlineCitationCarouselPrev />
                    <InlineCitationCarouselIndex />
                    <InlineCitationCarouselNext />
                  </InlineCitationCarouselHeader>
                  <InlineCitationCarouselContent>
                    <InlineCitationCarouselItem>
                      <InlineCitationSource
                        title="React – A JavaScript library for building user interfaces"
                        url="https://react.dev"
                        description="React makes it painless to create interactive UIs. Design simple views for each state in your application."
                      />
                      <InlineCitationQuote>
                        "A JavaScript library for building user interfaces"
                      </InlineCitationQuote>
                    </InlineCitationCarouselItem>
                    <InlineCitationCarouselItem>
                      <InlineCitationSource
                        title="React - The library for web and native user interfaces"
                        url="https://reactjs.org"
                        description="React lets you build user interfaces out of individual pieces called components."
                      />
                      <InlineCitationQuote>
                        "The library for web and native user interfaces"
                      </InlineCitationQuote>
                    </InlineCitationCarouselItem>
                  </InlineCitationCarouselContent>
                </InlineCitationCarousel>
              </InlineCitationCardBody>
            </InlineCitationCard>
          </InlineCitation>
          {" "}developed by Facebook.
        </p>
      </div>
    ),
  },
};