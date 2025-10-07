import { HeroSection } from "@/components/home/hero-section"
import { FeaturesSection } from "@/components/home/features-section"
import { BenefitsSection } from "@/components/home/benefits-section"
import { HowItWorksSection } from "@/components/home/how-it-works-section"
import { ProductShowcaseSection } from "@/components/home/product-showcase-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { ComparisonSection } from "@/components/home/comparison-section"
import { GrowingTipsSection } from "@/components/home/growing-tips-section"
import { StatsSection } from "@/components/home/stats-section"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <div className="relative">
      {/* Background decorative elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div
          className="absolute top-1/3 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-20 left-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <HeroSection />
      <FeaturesSection />
      <BenefitsSection />
      <HowItWorksSection />
      <ProductShowcaseSection />
      <TestimonialsSection />
      <ComparisonSection />
      <GrowingTipsSection />
      <StatsSection />
      <CTASection />
    </div>
  )
}
