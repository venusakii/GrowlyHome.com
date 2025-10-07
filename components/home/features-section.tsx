import { Leaf, Lightbulb, Droplets, Clock, Heart, Shield } from "lucide-react"

const features = [
  {
    icon: Leaf,
    title: "Expert Reviews",
    description: "In-depth analysis of the best microgreens growing kits on the market",
  },
  {
    icon: Lightbulb,
    title: "LED Technology",
    description: "Reviews of kits with optimal lighting for year-round growing",
  },
  {
    icon: Droplets,
    title: "Hydroponic Systems",
    description: "Water-efficient growing solutions for maximum yield",
  },
  {
    icon: Clock,
    title: "Quick Results",
    description: "Harvest fresh microgreens in as little as 7-14 days",
  },
  {
    icon: Heart,
    title: "Health Benefits",
    description: "Packed with vitamins, minerals, and antioxidants",
  },
  {
    icon: Shield,
    title: "Trusted Recommendations",
    description: "Honest reviews from experienced indoor gardeners",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Why Choose GrowlyHome?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Your trusted source for microgreens growing kit reviews and indoor gardening expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-2 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
