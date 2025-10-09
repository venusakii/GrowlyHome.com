import Link from "next/link"
import { Star, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const relatedProducts = [
  {
    id: "aerogarden-harvest-elite",
    name: "AeroGarden Harvest Elite",
    rating: 4.7,
    price: "$129.99",
    image: "/sleek-aerogarden-microgreens-system-with-touch-con.jpg",
  },
  {
    id: "vivosun-microgreens-kit",
    name: "VIVOSUN Microgreens Kit",
    rating: 4.6,
    price: "$49.99",
    image: "/compact-microgreens-growing-tray-kit-with-dome-cov.jpg",
  },
  {
    id: "click-and-grow-smart-garden",
    name: "Click & Grow Smart Garden 9",
    rating: 4.9,
    price: "$199.99",
    image: "/modern-hydroponic-microgreens-growing-kit-with-led.jpg",
  },
]

export function RelatedProducts({ currentProductId }: { currentProductId: string }) {
  const filtered = relatedProducts.filter((p) => p.id !== currentProductId).slice(0, 3)

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
          You Might Also Like
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {filtered.map((product, index) => (
            <div
              key={product.id}
              className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Link href={`/reviews/${product.id}`}>
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full aspect-square object-cover"
                />
              </Link>
              <div className="p-5 space-y-3">
                <Link href={`/reviews/${product.id}`}>
                  <h3 className="font-semibold text-lg text-foreground hover:text-primary transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                </Link>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 fill-primary text-primary" />
                  <span className="text-sm font-medium">{product.rating}</span>
                </div>
                <div className="flex items-center justify-between pt-2">
                  
                  <Button asChild size="sm" variant="outline">
                    <Link href={`/reviews/${product.id}`}>
                      View
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
