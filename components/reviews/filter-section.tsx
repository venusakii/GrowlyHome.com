"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import type { Filters } from "@/app/reviews/page"

interface FilterSectionProps {
  filters: Filters
  onFilterChange: (filterType: keyof Filters, value: string, checked: boolean) => void
  onClearFilters: () => void
}

export function FilterSection({ filters, onFilterChange, onClearFilters }: FilterSectionProps) {
  const [openSections, setOpenSections] = useState<string[]>(["category", "price", "bestFor"])

  const toggleSection = (section: string) => {
    setOpenSections((prev) => (prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]))
  }

  return (
    <div className="bg-card border border-border rounded-xl p-6 space-y-6 sticky top-20">
      <h2 className="font-semibold text-lg text-foreground">Filters</h2>

      {/* Category Filter */}
      <div className="space-y-3">
        <button
          onClick={() => toggleSection("category")}
          className="flex items-center justify-between w-full text-sm font-medium text-foreground"
        >
          <span>Category</span>
          {openSections.includes("category") ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>
        {openSections.includes("category") && (
          <div className="space-y-2 pl-1">
            {["Hydroponic", "Tray System", "Smart System", "Vertical System", "Aquaponic"].map((category) => (
              <label key={category} className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer">
                <input
                  type="checkbox"
                  className="rounded border-input"
                  checked={filters.categories.includes(category)}
                  onChange={(e) => onFilterChange("categories", category, e.target.checked)}
                />
                <span>{category}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Price Filter */}
      <div className="space-y-3 pt-3 border-t border-border">
        <button
          onClick={() => toggleSection("price")}
          className="flex items-center justify-between w-full text-sm font-medium text-foreground"
        >
          <span>Price Range</span>
          {openSections.includes("price") ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>
        {openSections.includes("price") && (
          <div className="space-y-2 pl-1">
            {["Under $50", "$50 - $100", "$100 - $200", "$200 - $300", "Over $300"].map((range) => (
              <label key={range} className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer">
                <input
                  type="checkbox"
                  className="rounded border-input"
                  checked={filters.priceRanges.includes(range)}
                  onChange={(e) => onFilterChange("priceRanges", range, e.target.checked)}
                />
                <span>{range}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Best For Filter */}
      <div className="space-y-3 pt-3 border-t border-border">
        <button
          onClick={() => toggleSection("bestFor")}
          className="flex items-center justify-between w-full text-sm font-medium text-foreground"
        >
          <span>Best For</span>
          {openSections.includes("bestFor") ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>
        {openSections.includes("bestFor") && (
          <div className="space-y-2 pl-1">
            {["Beginners", "Advanced", "Budget", "Tech Lovers", "Families", "Serious Growers", "Kids"].map((type) => (
              <label key={type} className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer">
                <input
                  type="checkbox"
                  className="rounded border-input"
                  checked={filters.bestFor.includes(type)}
                  onChange={(e) => onFilterChange("bestFor", type, e.target.checked)}
                />
                <span>{type}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Rating Filter */}
      <div className="space-y-3 pt-3 border-t border-border">
        <button
          onClick={() => toggleSection("rating")}
          className="flex items-center justify-between w-full text-sm font-medium text-foreground"
        >
          <span>Rating</span>
          {openSections.includes("rating") ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>
        {openSections.includes("rating") && (
          <div className="space-y-2 pl-1">
            {["4.5+ Stars", "4.0+ Stars", "3.5+ Stars", "3.0+ Stars"].map((rating) => (
              <label key={rating} className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer">
                <input
                  type="checkbox"
                  className="rounded border-input"
                  checked={filters.ratings.includes(rating)}
                  onChange={(e) => onFilterChange("ratings", rating, e.target.checked)}
                />
                <span>{rating}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      <button
        onClick={onClearFilters}
        className="w-full py-2 text-sm text-primary hover:text-primary/80 transition-colors"
      >
        Clear All Filters
      </button>
    </div>
  )
}
