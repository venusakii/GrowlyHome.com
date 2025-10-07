import { Button } from "@/components/ui/button"
import { ExternalLink, ShoppingCart } from "lucide-react"

interface BuyNowSectionProps {
  product: {
    name: string
    price: string
    amazonLink: string
  }
}

export function BuyNowSection({ product }: BuyNowSectionProps) {
  return (
    <section className="py-8 bg-primary/5 border-y border-border sticky top-16 z-40 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-semibold text-lg text-foreground">{product.name}</h3>
            
          </div>
          <div className="flex items-center gap-3">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <a href={product.amazonLink} target="_blank" rel="noopener noreferrer">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Buy on Amazon
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
