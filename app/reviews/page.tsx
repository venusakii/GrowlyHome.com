"use client"

import { useState, useMemo } from "react"
import { ProductCard } from "@/components/reviews/product-card"
import { FilterSection } from "@/components/reviews/filter-section"
import { Sprout } from "lucide-react"

export type Filters = {
  categories: string[]
  priceRanges: string[]
  bestFor: string[]
  ratings: string[]
}

const products = [
  {
    id: "idoo-hydroponics-growing-system",
    name: "iDOO Hydroponics Growing System",
    brand: "iDOO",
    rating: 4.5,
    reviews: 1500,
    price: "$79.99",
    priceValue: 79.99,
    image: "https://m.media-amazon.com/images/I/81+2GYT3XHL._AC_SX679_.jpg",
    features: ["12 Pod System", "Automatic LED Grow Lights", "Water Circulation System", "Height Adjustable"],
    category: "Hydroponic",
    bestFor: "Beginners",
  },
  {
    id: "aerogarden-harvest-elite",
    name: "AeroGarden Harvest Elite",
    brand: "AeroGarden",
    rating: 4.6,
    reviews: 1200,
    price: "$129.95",
    priceValue: 129.95,
    image: "https://m.media-amazon.com/images/I/718o2L7QIjL._AC_SX679_.jpg",
    features: ["6 Pod Capacity", "Stainless Steel Finish", "Digital Display", "Vacation Mode"],
    category: "Hydroponic",
    bestFor: "Kitchen Counter",
  },
  {
    id: "vivosun-microgreens-kit",
    name: "VIVOSUN Grow Tent Complete Kit",
    brand: "VIVOSUN",
    rating: 4.7,
    reviews: 800,
    price: "$159.99",
    priceValue: 159.99,
    image: "https://m.media-amazon.com/images/I/71SkfVZHtIL._AC_SX679_.jpg",
    features: ["LED Grow Light", "Ventilation System", "Grow Tent", "Accessories Included"],
    category: "Grow Tent",
    bestFor: "Indoor Growing",
  },
  {
    id: "click-and-grow-smart-garden",
    name: "Click & Grow Smart Garden 9",
    brand: "Click & Grow",
    rating: 4.8,
    reviews: 2000,
    price: "$199.96",
    priceValue: 199.96,
    features: ["9 Pod System", "Automated Watering", "LED Grow Light", "App Control"],
    category: "Smart Garden",
    bestFor: "Herbs & Veggies",
  },
  {
    id: "hamama-microgreens-kit",
    name: "Hamama Microgreens Growing Kit",
    brand: "Hamama",
    rating: 4.5,
    reviews: 900,
    price: "$35.00",
    priceValue: 35.00,
    image: "https://m.media-amazon.com/images/I/71t6uTuwL2L._AC_SX679_.jpg",
    features: ["Seed Quilts", "Bamboo Frame", "Easy Growing", "Variety Packs"],
    category: "Tray System",
    bestFor: "Microgreens",
  },
  {
    id: "ahopegarden-hydroponics-system",
    name: "Ahopegarden Hydroponics Growing System",
    brand: "Ahopegarden",
    rating: 4.4,
    reviews: 500,
    price: "$53.19",
    priceValue: 53.19,
    image: "https://m.media-amazon.com/images/I/81VxSjMq8yL._AC_SX679_.jpg",
    features: ["12 Pods", "LCD Touch Panel", "17\" Height", "Quiet Pump"],
    category: "Hydroponic",
    bestFor: "Indoor Herbs",
  },
  {
    id: "back-to-the-roots-water-garden",
    name: "Back to the Roots Water Garden",
    brand: "Back to the Roots",
    rating: 4.3,
    reviews: 700,
    price: "$99.99",
    priceValue: 99.99,
    image: "https://m.media-amazon.com/images/I/61Vb6bi2H2L._AC_SX679_.jpg",
    features: ["Aquaponic System", "3 Gallon Tank", "Includes Fish Food", "Educational"],
    category: "Aquaponic",
    bestFor: "Beginners & Kids",
  },
  {
    id: "rise-gardens-personal-garden",
    name: "Rise Gardens Personal Garden",
    brand: "Rise Gardens",
    rating: 4.7,
    reviews: 400,
    price: "$279.00",
    priceValue: 279.00,
    image: "https://m.media-amazon.com/images/I/81WBijSHa4L._AC_SX679_.jpg",
    features: ["WiFi Connected", "App Controlled", "Modular Design", "LED Lights"],
    category: "Smart Hydroponic",
    bestFor: "Tech Enthusiasts",
  },
  {
    id: "gardyn-home-kit",
    name: "Gardyn Home Kit 3.0",
    brand: "Gardyn",
    rating: 4.6,
    reviews: 300,
    price: "$595.00",
    priceValue: 595.00,
    image: "https://m.media-amazon.com/images/I/81qXljfZRDL._AC_SX679_.jpg",
    features: ["Vertical Tower", "30 Plants", "AI Assistant", "Automated"],
    category: "Vertical Hydroponic",
    bestFor: "Large Harvests",
  },
]

