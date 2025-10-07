import { Thermometer, Sun, Droplet, Scissors } from "lucide-react"

const tips = [
  {
    icon: Sun,
    title: "Proper Lighting",
    description: "Provide 12-16 hours of light daily for optimal growth",
  },
  {
    icon: Droplet,
    title: "Consistent Moisture",
    description: "Keep growing medium moist but not waterlogged",
  },
  {
    icon: Thermometer,
    title: "Temperature Control",
    description: "Maintain 65-75°F for best germination and growth",
  },
  {
    icon: Scissors,
    title: "Harvest Timing",
    description: "Cut when first true leaves appear for peak nutrition",
  },
]

export function GrowingTipsSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Essential Growing Tips
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Master the basics for successful microgreens cultivation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 text-center space-y-4 hover:border-primary/50 transition-all hover:shadow-lg animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <tip.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg text-foreground">{tip.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{tip.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
