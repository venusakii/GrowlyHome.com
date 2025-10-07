import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 rounded-2xl p-12 text-center space-y-8 border border-primary/20 animate-fade-in-up">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground text-balance">
            Ready to Start Your Growing Journey?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            Explore our comprehensive reviews and find the perfect microgreens growing kit for your home today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
              <Link href="/reviews">
                Browse All Reviews
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 bg-transparent">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
