export default function TermsPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="space-y-8 animate-fade-in-up">
          <div className="text-center space-y-4 mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground">Terms of Service</h1>
            <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <section className="bg-card border border-border rounded-xl p-8 space-y-4">
              <h2 className="font-serif text-2xl font-bold text-foreground">Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using GrowlyHome.com, you accept and agree to be bound by the terms and provisions of
                this agreement. If you do not agree to these terms, please do not use our website.
              </p>
            </section>

            <section className="bg-card border border-border rounded-xl p-8 space-y-4">
              <h2 className="font-serif text-2xl font-bold text-foreground">Use of Website</h2>
              <p className="text-muted-foreground leading-relaxed">
                GrowlyHome.com provides product reviews, recommendations, and information about microgreens growing
                kits. You may use our website for personal, non-commercial purposes only.
              </p>
              <p className="text-muted-foreground leading-relaxed">You agree not to:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Use the website for any illegal purpose</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Attempt to gain unauthorized access to our systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Reproduce, duplicate, or copy content without permission</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Interfere with the proper functioning of the website</span>
                </li>
              </ul>
            </section>

            <section className="bg-card border border-border rounded-xl p-8 space-y-4">
              <h2 className="font-serif text-2xl font-bold text-foreground">Affiliate Disclosure</h2>
              <p className="text-muted-foreground leading-relaxed">
                GrowlyHome.com participates in the Amazon Services LLC Associates Program. We may earn commissions from
                qualifying purchases made through affiliate links on our website. This does not affect the price you pay
                or our editorial independence.
              </p>
            </section>

            <section className="bg-card border border-border rounded-xl p-8 space-y-4">
              <h2 className="font-serif text-2xl font-bold text-foreground">Content and Reviews</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our product reviews and recommendations are based on research, testing, and expert analysis. However,
                individual results may vary. We strive for accuracy but cannot guarantee that all information is
                complete, current, or error-free.
              </p>
            </section>

            <section className="bg-card border border-border rounded-xl p-8 space-y-4">
              <h2 className="font-serif text-2xl font-bold text-foreground">Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content on GrowlyHome.com, including text, images, logos, and graphics, is the property of
                GrowlyHome or its content suppliers and is protected by copyright laws. You may not use our content
                without explicit permission.
              </p>
            </section>

            <section className="bg-card border border-border rounded-xl p-8 space-y-4">
              <h2 className="font-serif text-2xl font-bold text-foreground">Disclaimer of Warranties</h2>
              <p className="text-muted-foreground leading-relaxed">
                GrowlyHome.com is provided "as is" without warranties of any kind, either express or implied. We do not
                warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful
                components.
              </p>
            </section>

            <section className="bg-card border border-border rounded-xl p-8 space-y-4">
              <h2 className="font-serif text-2xl font-bold text-foreground">Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                GrowlyHome.com and its owners shall not be liable for any indirect, incidental, special, or
                consequential damages arising from your use of the website or reliance on our content.
              </p>
            </section>

            <section className="bg-card border border-border rounded-xl p-8 space-y-4">
              <h2 className="font-serif text-2xl font-bold text-foreground">External Links</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website contains links to third-party websites, including Amazon. We are not responsible for the
                content, privacy policies, or practices of these external sites.
              </p>
            </section>

            <section className="bg-card border border-border rounded-xl p-8 space-y-4">
              <h2 className="font-serif text-2xl font-bold text-foreground">Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon
                posting to the website. Your continued use of the website constitutes acceptance of the modified terms.
              </p>
            </section>

            <section className="bg-card border border-border rounded-xl p-8 space-y-4">
              <h2 className="font-serif text-2xl font-bold text-foreground">Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these terms, please contact us through our contact page.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
