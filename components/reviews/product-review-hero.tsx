import { Star, Award } from "lucide-react"

interface ProductReviewHeroProps {
  product: {
    name: string
    brand: string
    rating: number
    reviews: number
    price: string
    image: string
    description: string
  }
}

export function ProductReviewHero({ product }: ProductReviewHeroProps) {
  return (
    <section className="py-12 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Award className="h-4 w-4" />
              <span>Expert Review</span>
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-2">{product.brand}</p>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
                {product.name}
              </h1>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < Math.floor(product.rating) ? "fill-primary text-primary" : "text-muted"}`}
                    />
                  ))}
                </div>
                <span className="font-semibold text-foreground">{product.rating}</span>
              </div>
              <span className="text-muted-foreground">({product.reviews} reviews)</span>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">{product.description}</p>

            <div className="flex items-center gap-4 pt-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Price</p>
                
              </div>
            </div>
          </div>

          <div className="relative animate-slide-in-right">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-auto" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-primary/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-accent/20 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
