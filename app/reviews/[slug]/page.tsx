import { notFound } from "next/navigation"
import { ProductReviewHero } from "@/components/reviews/product-review-hero"
import { ProductSpecs } from "@/components/reviews/product-specs"
import { ProductProsConsSection } from "@/components/reviews/product-pros-cons"
import { ProductDetailedReview } from "@/components/reviews/product-detailed-review"
import { ProductFAQ } from "@/components/reviews/product-faq"
import { RelatedProducts } from "@/components/reviews/related-products"
import { BuyNowSection } from "@/components/reviews/buy-now-section"

const productData: Record<string, any> = {
  "idoo-hydroponics-growing-system": {
    name: "iDOO Hydroponics Growing System",
    brand: "iDOO",
    rating: 4.8,
    reviews: 1247,
    price: "$89.99",
    image: "/modern-hydroponic-microgreens-growing-kit-with-led.jpg",
    amazonLink: "https://amazon.com",
    description:
      "The iDOO Hydroponics Growing System is a comprehensive 12-pod indoor garden that makes growing microgreens and herbs incredibly easy. With its built-in LED grow light and automatic timer, this system takes the guesswork out of indoor gardening.",
    specs: {
      dimensions: '13.8" x 7.5" x 15.2"',
      weight: "3.5 lbs",
      capacity: "12 pods",
      lightType: "Full spectrum LED (24W)",
      waterCapacity: "4 liters",
      material: "BPA-free plastic",
      warranty: "1 year",
    },
    pros: [
      "Large 12-pod capacity for variety",
      "Automatic LED timer with 3 modes",
      "Water level window for easy monitoring",
      "Quiet water pump operation",
      "Excellent value for money",
      "Easy assembly and setup",
    ],
    cons: [
      "Plastic construction feels less premium",
      "Light can be bright in dark rooms",
      "Limited height adjustment",
      "No app connectivity",
    ],
    detailedReview: {
      design:
        "The iDOO features a sleek, modern design that fits well on kitchen counters. The black finish is attractive and the LED light arm is adjustable. The water reservoir is transparent, making it easy to monitor water levels.",
      performance:
        "This system excels at growing microgreens, herbs, and small vegetables. The 24W LED light provides excellent coverage for all 12 pods. Plants typically germinate within 3-5 days and are ready to harvest in 2-3 weeks.",
      easeOfUse:
        "Setup takes about 10 minutes and is straightforward. The automatic timer has three modes (vegetables, flowers, fruits) that adjust light duration. Adding water and nutrients is simple thanks to the large opening.",
      value:
        "At under $90, this is one of the best values in hydroponic systems. You get 12 pods, quality LED lighting, and reliable performance. The included seed pods and nutrients get you started immediately.",
    },
    faqs: [
      {
        question: "How often do I need to add water?",
        answer:
          "Typically every 1-2 weeks depending on plant size and growth stage. The water level window makes it easy to monitor.",
      },
      {
        question: "Can I grow microgreens in this system?",
        answer:
          "This system is perfect for microgreens. They grow quickly and you can harvest multiple times from the same pods.",
      },
      {
        question: "Is the light too bright for a bedroom?",
        answer:
          "The LED can be bright in dark rooms. We recommend placing it in a kitchen or living area, or using the timer to turn off at night.",
      },
      {
        question: "What's included in the box?",
        answer:
          "The system includes the base unit, LED light arm, 12 growing pods, plant food, and an instruction manual. Seeds are not included.",
      },
    ],
  },
  "aerogarden-harvest-elite": {
    name: "AeroGarden Harvest Elite",
    brand: "AeroGarden",
    rating: 4.7,
    reviews: 892,
    price: "$129.99",
    image: "/sleek-aerogarden-microgreens-system-with-touch-con.jpg",
    amazonLink: "https://amazon.com",
    description:
      "The AeroGarden Harvest Elite is a premium 6-pod hydroponic garden with touch controls and vacation mode. Perfect for growing gourmet herbs and microgreens with minimal effort.",
    specs: {
      dimensions: '11" x 7.5" x 15"',
      weight: "4 lbs",
      capacity: "6 pods",
      lightType: "Full spectrum LED (20W)",
      waterCapacity: "3 liters",
      material: "Stainless steel accents",
      warranty: "1 year",
    },
    pros: [
      "Premium build quality with stainless steel",
      "Touch control panel is intuitive",
      "Vacation mode for extended absences",
      "Quieter pump than competitors",
      "Excellent customer support",
      "Sleek, modern design",
    ],
    cons: [
      "Only 6 pods vs competitors' 12",
      "Higher price point",
      "Replacement pods are expensive",
      "Limited height for taller plants",
    ],
    detailedReview: {
      design:
        "The Harvest Elite features a sophisticated design with stainless steel accents and a sleek black finish. The touch control panel is modern and easy to use. It's compact enough for small kitchens while still looking premium.",
      performance:
        "AeroGarden's proven hydroponic technology delivers consistent results. The 20W LED provides optimal light for 6 pods. Germination rates are excellent, and plants grow vigorously. The vacation mode is a unique feature that adjusts watering for extended absences.",
      easeOfUse:
        "This is one of the easiest systems to use. The control panel guides you through setup, reminds you when to add nutrients, and adjusts lighting automatically. The vacation mode is perfect for travelers.",
      value:
        "While more expensive than some competitors, the build quality and features justify the price. The stainless steel construction and advanced features make this a premium option worth considering.",
    },
    faqs: [
      {
        question: "How does vacation mode work?",
        answer:
          "Vacation mode reduces pump cycles and adjusts lighting to keep plants alive for up to 2 weeks while you're away.",
      },
      {
        question: "Can I use my own seeds?",
        answer:
          "Yes, AeroGarden sells grow anything kits that let you use your own seeds. You can also DIY with sponges and baskets.",
      },
      {
        question: "Is it really worth the extra cost?",
        answer:
          "If you value premium build quality, quieter operation, and advanced features like vacation mode, yes. For basic growing, cheaper options work fine.",
      },
      {
        question: "How tall can plants grow?",
        answer:
          "The light can be raised up to 12 inches above the base. This works well for microgreens and herbs, but may limit taller plants.",
      },
    ],
  },
  "vivosun-microgreens-kit": {
    name: "VIVOSUN Microgreens Kit",
    brand: "VIVOSUN",
    rating: 4.6,
    reviews: 654,
    price: "$49.99",
    image: "/compact-microgreens-growing-tray-kit-with-dome-cov.jpg",
    amazonLink: "https://amazon.com",
    description:
      "The VIVOSUN Microgreens Kit is a budget-friendly tray system perfect for beginners. With stackable trays and BPA-free materials, it's an excellent entry point into microgreens growing.",
    specs: {
      dimensions: '10" x 10" x 2.5"',
      weight: "1.2 lbs",
      capacity: "Multiple trays",
      lightType: "None (natural light or separate)",
      waterCapacity: "Bottom tray reservoir",
      material: "BPA-free plastic",
      warranty: "30 days",
    },
    pros: [
      "Very affordable entry point",
      "Stackable design saves space",
      "BPA-free and food safe",
      "Easy to clean and maintain",
      "No electricity required",
      "Perfect for microgreens",
    ],
    cons: ["No LED light included", "Manual watering required", "Basic design and features", "Shorter warranty period"],
    detailedReview: {
      design:
        "The VIVOSUN kit features a simple, functional design with stackable trays. The clear dome allows you to monitor growth while maintaining humidity. The drainage holes are well-designed to prevent overwatering.",
      performance:
        "For microgreens, this system performs excellently. The tray design promotes even growth and the drainage system prevents mold. You'll need to provide your own light source, either natural sunlight or a separate grow light.",
      easeOfUse:
        "Setup is incredibly simple - just add growing medium, seeds, and water. The stackable design lets you grow multiple varieties simultaneously. Cleaning is easy with soap and water.",
      value:
        "At under $50, this is one of the best values for microgreens growing. While it lacks LED lights and automation, the quality is solid and it does exactly what it's designed to do.",
    },
    faqs: [
      {
        question: "Do I need to buy a separate grow light?",
        answer:
          "If you don't have a sunny windowsill, yes. A basic LED grow light ($20-30) will work perfectly with this system.",
      },
      {
        question: "How many trays are included?",
        answer:
          "The kit typically includes 2-3 trays depending on the package. Additional trays can be purchased separately.",
      },
      {
        question: "What growing medium should I use?",
        answer:
          "Coconut coir, potting soil, or hydroponic growing pads all work well. Many growers prefer coconut coir for microgreens.",
      },
      {
        question: "Can I grow anything besides microgreens?",
        answer:
          "While optimized for microgreens, you can also grow sprouts and baby greens. The limited space and capacity make it unsuitable for larger plants.",
      },
    ],
  },
  "click-and-grow-smart-garden": {
    name: "Click & Grow Smart Garden 9",
    brand: "Click & Grow",
    rating: 4.9,
    reviews: 1543,
    price: "$199.99",
    image: "/modern-hydroponic-microgreens-growing-kit-with-led.jpg",
    amazonLink: "https://amazon.com",
    description:
      "The Click & Grow Smart Garden 9 uses NASA-inspired technology to create the perfect growing environment. With its smart soil pods and app connectivity, this system makes indoor gardening foolproof.",
    specs: {
      dimensions: '12.6" x 7.4" x 15.3"',
      weight: "4.8 lbs",
      capacity: "9 pods",
      lightType: "Full spectrum LED (25W)",
      waterCapacity: "3.5 liters",
      material: "Premium plastic with metal accents",
      warranty: "2 years",
    },
    pros: [
      "NASA-inspired smart soil technology",
      "App control and notifications",
      "Excellent germination rates",
      "Premium build quality",
      "Wide variety of seed pods available",
      "Automatic watering and lighting",
    ],
    cons: [
      "Expensive seed pod refills",
      "Requires app for full functionality",
      "Higher initial investment",
      "Limited to Click & Grow pods",
    ],
    detailedReview: {
      design:
        "The Smart Garden 9 features a sleek, modern design with a white finish and subtle LED indicators. The build quality is exceptional with premium materials throughout. The adjustable LED arm extends up to 15 inches.",
      performance:
        "This system delivers outstanding results thanks to its smart soil technology. The soil contains all necessary nutrients and maintains optimal pH levels. Plants grow 30% faster than traditional methods with near-perfect germination rates.",
      easeOfUse:
        "Setup is incredibly simple - just insert pods, add water, and plug in. The app sends notifications when to add water and tracks plant growth. The system is mostly automated, requiring only weekly water checks and monthly nutrient additions.",
      value:
        "While the initial cost is high, the technology and results justify the price. The 2-year warranty and excellent customer support add value. However, ongoing pod costs can add up.",
    },
    faqs: [
      {
        question: "Do I need the app to use this system?",
        answer:
          "No, but the app enhances the experience with notifications, growing tips, and plant tracking. The system works fine without it.",
      },
      {
        question: "Can I use regular seeds instead of Click & Grow pods?",
        answer:
          "The system is designed for Click & Grow pods. While some users hack it for regular seeds, it voids the warranty and may not work as well.",
      },
      {
        question: "How long do the smart soil pods last?",
        answer:
          "Most herbs and microgreens can be harvested for 2-3 months from a single pod. Some plants like basil can produce for up to 6 months.",
      },
      {
        question: "Is it worth the premium price?",
        answer:
          "If you want the most advanced, foolproof system with excellent results and beautiful design, yes. For basic growing, cheaper options work fine.",
      },
    ],
  },
  "hamama-microgreens-kit": {
    name: "Hamama Microgreens Kit",
    brand: "Hamama",
    rating: 4.5,
    reviews: 432,
    price: "$69.99",
    image: "/vibrant-fresh-microgreens-in-growing-tray-with-wat.jpg",
    amazonLink: "https://amazon.com",
    description:
      "The Hamama Microgreens Kit revolutionizes microgreens growing with its innovative seed quilts. No soil, no mess, just add water and watch your greens grow in 7-10 days.",
    specs: {
      dimensions: '10" x 10" x 3"',
      weight: "1.5 lbs",
      capacity: "1 seed quilt per tray",
      lightType: "None (natural light required)",
      waterCapacity: "Bottom tray reservoir",
      material: "BPA-free plastic",
      warranty: "30 days",
    },
    pros: [
      "No soil means no mess",
      "Seed quilts are incredibly easy",
      "Perfect for kids and families",
      "Subscription service available",
      "Grows in just 7-10 days",
      "Organic seed options",
    ],
    cons: [
      "Requires natural light or separate grow light",
      "Ongoing seed quilt costs",
      "Limited to Hamama seed quilts",
      "Single variety per tray",
    ],
    detailedReview: {
      design:
        "The Hamama kit features a simple, functional design with a clear growing tray and water reservoir. The seed quilts are pre-seeded fabric mats that make growing incredibly easy. The design is kid-friendly and mess-free.",
      performance:
        "Hamama's seed quilts deliver consistent results with minimal effort. Just add water every few days and harvest in 7-10 days. The germination rate is excellent and the microgreens are vibrant and flavorful.",
      easeOfUse:
        "This is one of the easiest systems available. Place the seed quilt in the tray, add water, and wait. No measuring, no planting, no mess. Perfect for beginners and families with kids.",
      value:
        "The initial kit is reasonably priced, but ongoing seed quilt costs add up. The subscription service offers savings. Great value if you prioritize convenience and ease over cost per harvest.",
    },
    faqs: [
      {
        question: "Do I need a grow light?",
        answer:
          "A sunny windowsill works great, but a grow light will give better results, especially in winter. Any basic LED grow light will work.",
      },
      {
        question: "How much do seed quilt refills cost?",
        answer:
          "Individual seed quilts cost $6-8 each. The subscription service offers better pricing at around $5 per quilt with regular deliveries.",
      },
      {
        question: "Can I reuse the trays?",
        answer:
          "Yes, the trays are reusable. Just rinse them out between grows. They're dishwasher safe for easy cleaning.",
      },
      {
        question: "What varieties are available?",
        answer:
          "Hamama offers 10+ varieties including broccoli, kale, radish, sunflower, and specialty mixes. New varieties are added regularly.",
      },
    ],
  },
  "lettuce-grow-farmstand": {
    name: "Lettuce Grow Farmstand",
    brand: "Lettuce Grow",
    rating: 4.8,
    reviews: 765,
    price: "$399.99",
    image: "/lush-green-microgreens-growing-in-modern-indoor-ga.jpg",
    amazonLink: "https://amazon.com",
    description:
      "The Lettuce Grow Farmstand is a premium vertical hydroponic system that can grow up to 36 plants. With its self-watering design and beautiful aesthetic, it's perfect for serious indoor gardeners.",
    specs: {
      dimensions: '22" diameter x 60" height',
      weight: "25 lbs (empty)",
      capacity: "36 plants",
      lightType: "Optional LED ring light",
      waterCapacity: "12 gallons",
      material: "Food-grade plastic",
      warranty: "1 year",
    },
    pros: [
      "Massive 36-plant capacity",
      "Beautiful vertical design",
      "Self-watering system",
      "Works indoors or outdoors",
      "Premium build quality",
      "Excellent customer support",
    ],
    cons: [
      "Very expensive initial investment",
      "Large footprint required",
      "Heavy when filled with water",
      "Seedling costs add up",
    ],
    detailedReview: {
      design:
        "The Farmstand is a stunning vertical tower that becomes a focal point in any room. The white finish is clean and modern, and the circular design is space-efficient. The optional LED ring light adds to the aesthetic appeal.",
      performance:
        "This system delivers professional-grade results. The self-watering pump ensures consistent moisture, and the vertical design maximizes space. Plants grow vigorously with excellent yields. Can be used outdoors in warm weather.",
      easeOfUse:
        "Setup takes about an hour but is straightforward. The self-watering system runs on a timer, so maintenance is minimal. Just check water levels weekly and add nutrients monthly. Harvesting is easy from all levels.",
      value:
        "This is a premium investment for serious growers. The capacity, quality, and results justify the price if you're committed to growing significant amounts of produce. Not recommended for casual hobbyists.",
    },
    faqs: [
      {
        question: "Can I really grow 36 plants?",
        answer:
          "Yes, the Farmstand has 36 growing ports. However, larger plants like tomatoes will need more space, so you might grow fewer of those.",
      },
      {
        question: "Does it work outdoors?",
        answer:
          "Yes, it's designed for both indoor and outdoor use. Many users move it outside in summer and inside in winter.",
      },
      {
        question: "How often do I need to refill water?",
        answer:
          "Typically every 1-2 weeks depending on plant size and weather. The 12-gallon reservoir provides plenty of capacity.",
      },
      {
        question: "Can I use my own seedlings?",
        answer:
          "Yes, but Lettuce Grow's seedlings are optimized for the system. If using your own, make sure they're hydroponic-ready with exposed roots.",
      },
    ],
  },
  "back-to-roots-water-garden": {
    name: "Back to the Roots Water Garden",
    brand: "Back to the Roots",
    rating: 4.4,
    reviews: 321,
    price: "$79.99",
    image: "/compact-microgreens-growing-tray-kit-with-dome-cov.jpg",
    amazonLink: "https://amazon.com",
    description:
      "The Back to the Roots Water Garden is a unique aquaponics system that combines a fish tank with a growing bed. It's an educational and eco-friendly way to grow microgreens while keeping fish.",
    specs: {
      dimensions: '15" x 8" x 11"',
      weight: "3 lbs (empty)",
      capacity: "3-5 plants",
      lightType: "None (natural light required)",
      waterCapacity: "3 gallon fish tank",
      material: "BPA-free plastic",
      warranty: "30 days",
    },
    pros: [
      "Unique aquaponics system",
      "Educational for kids",
      "Eco-friendly closed loop",
      "Fish waste fertilizes plants",
      "No electricity required",
      "Affordable entry to aquaponics",
    ],
    cons: [
      "Limited growing capacity",
      "Requires fish care knowledge",
      "No LED light included",
      "Fish tank needs regular maintenance",
    ],
    detailedReview: {
      design:
        "The Water Garden features a clever design with a fish tank below and a growing bed on top. Water from the fish tank is pumped up to water the plants, which filter it before returning to the tank. It's compact and fits on most counters.",
      performance:
        "As an aquaponics system, it works well for small-scale growing. The fish waste provides natural fertilizer for plants. However, the capacity is limited to 3-5 small plants. Best for herbs and microgreens rather than larger vegetables.",
      easeOfUse:
        "Setup is straightforward, but you need to understand basic fish care. The system requires feeding the fish daily and monitoring water quality. Plant care is minimal since the fish provide nutrients. It's more maintenance than a simple growing system.",
      value:
        "At under $80, it's an affordable way to explore aquaponics. Great educational value for families with kids. However, if you just want to grow plants, simpler systems are more efficient.",
    },
    faqs: [
      {
        question: "What kind of fish can I use?",
        answer:
          "Beta fish are most common and easiest to care for. Goldfish also work but produce more waste. The tank holds up to 3 gallons.",
      },
      {
        question: "Do I need to add fertilizer?",
        answer:
          "No, the fish waste provides all the nutrients plants need. This is the beauty of aquaponics - it's a closed-loop ecosystem.",
      },
      {
        question: "Is it good for teaching kids?",
        answer:
          "Yes, it's excellent for teaching kids about ecosystems, the nitrogen cycle, and sustainable growing. Many teachers use it in classrooms.",
      },
      {
        question: "Can I grow anything besides herbs?",
        answer:
          "Microgreens, herbs, and small leafy greens work best. The limited space and capacity make it unsuitable for larger plants.",
      },
    ],
  },
  "rise-gardens-personal-garden": {
    name: "Rise Gardens Personal Garden",
    brand: "Rise Gardens",
    rating: 4.7,
    reviews: 543,
    price: "$279.99",
    image: "/modern-hydroponic-microgreens-growing-kit-with-led.jpg",
    amazonLink: "https://amazon.com",
    description:
      "The Rise Gardens Personal Garden is a premium smart hydroponic system with app connectivity and modular design. Grow 12 plants with professional results and modern aesthetics.",
    specs: {
      dimensions: '21" x 13" x 24"',
      weight: "18 lbs",
      capacity: "12 plants",
      lightType: "Full spectrum LED (45W)",
      waterCapacity: "5 gallons",
      material: "Premium powder-coated steel",
      warranty: "1 year",
    },
    pros: [
      "Premium build with metal construction",
      "App provides growing guidance",
      "Modular design can expand",
      "Professional-grade results",
      "Beautiful modern aesthetic",
      "Excellent customer support",
    ],
    cons: ["Expensive initial cost", "Requires app for best experience", "Nursery pods are pricey", "Large and heavy"],
    detailedReview: {
      design:
        "The Personal Garden features a stunning design with powder-coated steel construction. It looks like premium furniture rather than a growing system. The modular design allows you to stack multiple units. The LED light is powerful and adjustable.",
      performance:
        "This system delivers professional results with vigorous plant growth and excellent yields. The 5-gallon reservoir and powerful pump ensure consistent watering. The 45W LED provides optimal light for all 12 plants. Germination rates are excellent.",
      easeOfUse:
        "The app guides you through setup and provides customized care instructions for each plant. It sends notifications for watering and harvesting. The system is mostly automated, requiring only weekly water checks and monthly nutrient additions.",
      value:
        "This is a premium system with a premium price. The build quality, technology, and results justify the cost for serious growers. The modular design means you can expand over time. Great long-term investment.",
    },
    faqs: [
      {
        question: "Can I expand the system later?",
        answer:
          "Yes, the modular design allows you to stack multiple units. You can start with one and add more as needed.",
      },
      {
        question: "How does the app help?",
        answer:
          "The app provides plant-specific care instructions, sends watering reminders, tracks growth, and offers troubleshooting help. It's very helpful for beginners.",
      },
      {
        question: "Can I use my own seeds?",
        answer:
          "Yes, Rise Gardens sells grow-anything kits. However, their nursery pods are optimized for the system and provide the best results.",
      },
      {
        question: "Is it worth the high price?",
        answer:
          "If you want a premium system with excellent results and beautiful design, yes. The metal construction and modular design make it a long-term investment.",
      },
    ],
  },
  "gardyn-home-kit": {
    name: "Gardyn Home Kit 3.0",
    brand: "Gardyn",
    rating: 4.6,
    reviews: 678,
    price: "$349.99",
    image: "/lush-green-microgreens-growing-in-modern-indoor-ga.jpg",
    amazonLink: "https://amazon.com",
    description:
      "The Gardyn Home Kit 3.0 is an advanced vertical hydroponic system with AI assistant and camera monitoring. Grow up to 30 plants with cutting-edge technology and automated care.",
    specs: {
      dimensions: '20" x 20" x 62"',
      weight: "35 lbs",
      capacity: "30 plants",
      lightType: "Full spectrum LED (60W)",
      waterCapacity: "8 gallons",
      material: "Premium plastic and metal",
      warranty: "1 year",
    },
    pros: [
      "Massive 30-plant capacity",
      "AI assistant provides guidance",
      "Built-in camera monitors growth",
      "Vertical design saves floor space",
      "Automated watering and lighting",
      "Professional-grade results",
    ],
    cons: [
      "Very expensive",
      "Requires subscription for full features",
      "Tall - needs high ceilings",
      "Heavy and difficult to move",
    ],
    detailedReview: {
      design:
        "The Gardyn 3.0 is a striking vertical tower that stands over 5 feet tall. The sleek design features LED lights integrated into the columns and a built-in camera at the top. The white finish is modern and clean. It's a statement piece that becomes a focal point.",
      performance:
        "This system delivers exceptional results with its advanced technology. The AI assistant analyzes plant health through the camera and provides personalized care recommendations. The 8-gallon reservoir and powerful pump ensure consistent watering. Plants grow vigorously with impressive yields.",
      easeOfUse:
        "Setup takes about an hour but is well-documented. The AI assistant guides you through everything via the app. The system is highly automated - it handles watering, lighting, and even diagnoses problems. You just add water weekly and harvest.",
      value:
        "This is one of the most expensive home systems, but the technology and capacity are unmatched. The AI assistant and camera monitoring are unique features. Best for serious growers who want the most advanced system available.",
    },
    faqs: [
      {
        question: "Do I need a subscription?",
        answer:
          "The system works without a subscription, but the AI assistant and advanced features require a monthly subscription ($29/month).",
      },
      {
        question: "How does the AI assistant work?",
        answer:
          "The built-in camera monitors your plants and the AI analyzes their health, growth rate, and potential issues. It sends notifications and recommendations through the app.",
      },
      {
        question: "Can I grow 30 plants at once?",
        answer:
          "Yes, the system has 30 growing ports. However, larger plants will need more space, so you might grow fewer of those and more microgreens or herbs.",
      },
      {
        question: "Is it worth the subscription cost?",
        answer:
          "If you want the AI features and camera monitoring, yes. Without the subscription, it's still a good system but you lose the advanced features that justify the high price.",
      },
    ],
  },
}

export default function ProductReviewPage({ params }: { params: { slug: string } }) {
  const product = productData[params.slug]

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <ProductReviewHero product={product} />
      <BuyNowSection product={product} />
      <ProductSpecs specs={product.specs} />
      <ProductProsConsSection pros={product.pros} cons={product.cons} />
      <ProductDetailedReview review={product.detailedReview} />
      <ProductFAQ faqs={product.faqs} />
      <RelatedProducts currentProductId={params.slug} />
    </div>
  )
}
