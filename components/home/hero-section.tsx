import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Star } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="absolute inset-0 bg-[url('/abstract-colorful-shapes.png')] opacity-5"></div>
      </div>

      <div className="absolute inset-0 -z-5 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/20 blur-3xl animate-float"></div>
        <div
          className="absolute top-40 right-20 w-40 h-40 rounded-full bg-secondary/20 blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/4 w-36 h-36 rounded-full bg-accent/20 blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border-2 border-primary/30 text-primary text-base font-display font-bold animate-bounce-in shadow-lg">
            <Star className="h-5 w-5 fill-current animate-wiggle" />
            <span>Expert Reviews & Growing Guides</span>
            <Sparkles className="h-5 w-5 fill-current animate-wiggle" style={{ animationDelay: "0.5s" }} />
          </div>

          <h1 className="font-display text-6xl md:text-8xl font-bold text-foreground leading-tight animate-fade-in-up text-balance">
            Grow Fresh{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-rainbow">
                Microgreens
              </span>
              <svg
                className="absolute -bottom-4 left-0 w-full"
                height="20"
                viewBox="0 0 200 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 15C50 8 100 5 195 12" stroke="url(#gradient)" strokeWidth="6" strokeLinecap="round" />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="oklch(0.55 0.22 145)" />
                    <stop offset="50%" stopColor="oklch(0.75 0.18 320)" />
                    <stop offset="100%" stopColor="oklch(0.7 0.2 60)" />
                  </linearGradient>
                </defs>
              </svg>
            </span>{" "}
            at Home! 🌱
          </h1>

          <p className="text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in-up text-pretty font-display font-medium">
            Discover the best microgreens growing kits with our expert reviews and fun guides! 🎉
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-lg px-10 py-6 font-display font-bold shadow-2xl hover:shadow-primary/50 transition-all hover:scale-110 rounded-2xl"
            >
              <Link href="/reviews">
                View Top Picks ⭐
                <ArrowRight className="ml-2 h-6 w-6" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-10 py-6 font-display font-bold border-4 border-primary hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110 rounded-2xl bg-transparent"
            >
              <Link href="/about">Learn More 📚</Link>
            </Button>
          </div>

          <div className="relative h-40 mt-16">
            <div className="absolute left-[10%] top-0 animate-float">
              <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center shadow-2xl transform rotate-12 hover:rotate-0 transition-transform">
                <span className="text-5xl">🌱</span>
              </div>
            </div>
            <div className="absolute right-[15%] top-4 animate-float" style={{ animationDelay: "1s" }}>
              <div className="w-28 h-28 rounded-3xl bg-gradient-to-br from-secondary to-secondary/50 flex items-center justify-center shadow-2xl transform -rotate-12 hover:rotate-0 transition-transform">
                <span className="text-6xl">🥬</span>
              </div>
            </div>
            <div className="absolute left-[35%] bottom-0 animate-float" style={{ animationDelay: "2s" }}>
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-accent to-accent/50 flex items-center justify-center shadow-2xl transform rotate-6 hover:rotate-0 transition-transform">
                <span className="text-4xl">🌿</span>
              </div>
            </div>
            <div className="absolute right-[35%] top-8 animate-float" style={{ animationDelay: "0.5s" }}>
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center shadow-xl">
                <Sparkles className="h-8 w-8 text-primary animate-wiggle" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
