export interface Product {
  id: string;
  name: string;
  slug: string;
  category: "Creatine" | "Food & Drink" | "Gainer" | "Nutrition" | "Protein" | "Vitamins";
  price: number;
  originalPrice: number;
  discountPercent: number;
  rating: number;
  reviewsCount: number;
  image: string;
  badge?: "Sale" | "New" | "Best Seller";
  description: string;
  servingSize: string;
  servingsPerContainer: number;
  proteinPerServing: string;
  bcaa: string;
  flavors: string[];
  features: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: "prod-1",
    name: "Zenith Multi-Vitamin Bio-Complex",
    slug: "zenith-multi-vitamin-bio-complex",
    category: "Vitamins",
    price: 2299,
    originalPrice: 2699,
    discountPercent: 15,
    rating: 4.9,
    reviewsCount: 142,
    image: "/images/products/vitamin-complex.png",
    badge: "Sale",
    description: "Clinically dosed micronutrient formula supporting cellular energy, immune defense, and active muscle recovery for high-output athletes.",
    servingSize: "2 Capsules",
    servingsPerContainer: 60,
    proteinPerServing: "0g",
    bcaa: "0g",
    flavors: ["Unflavored Capsules"],
    features: ["Bioavailable Zinc & Magnesium", "Vitamin D3 + K2 Complex", "Antioxidant Polyphenol Matrix"]
  },
  {
    id: "prod-2",
    name: "Monolith Obsidian Mass Matrix",
    slug: "monolith-obsidian-mass-matrix",
    category: "Gainer",
    price: 2399,
    originalPrice: 2899,
    discountPercent: 17,
    rating: 4.8,
    reviewsCount: 98,
    image: "/images/products/mass-gainer.png",
    badge: "Best Seller",
    description: "Dense multi-stage carbohydrate and micellar protein system designed to fuel lean hypertrophy without bloating or excessive sugar spikes.",
    servingSize: "150g (3 Scoops)",
    servingsPerContainer: 30,
    proteinPerServing: "52g",
    bcaa: "11.2g",
    flavors: ["Double Dutch Cocoa", "Vanilla Cream Swirl", "Salted Caramel"],
    features: ["52g Ultra-Pure Protein", "Complex Oat & Sweet Potato Carbs", "Digestive Enzyme Complex"]
  },
  {
    id: "prod-3",
    name: "Electro-Hydrate Recovery Whey",
    slug: "electro-hydrate-recovery-whey",
    category: "Protein",
    price: 1899,
    originalPrice: 1999,
    discountPercent: 5,
    rating: 4.9,
    reviewsCount: 215,
    image: "/images/products/recovery-whey.png",
    badge: "Sale",
    description: "Cold-filtered whey peptide isolate fused with pink Himalayan electrolytes for instantaneous post-training muscular hydration and glycogen replenishment.",
    servingSize: "34g (1 Scoop)",
    servingsPerContainer: 45,
    proteinPerServing: "26g",
    bcaa: "6.4g",
    flavors: ["Valencia Citrus Burst", "Wild Berry Freeze", "Chocolate Fudge"],
    features: ["Zero Added Sugar", "Rapid-Absorbing Isolate", "Full Electrolyte Spectrum"]
  },
  {
    id: "prod-4",
    name: "Apex Bio-Fuel Iso-Protein Genuine",
    slug: "apex-bio-fuel-iso-protein",
    category: "Protein",
    price: 3299,
    originalPrice: 3600,
    discountPercent: 9,
    rating: 5.0,
    reviewsCount: 380,
    image: "/images/products/isolate-gold.png",
    badge: "New",
    description: "Our flagship micro-filtered cross-flow whey isolate engineered for pure bioavailability, instant mixability, and pristine muscle protein synthesis.",
    servingSize: "32g (1 Scoop)",
    servingsPerContainer: 70,
    proteinPerServing: "28g",
    bcaa: "7.1g",
    flavors: ["Alpine Vanilla Cream", "Gourmet Swiss Mocha", "Strawberry Shortcake"],
    features: ["100% Whey Protein Isolate", "Glutamine Fortified", "Micro-Filtered Low Lactose"]
  },
  {
    id: "prod-5",
    name: "Creapure Micronized Power Powder",
    slug: "creapure-micronized-power",
    category: "Creatine",
    price: 1299,
    originalPrice: 1599,
    discountPercent: 19,
    rating: 4.9,
    reviewsCount: 412,
    image: "/images/products/creatine-powder.png",
    badge: "Best Seller",
    description: "Pharmaceutical-grade 200 mesh micronized creatine monohydrate for maximal ATP regeneration, intracellular volumization, and explosive power output.",
    servingSize: "5g (1 Scoop)",
    servingsPerContainer: 100,
    proteinPerServing: "0g",
    bcaa: "0g",
    flavors: ["Pure Unflavored", "Blue Raspberry", "Crisp Green Apple"],
    features: ["99.9% Purity Guaranteed", "Instant Dissolution", "Zero Heavy Metals"]
  },
  {
    id: "prod-6",
    name: "Keto-Bio Electrolyte Hydration Drink",
    slug: "keto-bio-electrolyte-hydration",
    category: "Food & Drink",
    price: 1499,
    originalPrice: 1799,
    discountPercent: 16,
    rating: 4.7,
    reviewsCount: 89,
    image: "/images/products/energy-drink.png",
    badge: "New",
    description: "Clean cellular hydration fueled by real coconut water powder, magnesium glycinate, and bio-identical sodium without artificial dyes.",
    servingSize: "8g (1 Scoop)",
    servingsPerContainer: 50,
    proteinPerServing: "0g",
    bcaa: "2.0g",
    flavors: ["Passionfruit Guava", "Cucumber Lime", "Blood Orange"],
    features: ["Real Coconut Water Extract", "Zero Sucralose", "Sustained Intra-Workout Energy"]
  }
];

export const CATEGORIES = [
  { name: "Creatine", count: 12, icon: "creatine", image: "/images/categories/creatine.png" },
  { name: "Food & drink", count: 18, icon: "drink", image: "/images/categories/food-drink.png" },
  { name: "Gainer", count: 8, icon: "gainer", image: "/images/categories/gainer.png" },
  { name: "Nutrition", count: 24, icon: "nutrition", image: "/images/categories/nutrition.png" },
  { name: "Protein", count: 32, icon: "protein", image: "/images/categories/protein.png" },
  { name: "Vitamins", count: 15, icon: "vitamins", image: "/images/categories/vitamins.png" },
];

export const SPOTLIGHT_PRODUCT = {
  id: "spotlight-1",
  name: "OPTIMUM NUTRITION GOLD BIOMASS",
  slug: "optimum-nutrition-gold-biomass",
  price: 1199,
  originalPrice: 1399,
  discountPercent: 14,
  rating: 4.9,
  reviewsCount: 520,
  image: "/images/products/spotlight-tub.png",
  highlights: [
    {
      title: "Whey Protein Concentrate",
      description: "A high-quality protein source rich in essential amino acids, promoting muscle repair and growth."
    },
    {
      title: "Carbohydrates",
      description: "Fast-acting carbohydrates help replenish glycogen stores, providing quick energy to tired muscles."
    },
    {
      title: "Electrolytes",
      description: "Vital minerals like sodium, potassium, and magnesium aid in rehydration and electrolyte balance after intense workouts."
    }
  ]
};
