export interface LocationData {
  city: string;
  slug: string;
  region: string;
  description: string;
  metaDescription: string;
  keywords: string;
  stats: { value: string; label: string }[];
  highlights: string[];
  nearbyAreas: string[];
}

export const locations: LocationData[] = [
  {
    city: "London",
    slug: "warehouse-management-london",
    region: "Greater London",
    description: "London's most demanding logistics market — same-day delivery, congestion zone routing, and dense urban fulfilment — demands software built for complexity. OmniWTMS powers courier networks and fulfilment centres across Greater London.",
    metaDescription: "OmniWTMS warehouse management system for London logistics firms. Same-day delivery, congestion zone routing, real-time tracking. Trusted by 80+ London logistics companies. Free demo.",
    keywords: "warehouse management system London, WMS London, logistics software London, courier management London, last mile delivery London, 3PL software London",
    stats: [
      { value: "80+", label: "London Customers" },
      { value: "38%", label: "Faster Deliveries" },
      { value: "31%", label: "Fuel Savings" },
      { value: "48hrs", label: "Go-Live" }
    ],
    highlights: [
      "ULEZ and congestion zone-aware routing",
      "Same-day and time-slot delivery management",
      "Multi-hub operations across Greater London",
      "Integration with London-area carriers",
      "Real-time driver tracking across all London boroughs",
    ],
    nearbyAreas: ["Surrey", "Kent", "Essex", "Hertfordshire", "Middlesex"]
  },
  {
    city: "Manchester",
    slug: "warehouse-management-manchester",
    region: "Greater Manchester",
    description: "Manchester is the logistics hub of the North West — home to major 3PL operations, distribution centres, and courier networks serving the entire North of England. OmniWTMS helps Manchester logistics firms compete with national carriers.",
    metaDescription: "OmniWTMS warehouse management system for Manchester logistics firms. 3PL, distribution, and courier management. See how Manchester Logistics Group saved £47K/month. Free demo.",
    keywords: "warehouse management system Manchester, WMS Manchester, logistics software Manchester, 3PL software Manchester, courier management Manchester, distribution centre WMS Manchester",
    stats: [
      { value: "50+", label: "Manchester Customers" },
      { value: "£47K", label: "Avg Monthly Savings" },
      { value: "99.8%", label: "Inventory Accuracy" },
      { value: "48hrs", label: "Go-Live" }
    ],
    highlights: [
      "3PL multi-client warehouse management",
      "Distribution centre automation",
      "Northern England route optimization",
      "Multi-warehouse management across Greater Manchester",
      "Integration with all major UK carriers",
    ],
    nearbyAreas: ["Salford", "Stockport", "Bolton", "Rochdale", "Oldham", "Bury"]
  },
  {
    city: "Birmingham",
    slug: "warehouse-management-birmingham",
    region: "West Midlands",
    description: "Birmingham's central location makes it a critical hub for UK-wide distribution. OmniWTMS helps Birmingham warehouses and logistics firms maximise throughput, achieve 99.9% pick accuracy, and reduce operational costs.",
    metaDescription: "OmniWTMS warehouse management system for Birmingham logistics and e-commerce fulfilment. See how Birmingham Warehouse Solutions achieved 99.9% pick accuracy. Free demo.",
    keywords: "warehouse management system Birmingham, WMS Birmingham, logistics software Birmingham, ecommerce fulfilment Birmingham, warehouse automation Birmingham, 3PL Birmingham",
    stats: [
      { value: "99.9%", label: "Pick Accuracy" },
      { value: "54%", label: "Faster Processing" },
      { value: "£89K", label: "Annual Labour Savings" },
      { value: "48hrs", label: "Go-Live" }
    ],
    highlights: [
      "E-commerce fulfilment automation",
      "Barcode scanning and pick-by-light workflows",
      "Multi-channel order management",
      "Midlands-optimized route planning",
      "Integration with NEC-area exhibition logistics",
    ],
    nearbyAreas: ["Coventry", "Wolverhampton", "Solihull", "Dudley", "Walsall"]
  },
  {
    city: "Leeds",
    slug: "warehouse-management-leeds",
    region: "West Yorkshire",
    description: "Leeds is Yorkshire's logistics capital — a growing hub for e-commerce, distribution, and courier operations serving the whole of Yorkshire and the Humber. OmniWTMS helps Leeds logistics firms scale efficiently.",
    metaDescription: "OmniWTMS warehouse management system for Leeds logistics firms. E-commerce fulfilment, courier management, and distribution. 48-hour setup. Free demo for Yorkshire businesses.",
    keywords: "warehouse management system Leeds, WMS Leeds, logistics software Leeds, ecommerce fulfilment Leeds, courier management Leeds, Yorkshire warehouse software",
    stats: [
      { value: "250+", label: "UK Customers" },
      { value: "38%", label: "Faster Deliveries" },
      { value: "99.8%", label: "Accuracy Rate" },
      { value: "48hrs", label: "Go-Live" }
    ],
    highlights: [
      "Yorkshire and Humber route optimization",
      "E-commerce fulfilment for Yorkshire retailers",
      "Distribution to the North East and beyond",
      "Multi-carrier integration",
      "Flexible warehouse workflows for all industries",
    ],
    nearbyAreas: ["Bradford", "Wakefield", "Huddersfield", "Halifax", "Harrogate"]
  }
];

export function getLocation(slug: string): LocationData | undefined {
  return locations.find((l) => l.slug === slug);
}
