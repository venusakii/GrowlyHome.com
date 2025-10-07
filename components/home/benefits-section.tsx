export function BenefitsSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in-left">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground text-balance">
              The Power of Fresh Microgreens
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Microgreens are young vegetable greens that are packed with nutrients and flavor. They contain up to 40
              times more vital nutrients than their mature counterparts.
            </p>
            <ul className="space-y-4">
              {[
                "Rich in vitamins C, E, and K",
                "High in beneficial plant compounds",
                "Easy to grow indoors year-round",
                "Ready to harvest in 1-2 weeks",
                "Perfect for small spaces",
                "Sustainable and eco-friendly",
              ].map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative animate-slide-in-right">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src="/vibrant-fresh-microgreens-in-growing-tray-with-wat.jpg" alt="Fresh microgreens" className="w-full h-auto" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-accent/20 rounded-full blur-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
