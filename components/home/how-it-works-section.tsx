import { Search, Star, ShoppingCart, Sprout } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Browse Reviews",
    description: "Explore our comprehensive reviews of top microgreens growing kits",
  },
  {
    icon: Star,
    title: "Compare Options",
    description: "Compare features, prices, and user ratings to find your perfect match",
  },
  {
    icon: ShoppingCart,
    title: "Make Your Choice",
    description: "Purchase through our affiliate links to support our work",
  },
  {
    icon: Sprout,
    title: "Start Growing",
    description: "Follow our guides and enjoy fresh microgreens in weeks",
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">How It Works</h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Your journey to fresh, homegrown microgreens starts here
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative animate-fade-in-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <div className="text-center space-y-4">
                <div className="relative inline-block">
                  <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mx-auto shadow-lg">
                    <step.icon className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold text-sm">
                    {index + 1}
                  </div>
                </div>
                <h3 className="font-semibold text-xl text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-border">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
