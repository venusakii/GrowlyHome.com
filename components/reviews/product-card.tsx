import Link from "next/link"
import { Star, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Product {
  id: string
  name: string
  brand: string
  rating: number
  reviews: number
  price: string
  image: string
  features: string[]
  category: string
  bestFor: string
}

interface ProductCardProps {
  product: Product
  index: number
}

export function ProductCard({ product, index }: ProductCardProps) {
  return (
    <div
      className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in-up"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <Link href={`/reviews/${product.id}`} className="block">
        <div className="relative overflow-hidden aspect-[4/3]">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
            {product.bestFor}
          </div>
          <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
            <Star className="h-3 w-3 fill-primary text-primary" />
            <span>{product.rating}</span>
          </div>
        </div>
      </Link>

      <div className="p-5 space-y-4">
        <div>
          <p className="text-xs text-muted-foreground mb-1">{product.brand}</p>
          <Link href={`/reviews/${product.id}`}>
            <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors line-clamp-2">
              {product.name}
            </h3>
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3.5 w-3.5 ${i < Math.floor(product.rating) ? "fill-primary text-primary" : "text-muted"}`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">({product.reviews})</span>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {product.features.slice(0, 3).map((feature, i) => (
            <span key={i} className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">
              {feature}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-border">
          
          <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
            <Link href={`/reviews/${product.id}`}>
              Review
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
