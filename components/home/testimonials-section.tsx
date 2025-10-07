import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Home Gardener",
    content:
      "GrowlyHome helped me find the perfect microgreens kit for my apartment. The reviews are detailed and honest. I'm now growing fresh greens every week!",
    rating: 5,
    image: "/smiling-woman-portrait.png",
  },
  {
    name: "Michael Chen",
    role: "Health Enthusiast",
    content:
      "The comparison guides are incredibly helpful. I saved hours of research and found exactly what I needed. My family loves the fresh microgreens!",
    rating: 5,
    image: "/smiling-man-portrait.png",
  },
  {
    name: "Emma Williams",
    role: "Urban Farmer",
    content:
      "As someone new to indoor gardening, the step-by-step guides were invaluable. The product recommendations are spot-on and trustworthy.",
    rating: 5,
    image: "/happy-woman-portrait.png",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            What Our Readers Say
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Join thousands of happy indoor gardeners who trust our reviews
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 space-y-4 hover:shadow-lg transition-shadow animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed italic">"{testimonial.content}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
