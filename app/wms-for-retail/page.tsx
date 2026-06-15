import type { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { ArrowRight, ShoppingBag, RefreshCcw, BarChart3, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "WMS for Retail — Warehouse Management System for UK Retailers",
  description: "OmniWTMS helps UK retailers manage stock across stores, warehouses, and online channels. Real-time inventory, click-and-collect, and returns management. Free demo.",
  keywords: "retail warehouse management system UK, WMS for retail, retail stock management software, omnichannel warehouse management, retail inventory system UK",
  openGraph: {
    title: "WMS for Retail | OmniWTMS UK",
    description: "Manage retail stock across stores, warehouses, and online channels from one platform.",
    url: "https://omniwtms.com/wms-for-retail",
    type: "website",
    locale: "en_GB",
    siteName: "OmniWTMS",
    images: [{ url: "https://omniwtms.com/og-image.png", width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
    title: "WMS for Retail | OmniWTMS UK",
    description: "Real-time retail inventory, click-and-collect, returns management. 48-hour setup.",
    images: ["https://omniwtms.com/og-image.png"],
    site: "@omniwtms"
  },
  alternates: { canonical: "https://omniwtms.com/wms-for-retail" }
};

const features = [
  { icon: ShoppingBag, title: "Omnichannel Stock Management", description: "See real-time stock levels across all your stores, warehouses, and online channels from a single dashboard." },
  { icon: Zap, title: "Click & Collect Fulfilment", description: "Process click-and-collect orders instantly, with store staff directed to the correct stock location in seconds." },
  { icon: RefreshCcw, title: "Returns & Reverse Logistics", description: "Streamline retail returns with automated restocking, quality grading, and refund triggers." },
  { icon: BarChart3, title: "Seasonal Demand Planning", description: "AI-powered demand forecasting ensures you're never overstocked or out of stock during peak trading periods." },
];

const faqs = [
  {
    q: "Can OmniWTMS manage stock across multiple retail locations?",
    a: "Yes, OmniWTMS provides real-time inventory visibility across all your stores and warehouses from a single platform. Stock transfers between locations are tracked automatically with full audit trails."
  },
  {
    q: "Does OmniWTMS support click-and-collect orders?",
    a: "Yes, OmniWTMS includes click-and-collect workflows that automatically direct store staff to pick and hold items for collection. Customers receive notifications when their order is ready."
  },
  {
    q: "How does OmniWTMS handle seasonal stock for retailers?",
    a: "OmniWTMS's AI demand forecasting analyses historical sales data to predict seasonal requirements. You can set up automated reorder points that adjust for seasonal demand patterns, preventing both stockouts and overstock situations."
  },
  {
    q: "Can OmniWTMS integrate with our EPOS system?",
    a: "Yes, OmniWTMS integrates with major UK EPOS and ERP systems. Real-time stock updates flow from OmniWTMS to your EPOS, keeping stock levels accurate across all channels automatically."
  },
];

export default function WmsForRetailPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://omniwtms.com" },
      { "@type": "ListItem", "position": 2, "name": "WMS for Retail", "item": "https://omniwtms.com/wms-for-retail" }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Header />

      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-24 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 via-purple-100 to-indigo-100 border border-blue-200/60 shadow-sm mb-6">
              <span className="text-xs font-semibold text-blue-700 tracking-wide uppercase">Retail</span>
            </span>
            <h1 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-700 text-transparent bg-clip-text">
              Warehouse Management System for UK Retailers
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Real-time stock visibility across all stores, warehouses, and online channels. Never lose a sale to a stockout, and never tie up capital in excess inventory again.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white font-bold px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                Book Free Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link href="/pricing">
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg rounded-xl border-2 border-blue-500 text-blue-700 hover:bg-blue-50 transition-all">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-blue-600">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "Real-time", label: "Stock Visibility" },
              { value: "Zero", label: "Overselling" },
              { value: "48hrs", label: "Go-Live Time" },
              { value: "£0", label: "Setup Fee" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-blue-100 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-black mb-4 text-center bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-700 text-transparent bg-clip-text">Retail Inventory, Simplified</h2>
          <p className="text-xl text-slate-600 mb-12 text-center max-w-2xl mx-auto">
            Everything UK retailers need to manage omnichannel inventory efficiently.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={i} className="flex gap-4 p-6 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-black mb-8 text-center bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-700 text-transparent bg-clip-text">Retail WMS FAQs</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-700 text-transparent bg-clip-text">Explore Other Solutions</h2>
          <div className="flex flex-wrap gap-4">
            <Link href="/wms-for-ecommerce" className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-blue-600 hover:border-blue-400 font-medium text-sm">WMS for E-commerce</Link>
            <Link href="/wms-for-3pl" className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-blue-600 hover:border-blue-400 font-medium text-sm">WMS for 3PL</Link>
            <Link href="/wms-for-couriers" className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-blue-600 hover:border-blue-400 font-medium text-sm">WMS for Couriers</Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl font-black text-white mb-5">Stop Losing Sales to Stockouts</h2>
          <p className="text-xl text-blue-100 mb-8">Real-time omnichannel stock management for UK retailers, live in 48 hours.</p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-bold px-10 py-6 text-lg rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
            Book Your Free Demo
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
