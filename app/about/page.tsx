import { Award, Users, Target, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground text-balance">About GrowlyHome</h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              Your trusted source for honest, comprehensive microgreens growing kit reviews and indoor gardening
              expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6 animate-slide-in-left">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At GrowlyHome, we believe everyone should have access to fresh, nutritious microgreens grown right in
                their own home. Our mission is to help you find the perfect growing kit through honest reviews, detailed
                comparisons, and expert guidance.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We test and evaluate every product we review, considering factors like ease of use, performance, value,
                and overall quality. Our goal is to make indoor gardening accessible and enjoyable for everyone, from
                complete beginners to experienced growers.
              </p>
            </div>
            <div className="relative animate-slide-in-right">
              <img
                src="/lush-green-microgreens-growing-in-modern-indoor-ga.jpg"
                alt="Fresh microgreens"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-primary/20 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Award,
                title: "Honest Reviews",
                description: "We provide unbiased, thorough reviews based on real testing and experience.",
              },
              {
                icon: Users,
                title: "Community First",
                description: "We listen to our readers and continuously improve based on your feedback.",
              },
              {
                icon: Target,
                title: "Expert Guidance",
                description: "Our team has years of indoor gardening experience to share with you.",
              },
              {
                icon: Heart,
                title: "Passion for Growing",
                description: "We genuinely love microgreens and want to share that passion with you.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 text-center space-y-4 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-xl text-foreground">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-center">Our Story</h2>
            <div className="bg-card border border-border rounded-xl p-8 space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                GrowlyHome was founded by a group of indoor gardening enthusiasts who were frustrated by the lack of
                reliable information about microgreens growing kits. We spent countless hours researching, testing, and
                comparing different systems, and we wanted to share our findings with others.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                What started as a small blog has grown into a comprehensive resource for anyone interested in growing
                microgreens at home. We've reviewed dozens of products, helped thousands of people start their indoor
                gardens, and built a community of passionate growers.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, we continue to test new products, update our reviews, and provide the most accurate and helpful
                information possible. We're committed to helping you succeed in your indoor gardening journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-center">
              Our Commitment to Transparency
            </h2>
            <div className="bg-card border border-border rounded-xl p-8 space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe in complete transparency with our readers. As an Amazon Associate, we earn from qualifying
                purchases made through our affiliate links. This helps us maintain the website and continue providing
                free, high-quality content.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                However, our affiliate relationships never influence our reviews or recommendations. We only recommend
                products we genuinely believe in and would use ourselves. Our editorial integrity is non-negotiable.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                If you have any questions about our review process, affiliate relationships, or anything else, please
                don't hesitate to contact us. We're always happy to hear from our readers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
