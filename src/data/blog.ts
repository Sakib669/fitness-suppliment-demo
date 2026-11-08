export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  day: string;
  monthYear: string;
  views: number;
  readTime: string;
  tags: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "blog-1",
    slug: "unlocking-your-potential-benefits-of-supplements",
    title: "UNLOCKING YOUR POTENTIAL: HARNESSING THE BENEFITS OF SUPPLEMENTS",
    excerpt: "In our ongoing pursuit of peak health and performance, supplements have become indispensable tools. Whether you're an athlete striving for a competitive edge or simply aiming to enhance overall wellness, the realm of supplements offers a diverse array of targeted solutions.",
    content: "Scientific advancements in micronutrient encapsulation and bioavailable protein hydrolysis now allow athletes to recover up to 40% faster. Discover the core foundational nutrients every active individual should prioritize to unlock sustained cellular energy and prevent overtraining syndrome.",
    image: "/images/blog/blog-1.jpg",
    author: "Vinod Sharma",
    date: "2024-12-31",
    day: "31",
    monthYear: "DEC 2024",
    views: 61,
    readTime: "4 min read",
    tags: ["Recovery", "Nutrition", "Bioavailability"]
  },
  {
    id: "blog-2",
    slug: "enhancing-potential-embracing-supplements",
    title: "ENHANCING YOUR POTENTIAL: EMBRACING THE BENEFITS OF SUPPLEMENTS",
    excerpt: "In our pursuit of optimal health and peak performance, supplements have become invaluable tools. Whether you're an athlete seeking an edge or aiming to support overall well-being, supplements offer a diverse range of benefits. But with so many options...",
    content: "Navigating the modern supplement market requires understanding purity standards and clinical dosing. Here is our comprehensive breakdown of essential amino acids, creatine timing protocols, and third-party laboratory certifications that guarantee clean athletic fueling.",
    image: "/images/blog/blog-2.jpg",
    author: "Vinod Sharma",
    date: "2024-12-31",
    day: "31",
    monthYear: "DEC 2024",
    views: 55,
    readTime: "6 min read",
    tags: ["Performance", "Science", "Hydration"]
  },
  {
    id: "blog-3",
    slug: "power-of-supplements-metabolic-edge",
    title: "UNLOCKING YOUR POTENTIAL: THE POWER OF SUPPLEMENTS",
    excerpt: "In our quest for optimal health and peak performance, supplements have emerged as invaluable allies. Whether you're an athlete striving for that extra edge or someone looking to support overall wellness, the world of supplements offers a myriad of...",
    content: "Metabolic flexibility is the body's superpower. Learn how combining adaptogens like ashwagandha with clean micellar casein and targeted electrolytes stabilizes blood sugar and enhances deep stage REM recovery during high-intensity training cycles.",
    image: "/images/blog/blog-3.jpg",
    author: "Vinod Sharma",
    date: "2024-12-31",
    day: "31",
    monthYear: "DEC 2024",
    views: 118,
    readTime: "5 min read",
    tags: ["Metabolism", "Longevity", "Strength"]
  }
];

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  role: string;
  rating: number;
  text: string;
  productUsed: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "EMMA CHEN",
    avatar: "/images/testimonials/avatar-1.jpg",
    role: "CrossFit Competitor",
    rating: 5,
    text: "The Electro-Hydrate Recovery Whey completely eliminated my post-workout fatigue. Clean ingredients with zero bloating, and the taste is remarkably crisp without that artificial stevia aftertaste.",
    productUsed: "Electro-Hydrate Recovery Whey"
  },
  {
    id: "test-2",
    name: "JOHN DOE",
    avatar: "/images/testimonials/avatar-2.jpg",
    role: "Elite Powerlifter",
    rating: 5,
    text: "Switched to Monolith Mass Matrix two months ago and added 4kg of pure lean mass while keeping my digestion completely stable. By far the cleanest formulation on the market.",
    productUsed: "Monolith Obsidian Mass Matrix"
  },
  {
    id: "test-3",
    name: "MARTHA VANCE",
    avatar: "/images/testimonials/avatar-3.jpg",
    role: "Marathon Runner & Coach",
    rating: 5,
    text: "The bio-complex vitamins gave me consistent all-day energy during 70-mile training weeks. Certified clean and lab-tested, which is critical for my competitive team.",
    productUsed: "Zenith Multi-Vitamin Bio-Complex"
  }
];
