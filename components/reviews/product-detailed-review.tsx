import { Palette, Zap, Wrench, DollarSign } from "lucide-react"

interface ProductDetailedReviewProps {
  review: {
    design: string
    performance: string
    easeOfUse: string
    value: string
  }
}

const sections = [
  { key: "design", title: "Design & Build Quality", icon: Palette },
  { key: "performance", title: "Performance", icon: Zap },
  { key: "easeOfUse", title: "Ease of Use", icon: Wrench },
  { key: "value", title: "Value for Money", icon: DollarSign },
]

export function ProductDetailedReview({ review }: ProductDetailedReviewProps) {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Detailed Review</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {sections.map((section, index) => (
            <div
              key={section.key}
              className="bg-card border border-border rounded-xl p-8 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <section.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-xl text-foreground">{section.title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">{review[section.key as keyof typeof review]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
