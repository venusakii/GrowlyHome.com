import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Star, ArrowRight } from "lucide-react"

const featuredProducts = [
  {
    name: "iDOO Hydroponics Growing System",
    rating: 4.8,
    reviews: 1247,
    price: "$89.99",
    image: "/modern-hydroponic-microgreens-growing-kit-with-led.jpg",
    features: ["12-Pod System", "LED Grow Light", "Auto Timer"],
  },
  {
    name: "AeroGarden Harvest Elite",
    rating: 4.7,
    reviews: 892,
    price: "$129.99",
    image: "/sleek-aerogarden-microgreens-system-with-touch-con.jpg",
    features: ["6-Pod Capacity", "Touch Controls", "Vacation Mode"],
  },
  {
    name: "VIVOSUN Microgreens Kit",
    rating: 4.6,
    reviews: 654,
    price: "$49.99",
    image: "/compact-microgreens-growing-tray-kit-with-dome-cov.jpg",
    features: ["Stackable Trays", "BPA-Free", "Budget Friendly"],
  },
]

export function ProductShowcaseSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Top Rated Growing Kits
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Our expert picks for the best microgreens growing kits available today
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProducts.map((product, index) => (
            <Link
              key={index}
              href={`/reviews/${product.name.toLowerCase().replace(/\s+/g, "-")}`}
              className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 animate-grow block"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  Top Pick
                </div>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="font-semibold text-xl text-foreground group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-primary text-primary" : "text-muted"}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.features.map((feature, i) => (
                    <span key={i} className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                    Click to view full review →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center animate-fade-in-up">
          <Button asChild size="lg" variant="outline" className="text-lg px-8 bg-transparent">
            <Link href="/reviews">
              View All Reviews
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
