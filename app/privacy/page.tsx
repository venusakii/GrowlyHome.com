export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="space-y-8 animate-fade-in-up">
          <div className="text-center space-y-4 mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <section className="bg-card border border-border rounded-xl p-8 space-y-4">
              <h2 className="font-serif text-2xl font-bold text-foreground">Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Welcome to GrowlyHome.com. We respect your privacy and are committed to protecting your personal data.
                This privacy policy will inform you about how we look after your personal data when you visit our
                website and tell you about your privacy rights.
              </p>
            </section>

            <section className="bg-card border border-border rounded-xl p-8 space-y-4">
              <h2 className="font-serif text-2xl font-bold text-foreground">Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may collect the following types of information:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    <strong className="text-foreground">Usage Data:</strong> Information about how you use our website,
                    including pages visited, time spent, and navigation patterns.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    <strong className="text-foreground">Contact Information:</strong> Email address and name if you
                    subscribe to our newsletter or contact us.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    <strong className="text-foreground">Technical Data:</strong> IP address, browser type, device
                    information, and cookies.
                  </span>
                </li>
              </ul>
            </section>

            <section className="bg-card border border-border rounded-xl p-8 space-y-4">
              <h2 className="font-serif text-2xl font-bold text-foreground">How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed">We use your information to:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Provide and improve our website services</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Send newsletters and updates (with your consent)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Analyze website usage and improve user experience</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Respond to your inquiries and support requests</span>
                </li>
              </ul>
            </section>

            <section className="bg-card border border-border rounded-xl p-8 space-y-4">
              <h2 className="font-serif text-2xl font-bold text-foreground">Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use cookies to enhance your browsing experience and analyze site traffic. Cookies are small text
                files stored on your device. You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section className="bg-card border border-border rounded-xl p-8 space-y-4">
              <h2 className="font-serif text-2xl font-bold text-foreground">Amazon Affiliate Disclosure</h2>
              <p className="text-muted-foreground leading-relaxed">
                GrowlyHome.com is a participant in the Amazon Services LLC Associates Program, an affiliate advertising
                program designed to provide a means for sites to earn advertising fees by advertising and linking to
                Amazon.com. We may collect information about your interactions with affiliate links.
              </p>
            </section>

            <section className="bg-card border border-border rounded-xl p-8 space-y-4">
              <h2 className="font-serif text-2xl font-bold text-foreground">Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate security measures to protect your personal information. However, no method of
                transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="bg-card border border-border rounded-xl p-8 space-y-4">
              <h2 className="font-serif text-2xl font-bold text-foreground">Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed">You have the right to:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Access your personal data</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Request correction of inaccurate data</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Request deletion of your data</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Opt-out of marketing communications</span>
                </li>
              </ul>
            </section>

            <section className="bg-card border border-border rounded-xl p-8 space-y-4">
              <h2 className="font-serif text-2xl font-bold text-foreground">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about this privacy policy or your personal data, please contact us through our
                contact page.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
