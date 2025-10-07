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
    rating: 4.5,
    reviews: 1500,
    price: "$79.99",
    image: "https://m.media-amazon.com/images/I/81+2GYT3XHL._AC_SX679_.jpg",
    amazonLink: "https://www.amazon.com/iDOO-Hydroponics-Growing-Birthday-Kitchen/dp/B0CTJQ6NHX/ref=sr_1_4?crid=30XSXC496WCQ&dib=eyJ2IjoiMSJ9.eYyLEthhAZ2dF2KcQANfm5nKPhFYfVrFkO9q-YQZkOODv2bBwdptc5GNN48gfmhk68TlnJbFwx7JeTZ24DwuEMzyiHmLxtz44JBj0_cHwkdmvHFGCvd4xkxB0LKoqEdP6RHSQDxeXw68agz8fs6ogBcRJp5rGz73-TF4PX-WGigReNNjoWu2bKPZI1W4rWrS1AsGmD2Asj88nH3jGfXUD1KvbQKdn94v3jK9JqY7HQj7F1KRkEVoexQUKzIygcGp8uGnxmYIi2d9qOpssmMA1C9oTzlv4II50U8NQpWpv34.wIHPLwDsO7xUNwvSjiFx0JFu95aooYogF56QvDMnMkw&dib_tag=se&keywords=iDOO+Hydroponics+Growing+System&qid=1759835642&sprefix=idoo+hydroponics+growing+system%2Caps%2C1305&sr=8-4",
    description:
      "The iDOO Hydroponics Growing System is a user-friendly 12-pod indoor garden designed for beginners. Featuring automatic LED grow lights and a water circulation system, it simplifies growing fresh herbs, vegetables, and microgreens right on your countertop.",
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
      "Spacious 12-pod capacity for diverse planting",
      "Automatic LED timer with multiple modes",
      "Easy-to-monitor water level window",
      "Quiet and efficient water pump",
      "Great value for beginners",
      "Quick and simple assembly",
    ],
    cons: [
      "Plastic build lacks premium feel",
      "LED brightness may overwhelm dark spaces",
      "Limited vertical height adjustment",
      "No smart app integration",
    ],
    detailedReview: {
      design:
        "The iDOO boasts a compact, modern black design ideal for kitchen counters. The adjustable LED arm and transparent reservoir make it both functional and visually appealing, though the plastic construction feels basic.",
      performance:
        "It shines with microgreens and herbs, where the 24W LED ensures even coverage and fast germination (3-5 days). Plants are harvest-ready in 2-3 weeks, with consistent water circulation preventing root issues.",
      easeOfUse:
        "Assembly takes just 10 minutes. The timer offers vegetable, flower, and fruit modes for tailored lighting. Nutrient and water addition is hassle-free via the wide reservoir opening—no advanced skills needed.",
      value:
        "For under $80, it delivers robust features like 12 pods and reliable LEDs. Included seeds and nutrients kickstart your garden, making it an unbeatable entry-level hydroponic option.",
    },
    faqs: [
      {
        question: "How often should I refill the water?",
        answer:
          "Every 1-2 weeks based on plant growth; the visible window simplifies checks without guesswork.",
      },
      {
        question: "Is it suitable for microgreens?",
        answer:
          "Absolutely—microgreens thrive here, with multiple harvests possible from each pod for continuous yields.",
      },
      {
        question: "Will the light disturb sleep if in a bedroom?",
        answer:
          "It can be intense at night; opt for kitchen placement or use the timer to schedule off-hours.",
      },
      {
        question: "What comes in the package?",
        answer:
          "Base unit, LED arm, 12 pods, plant food, and manual; seeds sold separately for customization.",
      },
    ],
  },
  "aerogarden-harvest-elite": {
    name: "AeroGarden Harvest Elite",
    brand: "AeroGarden",
    rating: 4.6,
    reviews: 1200,
    price: "$129.95",
    image: "https://m.media-amazon.com/images/I/718o2L7QIjL._AC_SX679_.jpg",
    amazonLink: "https://www.amazon.com/AeroGarden-Harvest-Elite-360-Stainless/dp/B08LZTL61T/ref=sr_1_8?crid=3QFLP8I1GNA3V&dib=eyJ2IjoiMSJ9.RmokaPuAKHFVg4sDwjAt9vM7HfrP7lT8o02RJxiiXKSnLJNAJwBKZ-eIkZSu8MLgM8S95qutQIvrAn_YfzbPybpRj-YmaN0u-KChy8pipuRpRVS6uVHXSoUujMsJxCQQFfnrRofZ4_MKxIvYd_lYhpJ-Z5p8Ps1BlruHgDFuhZM2cNqUv13tkJ_JPHvkQVTRly3HrqJ0xL9mFXtzX9kKxiXsLs_j72JipVIUd40WuYPWsLDuxPtDG_oZ2WOW-ccrC0LQxOd8R7_OZ9-95Er3S2Z_vcEuZEYkLcUDf4DDqS4.HlRQHRehzQA156qDIK4n6ijrSNPlqzOE_sSIGdOBtPI&dib_tag=se&keywords=AeroGarden+Harvest+Elite&qid=1759835670&sprefix=aerogarden+harvest+elite%2Caps%2C265&sr=8-8",
    description:
      "The AeroGarden Harvest Elite offers a premium 6-pod hydroponic experience with touch controls and vacation mode, ideal for effortlessly cultivating gourmet herbs and microgreens on your kitchen counter.",
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
      "High-end stainless steel detailing",
      "Intuitive touch interface",
      "Vacation mode for worry-free travel",
      "Low-noise pump",
      "Top-tier support",
      "Elegant, compact styling",
    ],
    cons: [
      "Fewer pods than larger models",
      "Premium pricing",
      "Costly pod replacements",
      "Height constraints for tall growth",
    ],
    detailedReview: {
      design:
        "With stainless accents and a glossy black body, the Harvest Elite exudes sophistication. The touch panel is responsive and sleek, fitting seamlessly into modern kitchens despite its compact size.",
      performance:
        "Leveraging AeroGarden's tech, it yields reliable results with the 20W LED fostering quick germination and robust growth. Vacation mode smartly conserves resources for up to two weeks away.",
      easeOfUse:
        "Effortless from start: the panel walks you through setup, nutrient alerts, and light adjustments. Vacation mode is a standout for infrequent users or travelers.",
      value:
        "The elevated price reflects superior craftsmanship and smart features. It's a worthwhile upgrade for those seeking durability and convenience over basic functionality.",
    },
    faqs: [
      {
        question: "What is vacation mode?",
        answer:
          "It minimizes pump activity and optimizes light to sustain plants unattended for up to two weeks.",
      },
      {
        question: "Can I use custom seeds?",
        answer:
          "Yes, via grow-anything kits; sponges and baskets enable DIY, though proprietary pods optimize performance.",
      },
      {
        question: "Does the premium justify the cost?",
        answer:
          "For refined aesthetics, quiet operation, and extras like vacation mode, yes—otherwise, budget alternatives suffice.",
      },
      {
        question: "Maximum plant height?",
        answer:
          "Up to 12 inches with light adjustment; ideal for herbs and microgreens, less so for vining plants.",
      },
    ],
  },
  "vivosun-microgreens-kit": {
    name: "VIVOSUN Grow Tent Complete Kit",
    brand: "VIVOSUN",
    rating: 4.7,
    reviews: 800,
    price: "$159.99",
    image: "https://m.media-amazon.com/images/I/71SkfVZHtIL._AC_SX679_.jpg",
    amazonLink: "https://www.amazon.com/VIVOSUN-Complete-Growing-VS1000-Ducting/dp/B08LGQ3XDZ/ref=sr_1_6?crid=LEYQ4LATZIIW&dib=eyJ2IjoiMSJ9.o2QmfyI-M8Denbg6KaBDWD6l_HEL-6PN8HTU7pD13Gk9ksYD3uHLZiRlcbPyw7-vmIiVDqPRbQmcGoIHOy-SJvMMCUamaHlJDbCboaw7fWoZgyWW9bIxwZ6WkGWaDiR-jxDIDbmCONJukQXZ6t8Hvsk0dlhRkEIQixDTl5FMhxd7QmfrFI7H1QEJi9KZzYVn5qlpyvV6nH27III0yX8fWFo6p5SNi5Qr4vahQJzEEuCEds2HTV7-CQxr1wSD_1Bd8Wm9zan8h4BGdbwWjbNMbtGvFGOzoa0NCe1atWPDzHY.nJ3MaubiFnhQRpzlerXBqWGOLWG-huEgAfP-tU_xP9k&dib_tag=se&keywords=VIVOSUN%2BMicrogreens%2BKit&qid=1759835713&sprefix=vivosun%2Bmicrogreens%2Bkit%2Caps%2C251&sr=8-6&th=1",
    description:
      "The VIVOSUN Grow Tent Complete Kit provides everything needed for indoor microgreens cultivation, including LED lighting, ventilation, and a durable tent for controlled environments.",
    specs: {
      dimensions: '24" x 24" x 48"',
      weight: "15 lbs",
      capacity: "Multiple trays",
      lightType: "Full spectrum LED (100W)",
      waterCapacity: "Varies by tray",
      material: "Reflective Mylar tent",
      warranty: "2 years",
    },
    pros: [
      "All-in-one indoor growing solution",
      "Powerful LED for optimal growth",
      "Effective ventilation system",
      "Durable, light-proof tent",
      "Scalable for larger setups",
      "Long warranty period",
    ],
    cons: [
      "Requires assembly time",
      "Takes up floor space",
      "Electricity-dependent",
      "Overkill for small-scale growing",
    ],
    detailedReview: {
      design:
        "This kit's tent is sturdy with reflective Mylar walls maximizing light efficiency. The included fan and LED integrate seamlessly, creating a professional setup in a compact footprint.",
      performance:
        "The 100W LED and ventilation ensure thriving microgreens with even coverage and fresh air flow. Growth is accelerated, yielding harvests in under two weeks consistently.",
      easeOfUse:
        "Assembly is straightforward with clear instructions. Once set, the system runs autonomously—monitor via the tent's viewing window for minimal intervention.",
      value:
        "Comprehensive inclusions make it a smart buy for dedicated indoor growers. The two-year warranty adds peace of mind, offering pro-level results at a mid-range price.",
    },
    faqs: [
      {
        question: "Is a separate light needed?",
        answer:
          "No—the kit includes a full-spectrum 100W LED tailored for the tent size and plant needs.",
      },
      {
        question: "How many trays fit inside?",
        answer:
          "Up to 4-6 depending on size; expandable with additional shelves for vertical microgreens growing.",
      },
      {
        question: "What medium works best?",
        answer:
          "Coco coir or soil trays; the ventilation prevents mold in humid setups.",
      },
      {
        question: "Suitable beyond microgreens?",
        answer:
          "Yes, for seedlings and small plants; the controlled environment supports various stages.",
      },
    ],
  },
  "click-and-grow-smart-garden": {
    name: "Click & Grow Smart Garden 9",
    brand: "Click & Grow",
    rating: 4.8,
    reviews: 2000,
    price: "$199.96",
    image: "https://m.media-amazon.com/images/I/818AYYTE5oL._AC_SX679_.jpg",
    amazonLink: "https://www.amazon.com/Click-Grow-Garden-Indoor-Lettuce/dp/B076CNZKWX/ref=sr_1_2?crid=2UJJ322Z65G11&dib=eyJ2IjoiMSJ9.zFT5Td55Of4iKPErBvN60IM5vHvcNnjwgK3cfEPnwhk21OC3K89YQ1d0_SlDElHEfWG53-YvTzu1f81A26TMASUHrEL2e7K6XSoTQCM-qfA2CU-z5lLswZSBSYaYWFcquV0Rrtwj2mn-sjKE8homHH-_ucY7uSam7Ch-h3P059KLKigNmzksQ5DvFuHnoyTcOMA4IH_OqQyru3lcz_a7gbuuwrxdBsQWoAfMwPZiACpTrIc4Wp3ZOI2zIuBAWTdldBXMZ6PnuxsF7OQhHaUwe-JsCPiENA8duAV94NgUchU.MooW_d5GVxNvkpRdV_Q8n_h04SkXqBJzojhp9hnYbQY&dib_tag=se&keywords=Click+%26+Grow+Smart+Garden+9&qid=1759835742&sprefix=click+%26+grow+smart+garden+9%2Caps%2C255&sr=8-2",
    description:
      "Click & Grow Smart Garden 9 leverages NASA-derived smart soil for effortless 9-pod indoor gardening of herbs, veggies, and flowers, complete with automated lighting and watering.",
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
      "Innovative smart soil tech",
      "App-based monitoring",
      "Superior germination success",
      "High-quality construction",
      "Diverse pod selection",
      "Hands-off automation",
    ],
    cons: [
      "Refill pods are costly",
      "App-dependent for optimal use",
      "Steep upfront cost",
      "Pod exclusivity",
    ],
    detailedReview: {
      design:
        "Sleek white exterior with integrated LEDs and subtle indicators creates a premium, space-saving unit. The extendable arm reaches 15 inches, blending form and function elegantly.",
      performance:
        "Smart soil optimizes nutrients and pH, boosting growth by 30% over soil methods. Near-100% germination yields lush, fast-maturing plants in weeks.",
      easeOfUse:
        "Plug-and-play: insert pods, fill water, and go. App alerts for maintenance; automation handles the rest, ideal for novices seeking simplicity.",
      value:
        "High price offset by tech and reliability; two-year coverage ensures longevity. Pod expenses accumulate, but results rival commercial setups.",
    },
    faqs: [
      {
        question: "App essential for operation?",
        answer:
          "Not required, but enhances alerts, tips, and tracking; basic manual mode suffices.",
      },
      {
        question: "Compatible with standard seeds?",
        answer:
          "Designed for proprietary pods; adaptations possible but risk warranty and efficacy.",
      },
      {
        question: "Pod lifespan?",
        answer:
          "2-3 months for herbs/microgreens; up to 6 for perennials like basil with regular harvesting.",
      },
      {
        question: "Premium price justified?",
        answer:
          "For advanced automation and aesthetics, yes; budget growers may prefer simpler alternatives.",
      },
    ],
  },
  "hamama-microgreens-kit": {
    name: "Hamama Microgreens Growing Kit",
    brand: "Hamama",
    rating: 4.5,
    reviews: 900,
    price: "$35.00",
    image: "https://m.media-amazon.com/images/I/71t6uTuwL2L._AC_SX679_.jpg",
    amazonLink: "https://www.amazon.com/HAMAMA-Microgreens-Growing-30-Second-Guaranteed/dp/B095T1FLZK/ref=sr_1_3?crid=2F65871GDE4H8&dib=eyJ2IjoiMSJ9.io-Bh_Ghkdo4s-Y5zKrx8DTdlzEnD72to-g-4ZRGztOdbyG27KYco_eqPApH3-e0.VS-Q9lkQtwPHH1JFMbe4r9OrYkU150a2k2fO8dZXgWg&dib_tag=se&keywords=Hamama+Microgreens+Kit&qid=1759835770&sprefix=hamama+microgreens+kit%2Caps%2C250&sr=8-3",
    description:
      "Hamama Microgreens Kit uses innovative seed quilts for soil-free, mess-free growing—add water to the bamboo tray and harvest nutrient-dense greens in just 7-10 days.",
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
      "Soil-less for zero mess",
      "Quilts simplify seeding",
      "Family-friendly ease",
      "Subscription refills",
      "Rapid 7-10 day cycles",
      "Organic varieties",
    ],
    cons: [
      "Light source needed separately",
      "Quilt refills ongoing expense",
      "Quilt brand lock-in",
      "One variety per tray",
    ],
    detailedReview: {
      design:
        "Minimalist bamboo tray with clear reservoir promotes easy viewing. Seed quilts are prepped fabric mats, eliminating mess for a clean, approachable setup.",
      performance:
        "Quilts yield uniform, vibrant greens with high germination. Water-only maintenance produces flavorful harvests in under two weeks consistently.",
      easeOfUse:
        "Ultra-simple: quilt in tray, water, wait. No planting or cleanup—perfect for all ages with minimal daily checks.",
      value:
        "Starter kit is accessible; subscriptions cut refill costs. Prioritizes convenience, making it economical for frequent microgreens enthusiasts.",
    },
    faqs: [
      {
        question: "Grow light required?",
        answer:
          "Windowsill light ideal; supplement with LED in low-light seasons for best results.",
      },
      {
        question: "Quilt refill pricing?",
        answer:
          "$6-8 each; subscriptions drop to ~$5 with scheduled deliveries for savings.",
      },
      {
        question: "Tray reusability?",
        answer:
          "Yes—rinse between uses; dishwasher-safe for thorough, effortless cleaning.",
      },
      {
        question: "Available varieties?",
        answer:
          "10+ options like broccoli, kale, radish; mixes and seasonal additions expand choices.",
      },
    ],
  },
  "ahopegarden-hydroponics-system": {
    name: "Ahopegarden Hydroponics Growing System",
    brand: "Ahopegarden",
    rating: 4.4,
    reviews: 500,
    price: "$53.19",
    image: "https://m.media-amazon.com/images/I/81VxSjMq8yL._AC_SX679_.jpg",
    amazonLink: "https://www.amazon.com/Ahopegarden-Hydroponics-Growing-Hydroponic-Planting/dp/B0DFQ25GY5/ref=sr_1_2?crid=LPWBA91UTJF7&dib=eyJ2IjoiMSJ9.yxsNnWoNTHPV--nB9nqsuzCF6FD16_uOXtDKnC9Z5WfzUFA7hWXoMarCa1vlQ89_c6sWIPjFUqvR3GhMkkI7AOSsOMBlH4uoULDBAvO5O1879bco9WA8plADVVpPZHfb__fKQUYM9es4dO4CMhOXWlXgUcMFEX7fxMCekuSbI6f5BmqvGPmBxDVx8ilNkqjx8AAK3J7v4MX4AJZRhJOEJXaCNJ0CF2o-7exO2Mq9OjaQtcXop-Y4rXjdupRvKcSbkfmSm1ShEBcdiKyzbgtJZzsjyUyJrVBCOn9v6kN0Z4Y.stpyotrkA3iI4wo5r1Etp1_GyYsimxNEts4H_NPP_r4&dib_tag=se&keywords=Lettuce%2BGrow%2BFarmstand&qid=1759835797&sprefix=lettuce%2Bgrow%2Bfarmstand%2Caps%2C253&sr=8-2&th=1",
    description:
      "Ahopegarden's 12-pod hydroponic system with LCD touch panel and 17-inch height adjustment enables quiet, efficient indoor herb and veggie cultivation for home kitchens.",
    specs: {
      dimensions: '12" x 6" x 17"',
      weight: "2.8 lbs",
      capacity: "12 pods",
      lightType: "Full spectrum LED (20W)",
      waterCapacity: "5 liters",
      material: "BPA-free plastic",
      warranty: "1 year",
    },
    pros: [
      "Generous 12-pod layout",
      "User-friendly LCD controls",
      "Tall 17-inch clearance",
      "Silent pump operation",
      "Energy-efficient design",
      "Versatile for veggies/herbs",
    ],
    cons: [
      "Basic plastic durability",
      "Limited mode variety",
      "Occasional pump noise",
      "No app features",
    ],
    detailedReview: {
      design:
        "Compact black unit with intuitive LCD panel and extendable light arm. The 5L tank supports extended runs, though the plastic feels standard rather than luxurious.",
      performance:
        "20W LED and 30-minute pump cycles promote healthy root oxygenation. Herbs flourish in 3-4 weeks; the height accommodates taller stems without burn.",
      easeOfUse:
        "Touch setup in minutes; modes simulate sunlight for 50% faster flowering. Quiet cycles ensure fresh circulation without disruption.",
      value:
        "Budget-friendly at $53 with solid capacity and automation. Ideal for apartment dwellers seeking fresh produce without complexity.",
    },
    faqs: [
      {
        question: "Water refill frequency?",
        answer:
          "Every 7-10 days; the large tank and cycles maintain freshness effortlessly.",
      },
      {
        question: "Best for which plants?",
        answer:
          "Herbs, lettuce, strawberries—dual modes enhance fruit sweetness and veggie vigor.",
      },
      {
        question: "Quiet enough for living spaces?",
        answer:
          "Yes, the ultra-quiet pump runs briefly, preserving peace in homes or offices.",
      },
      {
        question: "Included accessories?",
        answer:
          "12 pods, nutrients, and manual; seeds optional for personalization.",
      },
    ],
  },
  "back-to-the-roots-water-garden": {
    name: "Back to the Roots Water Garden",
    brand: "Back to the Roots",
    rating: 4.3,
    reviews: 700,
    price: "$99.99",
    image: "https://m.media-amazon.com/images/I/61Vb6bi2H2L._AC_SX679_.jpg",
    amazonLink: "https://www.amazon.com/Back-Roots-Hydroponic-Gardening-Everything/dp/B0B6Q4J6XY/ref=sr_1_6?crid=PD8HCRUVNRU2&dib=eyJ2IjoiMSJ9.n-t54wuuArrfJp9Kku70pfx1AINKWymKaCcuQTA15qFcLmKboVy-ZdtnSHMo6dxELfL0_ZDs7Lgo4uEhRIK2xSuxaxvyQtC6PvQYNmjanxM-_8MLgyyf6Qhm_b9DZ4_u9NeVoXzpNydWK-NwZW-Lq4tMaMiknAwYaeFoooFx_vQHtU_OzZzyHIRldh6zcqFEe7wsYn91a7ZmV9dBhCTZo43l9pI2cIazBDwkUKyh1UbVLeAkKBfPnS0I86Ch8FF1L4IikvS_CvstW9loRiKLSCqpwRpKDQBTJDCBsUsKo1I.fF9Y6wwbt_ms0dudSDnjUzDyiL2HLlniCa2SLCRrLGQ&dib_tag=se&keywords=Back+to+the+Roots+Water+Garden&qid=1759835832&sprefix=back+to+the+roots+water+garden%2Caps%2C265&sr=8-6",
    description:
      "Back to the Roots Water Garden merges aquaponics with a 3-gallon fish tank for educational, eco-friendly microgreens and herb growing, where fish naturally fertilize plants.",
    specs: {
      dimensions: '15" x 8" x 11"',
      weight: "3 lbs (empty)",
      capacity: "3-5 plants",
      lightType: "None (natural light required)",
      waterCapacity: "3 gallons",
      material: "BPA-free plastic",
      warranty: "30 days",
    },
    pros: [
      "Integrated aquaponic cycle",
      "Kid-engaging education",
      "Sustainable waste-to-fertilizer",
      "Power-free operation",
      "Affordable aquaponics intro",
      "Included fish essentials",
    ],
    cons: [
      "Small plant capacity",
      "Fish maintenance learning curve",
      "No built-in lighting",
      "Regular tank cleaning",
    ],
    detailedReview: {
      design:
        "Tiered tank-bed layout circulates water efficiently in a countertop-friendly size. Clear components educate on the ecosystem visually.",
      performance:
        "Fish nutrients fuel steady microgreens/herb growth; 3-gallon capacity supports small, balanced yields without external feeds.",
      easeOfUse:
        "Simple setup, but fish care (daily feeding, quality checks) adds engagement. Plants thrive passively once balanced.",
      value:
        "Under $100 introduces aquaponics affordably; educational perks shine for families, though pure plant growers may seek simpler trays.",
    },
    faqs: [
      {
        question: "Recommended fish types?",
        answer:
          "Bettas for ease; goldfish for more waste/fertilizer—fits 3 gallons max.",
      },
      {
        question: "Fertilizer necessary?",
        answer:
          "No—fish waste suffices in this closed-loop; overfeeding risks imbalance.",
      },
      {
        question: "Educational for children?",
        answer:
          "Highly—teaches cycles and sustainability; classroom staple for hands-on learning.",
      },
      {
        question: "Beyond herbs viable?",
        answer:
          "Microgreens and greens excel; space limits larger veggies effectively.",
      },
    ],
  },
  "rise-gardens-personal-garden": {
    name: "Rise Gardens Personal Garden",
    brand: "Rise Gardens",
    rating: 4.7,
    reviews: 400,
    price: "$279.00",
    image: "https://m.media-amazon.com/images/I/81WBijSHa4L._AC_SX679_.jpg",
    amazonLink: "https://www.amazon.com/Rise-Gardens-Hydroponics-Controlled-Self-Watering/dp/B098K82JSV/ref=sr_1_1?crid=24LZ6G32ED35C&dib=eyJ2IjoiMSJ9.7dNqzYMpWPFubvGiEKNXVzKBNqZQ_0xHHV0FOzE41uTFcLIySdxzp8b8o-inrT-NDeeI0mqJ6Ha5eP0F13cDSARLvm6w9IQGQKhxrG4JvNDvimTFApG89Clv096eQKaTnoiT8rJafgMS2qkv_D6prPIZfi7jP8_oMLmf4dB-2EGuOPyfgWy7qqgL9BkPPVGEiLJyV-2PqJoZn_of6Rov5A.qaWqY5xPCtXUiaIVLOHpqyRHHWCXmGyaMFr5_zANCJ0&dib_tag=se&keywords=Rise+Gardens+Personal+Garden&qid=1759835866&sprefix=rise+gardens+personal+garden%2Caps%2C256&sr=8-1",
    description:
      "Rise Gardens Personal Garden delivers modular, app-controlled hydroponics for 12 plants, blending premium steel build with guided growth for tech-forward indoor farming.",
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
      "Durable metal framework",
      "App-driven plant coaching",
      "Expandable modularity",
      "Pro-level yields",
      "Stylish integration",
      "Responsive support",
    ],
    cons: [
      "High entry barrier",
      "App reliance",
      "Nursery pod premiums",
      "Bulky footprint",
    ],
    detailedReview: {
      design:
        "Powder-coated steel elevates it to furniture status; modular stacking and adjustable 45W LED create a versatile, eye-catching unit.",
      performance:
        "5-gallon system with robust pump yields exceptional growth; app-tailored advice ensures 12-plant optimization and high harvests.",
      easeOfUse:
        "App-led setup and alerts minimize effort; weekly checks suffice for automated watering/lighting in this intuitive ecosystem.",
      value:
        "Premium pricing matches longevity and scalability; expandable design future-proofs for dedicated growers seeking quality over quantity.",
    },
    faqs: [
      {
        question: "Modular expansion possible?",
        answer:
          "Yes—stack units for growth; begin small and scale as confidence builds.",
      },
      {
        question: "App's role?",
        answer:
          "Custom instructions, reminders, and diagnostics; essential for novices, optional for experts.",
      },
      {
        question: "Own seeds compatible?",
        answer:
          "Via kits; proprietary nurseries maximize system synergy for superior outcomes.",
      },
      {
        question: "Price-to-value ratio?",
        answer:
          "Strong for tech/modular appeal; metal durability and guidance warrant the investment long-term.",
      },
    ],
  },
  "gardyn-home-kit": {
    name: "Gardyn Home Kit 3.0",
    brand: "Gardyn",
    rating: 4.6,
    reviews: 300,
    price: "$595.00",
    image: "https://m.media-amazon.com/images/I/81qXljfZRDL._AC_SX679_.jpg",
    amazonLink: "https://www.amazon.com/Hydroponics-Growing-Vertical-Vegetables-Gardening/dp/B0DK7VCN4X/ref=sr_1_1?crid=2GYBC6741XO9F&dib=eyJ2IjoiMSJ9.nDIxLOlai5IYYowuGCHP-zFU-YVC18Ks-zpoZuEvPYg._vHmPw0bNb60lvWE0JylziWSY3dRfkvN9aPnf77EeJc&dib_tag=se&keywords=Gardyn+Home+Kit+3.0&qid=1759835893&sprefix=gardyn+home+kit+3.0%2Caps%2C256&sr=8-1",
    description:
      "Gardyn Home Kit 3.0's vertical tower with AI and camera tech automates 30-plant hydroponics, monitoring health for effortless, space-efficient indoor yields.",
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
      "Huge 30-plant throughput",
      "AI health diagnostics",
      "Camera oversight",
      "Floor-space saver",
      "Full automation",
      "Expert outcomes",
    ],
    cons: [
      "Steep cost",
      "Subscription for AI",
      "Ceiling height demand",
      "Immobile weight",
    ],
    detailedReview: {
      design:
        "Towering 5+ feet with column-integrated LEDs and top camera; white aesthetic commands space as a modern art piece.",
      performance:
        "AI-camera synergy analyzes via app for tailored care; 8-gallon flow yields bountiful, healthy crops across 30 ports.",
      easeOfUse:
        "Hour-long setup with app guidance; AI automates diagnostics/watering—weekly oversight for harvesting only.",
      value:
        "Top-tier pricing for unmatched tech/capacity; subscription unlocks AI, suiting pros chasing innovation over basics.",
    },
    faqs: [
      {
        question: "Subscription mandatory?",
        answer:
          "$29/month enables AI/camera; base functions without, but loses diagnostic edge.",
      },
      {
        question: "AI functionality?",
        answer:
          "Camera feeds data for health/growth analysis, app alerts, and issue resolution.",
      },
      {
        question: "True 30-plant capacity?",
        answer:
          "Yes; scale down for larger specimens, prioritizing microgreens/herbs for max use.",
      },
      {
        question: "Subscription value?",
        answer:
          "Worth it for AI perks; without, it's premium but misses justifying the elite price.",
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
