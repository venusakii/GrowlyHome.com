import { Check, X } from "lucide-react"

export function ComparisonSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Store-Bought vs. Homegrown
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            See why growing your own microgreens is the smarter choice
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-muted/50 border border-border rounded-xl p-8 space-y-6 animate-slide-in-left">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Store-Bought Microgreens</h3>
              <ul className="space-y-4">
                {[
                  "Expensive ($4-8 per ounce)",
                  "Limited freshness",
                  "Fewer variety options",
                  "Packaging waste",
                  "Unknown growing conditions",
                  "Frequent store trips",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center shrink-0 mt-0.5">
                      <X className="h-4 w-4 text-destructive" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-primary/5 border-2 border-primary rounded-xl p-8 space-y-6 animate-slide-in-right">
              <h3 className="font-serif text-2xl font-bold text-primary mb-6">Homegrown Microgreens</h3>
              <ul className="space-y-4">
                {[
                  "Cost-effective (pennies per ounce)",
                  "Maximum freshness",
                  "Endless variety options",
                  "Zero packaging waste",
                  "Full control over quality",
                  "Harvest on demand",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
