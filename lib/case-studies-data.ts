export interface CaseStudyResult {
  metric: string;
  label: string;
}

export interface CaseStudy {
  slug: string;
  company: string;
  industry: string;
  size: string;
  location: string;
  challenge: string;
  solution: string;
  results: CaseStudyResult[];
  testimonial: string;
  author: string;
  authorTitle: string;
  keywords: string[];
  description: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "manchester-logistics",
    company: "Manchester Logistics Group",
    industry: "3PL & Distribution",
    size: "50 vehicles, 3 warehouses",
    location: "Manchester, UK",
    challenge: "Manual processes causing 40% delivery delays and inventory errors across 3 warehouses",
    solution: "Implemented OmniWTMS with AI route optimization, real-time tracking, and automated inventory management across all 3 sites",
    results: [
      { metric: "38%", label: "Faster Deliveries" },
      { metric: "99.8%", label: "Inventory Accuracy" },
      { metric: "£47K", label: "Monthly Cost Savings" },
      { metric: "94%", label: "Customer Satisfaction" },
    ],
    testimonial: "OmniWTMS transformed our entire operation. We went from chaos to complete control in just 48 hours. Our delivery times improved by 40% and customer complaints dropped to almost zero.",
    author: "Sarah Mitchell",
    authorTitle: "Operations Director, Manchester Logistics Group",
    keywords: ["3PL warehouse management", "Manchester logistics", "distribution centre WMS", "multi-warehouse management"],
    description: "How Manchester Logistics Group reduced delivery times by 38% and achieved 99.8% inventory accuracy with OmniWTMS across their 3-warehouse, 50-vehicle operation.",
  },
  {
    slug: "london-couriers",
    company: "London Express Couriers",
    industry: "Same-Day Delivery",
    size: "120 drivers, 5 hubs",
    location: "London, UK",
    challenge: "Unable to scale operations during peak periods and facing high fuel costs with 120 drivers across 5 London hubs",
    solution: "Deployed OmniWTMS mobile apps with dynamic AI routing, driver analytics, and real-time customer tracking across all 5 London hubs",
    results: [
      { metric: "156%", label: "Order Volume Increase" },
      { metric: "31%", label: "Fuel Cost Reduction" },
      { metric: "2.4hrs", label: "Saved Per Driver Daily" },
      { metric: "4.8/5", label: "Driver App Rating" },
    ],
    testimonial: "The AI routing alone saved us over £15,000 per month in fuel costs. The mobile app made our drivers' lives so much easier, and customer tracking reduced support calls by 60%.",
    author: "James Thompson",
    authorTitle: "CEO, London Express Couriers",
    keywords: ["same-day delivery management", "courier management London", "driver app logistics", "courier fleet optimization"],
    description: "How London Express Couriers scaled order volume by 156% and cut fuel costs by 31% using OmniWTMS's AI routing and mobile driver app across their 120-driver, 5-hub London operation.",
  },
  {
    slug: "birmingham-warehouse",
    company: "Birmingham Warehouse Solutions",
    industry: "E-commerce Fulfillment",
    size: "200,000 sq ft, 40 staff",
    location: "Birmingham, UK",
    challenge: "Inventory discrepancies, slow picking times, and order errors affecting e-commerce fulfillment in a 200,000 sq ft facility",
    solution: "Integrated OmniWTMS with barcode scanning, automated pick workflows, and real-time inventory management for 40 warehouse staff",
    results: [
      { metric: "99.9%", label: "Pick Accuracy" },
      { metric: "54%", label: "Faster Order Processing" },
      { metric: "£89K", label: "Annual Labour Savings" },
      { metric: "Zero", label: "Stockouts in 6 Months" },
    ],
    testimonial: "We eliminated virtually all picking errors and cut our order processing time in half. The ROI was evident within the first month. Best investment we've ever made.",
    author: "Lisa Rodriguez",
    authorTitle: "Warehouse Manager, Birmingham Warehouse Solutions",
    keywords: ["ecommerce fulfillment WMS", "Birmingham warehouse", "pick accuracy improvement", "warehouse barcode scanning"],
    description: "How Birmingham Warehouse Solutions achieved 99.9% pick accuracy and 54% faster order processing with OmniWTMS in their 200,000 sq ft e-commerce fulfillment centre.",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export function getAllCaseStudySlugs(): string[] {
  return caseStudies.map((cs) => cs.slug);
}