export default function ReviewsPage() {
  const [filters, setFilters] = useState<Filters>({
    categories: [],
    priceRanges: [],
    bestFor: [],
    ratings: [],
  })

  const [sortBy, setSortBy] = useState("popular")

  const filteredProducts = useMemo(() => {
    let filtered = [...products]

    // Filter by category
    if (filters.categories.length > 0) {
      filtered = filtered.filter((p) => filters.categories.includes(p.category))
    }

    // Filter by price range
    if (filters.priceRanges.length > 0) {
      filtered = filtered.filter((p) => {
        return filters.priceRanges.some((range) => {
          if (range === "Under $50") return p.priceValue < 50
          if (range === "$50 - $100") return p.priceValue >= 50 && p.priceValue <= 100
          if (range === "$100 - $200") return p.priceValue > 100 && p.priceValue <= 200
          if (range === "$200 - $300") return p.priceValue > 200 && p.priceValue <= 300
          if (range === "Over $300") return p.priceValue > 300
          return false
        })
      })
    }

    // Filter by bestFor
    if (filters.bestFor.length > 0) {
      filtered = filtered.filter((p) => filters.bestFor.includes(p.bestFor))
    }

    // Filter by rating
    if (filters.ratings.length > 0) {
      filtered = filtered.filter((p) => {
        return filters.ratings.some((rating) => {
          if (rating === "4.5+ Stars") return p.rating >= 4.5
          if (rating === "4.0+ Stars") return p.rating >= 4.0
          if (rating === "3.5+ Stars") return p.rating >= 3.5
          if (rating === "3.0+ Stars") return p.rating >= 3.0
          return false
        })
      })
    }

    // Sort products
    if (sortBy === "rating") {
      filtered.sort((a, b) => b.rating - a.rating)
    } else if (sortBy === "price-low") {
      filtered.sort((a, b) => a.priceValue - b.priceValue)
    } else if (sortBy === "price-high") {
      filtered.sort((a, b) => b.priceValue - a.priceValue)
    } else if (sortBy === "reviews") {
      filtered.sort((a, b) => b.reviews - a.reviews)
    }

    return filtered
  }, [filters, sortBy])

  const handleFilterChange = (filterType: keyof Filters, value: string, checked: boolean) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: checked ? [...prev[filterType], value] : prev[filterType].filter((v) => v !== value),
    }))
  }

  const handleClearFilters = () => {
    setFilters({
      categories: [],
      priceRanges: [],
      bestFor: [],
      ratings: [],
    })
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 py-16 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Sprout className="h-4 w-4" />
              <span>Expert Reviews & Comparisons</span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground text-balance">
              Microgreens Growing Kit Reviews
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Comprehensive, honest reviews of the best microgreens growing kits. Find your perfect match based on
              budget, space, and experience level.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <aside className="lg:w-64 shrink-0">
              <FilterSection
                filters={filters}
                onFilterChange={handleFilterChange}
                onClearFilters={handleClearFilters}
              />
            </aside>

            {/* Products Grid */}
            <div className="flex-1">
              <div className="mb-6 flex items-center justify-between">
                <p className="text-muted-foreground">
                  Showing <span className="font-semibold text-foreground">{filteredProducts.length}</span> products
                </p>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 rounded-md border border-input bg-background text-sm"
                >
                  <option value="popular">Most Popular</option>
                  <option value="rating">Highest Rated</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="reviews">Most Reviews</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground text-lg">No products match your filters.</p>
                  <button
                    onClick={handleClearFilters}
                    className="mt-4 px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Clear All Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
