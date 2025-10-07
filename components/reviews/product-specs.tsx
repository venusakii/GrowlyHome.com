interface ProductSpecsProps {
  specs: Record<string, string>
}

export function ProductSpecs({ specs }: ProductSpecsProps) {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
          Technical Specifications
        </h2>
        <div className="max-w-3xl mx-auto bg-card border border-border rounded-xl overflow-hidden">
          {Object.entries(specs).map(([key, value], index) => (
            <div key={key} className={`flex items-center justify-between p-4 ${index % 2 === 0 ? "bg-muted/30" : ""}`}>
              <span className="font-medium text-foreground capitalize">{key.replace(/([A-Z])/g, " $1").trim()}</span>
              <span className="text-muted-foreground">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
