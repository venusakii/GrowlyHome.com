import { Check, X } from "lucide-react"

interface ProductProsConsProps {
  pros: string[]
  cons: string[]
}

export function ProductProsConsSection({ pros, cons }: ProductProsConsProps) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Pros & Cons</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-primary/5 border-2 border-primary rounded-xl p-8 animate-slide-in-left">
            <h3 className="font-serif text-2xl font-bold text-primary mb-6 flex items-center gap-2">
              <Check className="h-6 w-6" />
              Pros
            </h3>
            <ul className="space-y-3">
              {pros.map((pro, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-foreground">{pro}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-muted/50 border border-border rounded-xl p-8 animate-slide-in-right">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <X className="h-6 w-6" />
              Cons
            </h3>
            <ul className="space-y-3">
              {cons.map((con, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-destructive/20 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="h-3 w-3 text-destructive" />
                  </div>
                  <span className="text-foreground">{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
