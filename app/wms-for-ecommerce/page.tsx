import type { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { CheckCircle, ArrowRight, Package, TrendingUp, Zap, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "WMS for E-commerce — Warehouse Management System for Online Retail UK",
  description: "OmniWTMS is the UK's leading WMS for e-commerce. Integrate with Shopify, WooCommerce & Amazon. 99.9% pick accuracy, 54% faster order processing, same-day fulfilment. Free demo.",
  keywords: "ecommerce warehouse management system UK, WMS for online retail, Shopify warehouse integration, ecommerce fulfilment software, order management system ecommerce",
  authors: [{ name: "OmniWTMS Ltd" }],
  openGraph: {
    title: "WMS for E-commerce | OmniWTMS UK",
    description: "The UK's leading warehouse management system for e-commerce. 99.9% pick accuracy, integrates with Shopify, WooCommerce & Amazon.",
    url: "https://omniwtms.com/wms-for-ecommerce",
    type: "website",
    locale: "en_GB",
    siteName: "OmniWTMS",
    images: [{ url: "https://omniwtms.com/og-image.png", width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
    title: "WMS for E-commerce | OmniWTMS UK",
    description: "99.9% pick accuracy, Shopify/WooCommerce/Amazon integration, 48-hour setup.",
    images: ["https://omniwtms.com/og-image.png"],
    site: "@omniwtms"
  },
  alternates: { canonical: "https://omniwtms.com/wms-for-ecommerce" }
};

const features = [
  { icon: Package, title: "Shopify & WooCommerce Integration", description: "Sync orders automatically from all your e-commerce channels. No manual data entry, no errors." },
  { icon: Zap, title: "Same-Day Order Fulfilment", description: "Process and dispatch orders within hours of receipt with automated pick lists and packing workflows." },
  { icon: TrendingUp, title: "99.9% Pick Accuracy", description: "Barcode scanning and zone-based picking eliminate errors that lead to returns and poor reviews." },
  { icon: BarChart3, title: "Peak Season Scalability", description: "Handle Black Friday and Christmas spikes without hiring temps. OmniWTMS scales with your order volume automatically." },
];

const faqs = [
  {
    q: "Does OmniWTMS integrate with Shopify?",
    a: "Yes, OmniWTMS has native integrations with Shopify, WooCommerce, Amazon FBA/FBM, eBay, and all major UK e-commerce platforms. Orders sync automatically and tracking updates flow back to your storefront."
  },
  {
    q: "How quickly can I get my e-commerce warehouse live on OmniWTMS?",
    a: "Most e-commerce warehouses are live within 48 hours. This includes data migration, integration with your e-commerce platform, barcode label printing setup, and staff training."
  },
  {
    q: "Can OmniWTMS handle multiple sales channels?",
    a: "Yes, OmniWTMS is designed for multi-channel e-commerce. Manage inventory across Shopify, Amazon, eBay, and your own website from a single platform, with real-time stock synchronisation."
  },
  {
    q: "Does OmniWTMS support returns management?",
    a: "Yes, OmniWTMS includes a full returns management module with automated refund triggers, condition grading, restock or disposal workflows, and returns reporting."
  },
];

export default function WmsForEcommercePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "OmniWTMS for E-commerce",
    "applicationCategory": "BusinessApplication",
    "description": "Warehouse management system for UK e-commerce businesses. Integrates with Shopify, WooCommerce, and Amazon.",
    "url": "https://omniwtms.com/wms-for-ecommerce",
    "offers": { "@type": "Offer", "price": "349", "priceCurrency": "GBP", "priceValidUntil": "2026-12-31" },
    "featureList": ["Shopify integration", "WooCommerce integration", "Amazon integration", "Barcode scanning", "Returns management", "Same-day fulfilment"],
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "ratingCount": "250" }
  };

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
      { "@type": "ListItem", "position": 2, "name": "WMS for E-commerce", "item": "https://omniwtms.com/wms-for-ecommerce" }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Header />

      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-24 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 via-purple-100 to-indigo-100 border border-blue-200/60 shadow-sm mb-6">
              <span className="text-xs font-semibold text-blue-700 tracking-wide uppercase">E-commerce Fulfilment</span>
            </span>
            <h1 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-700 text-transparent bg-clip-text">
              Warehouse Management System for UK E-commerce
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Process more orders, eliminate picking errors, and scale effortlessly through peak seasons. OmniWTMS integrates with Shopify, WooCommerce, and Amazon out of the box.
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

      {/* Stats */}
      <section className="py-12 bg-blue-600">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "99.9%", label: "Pick Accuracy" },
              { value: "54%", label: "Faster Order Processing" },
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

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-black mb-4 text-center bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-700 text-transparent bg-clip-text">Built for E-commerce Warehouses</h2>
          <p className="text-xl text-slate-600 mb-12 text-center max-w-2xl mx-auto">
            Everything you need to run a high-performance e-commerce fulfilment operation from a single platform.
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

      {/* Integrations */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-3xl font-black mb-4 bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-700 text-transparent bg-clip-text">Integrates With Your Stack</h2>
          <p className="text-gray-600 mb-8">Connect OmniWTMS to all your e-commerce channels and carriers in minutes.</p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Shopify", "WooCommerce", "Amazon", "eBay", "Royal Mail", "DPD", "DHL", "UPS", "Hermes", "Yodel"].map((int) => (
              <span key={int} className="px-4 py-2 bg-white border border-gray-300 rounded-full text-gray-700 font-medium text-sm shadow-sm">
                {int}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-black mb-8 text-center bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-700 text-transparent bg-clip-text">E-commerce WMS FAQs</h2>
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

      {/* Related pages */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-700 text-transparent bg-clip-text">Explore Other Solutions</h2>
          <div className="flex flex-wrap gap-4">
            <Link href="/wms-for-3pl" className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-blue-600 hover:border-blue-400 font-medium text-sm">WMS for 3PL</Link>
            <Link href="/wms-for-retail" className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-blue-600 hover:border-blue-400 font-medium text-sm">WMS for Retail</Link>
            <Link href="/wms-for-couriers" className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-blue-600 hover:border-blue-400 font-medium text-sm">WMS for Couriers</Link>
            <Link href="/case-studies" className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-blue-600 hover:border-blue-400 font-medium text-sm">Case Studies</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl font-black text-white mb-5">Start Processing More Orders Today</h2>
          <p className="text-xl text-blue-100 mb-8">Join UK e-commerce warehouses achieving 99.9% accuracy and same-day fulfilment with OmniWTMS.</p>
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
