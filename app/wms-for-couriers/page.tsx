import type { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { ArrowRight, Truck, Map, Smartphone, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "WMS for Couriers — Courier & Delivery Management System UK",
  description: "OmniWTMS courier management software. AI route optimization, driver mobile app, real-time tracking, and electronic POD. 31% fuel savings. Free demo for UK courier firms.",
  keywords: "courier management system UK, delivery management software UK, courier route optimization, driver app UK, last mile delivery software, TMS for couriers UK",
  openGraph: {
    title: "WMS for Couriers | OmniWTMS UK",
    description: "AI route optimization, driver mobile app, real-time tracking. 31% fuel savings for UK courier firms.",
    url: "https://omniwtms.com/wms-for-couriers",
    type: "website",
    locale: "en_GB",
    siteName: "OmniWTMS",
    images: [{ url: "https://omniwtms.com/og-image.png", width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
    title: "WMS for Couriers | OmniWTMS UK",
    description: "31% fuel savings, AI routing, driver app, live tracking. 48-hour setup for UK couriers.",
    images: ["https://omniwtms.com/og-image.png"],
    site: "@omniwtms"
  },
  alternates: { canonical: "https://omniwtms.com/wms-for-couriers" }
};

const features = [
  { icon: Map, title: "AI Route Optimization", description: "Cut fuel costs by 31% with AI-powered routing that considers live traffic, delivery windows, and vehicle capacity." },
  { icon: Smartphone, title: "Driver Mobile App (iOS & Android)", description: "Give drivers a fully-featured app with turn-by-turn navigation, digital POD, and real-time communication." },
  { icon: Truck, title: "Real-Time Vehicle Tracking", description: "See every vehicle's location, speed, and status on a live map. Share ETAs with customers automatically." },
  { icon: BarChart3, title: "Driver Performance Analytics", description: "Track KPIs per driver including stops per hour, on-time rate, and fuel efficiency to improve fleet performance." },
];

const faqs = [
  {
    q: "How much can AI route optimization reduce fuel costs for courier firms?",
    a: "UK courier firms using OmniWTMS's AI routing typically reduce fuel costs by 25-31%. London Express Couriers saved £15,000 per month in fuel alone. The AI considers live traffic, delivery windows, vehicle capacity, and driver hours to generate optimal routes."
  },
  {
    q: "Does OmniWTMS have a driver mobile app?",
    a: "Yes, OmniWTMS includes a native iOS and Android driver app with turn-by-turn navigation, digital proof of delivery (photo + signature), offline mode, and real-time communication with dispatch. Drivers rated the app 4.8/5 stars."
  },
  {
    q: "Can OmniWTMS handle same-day and next-day delivery operations?",
    a: "Yes, OmniWTMS is purpose-built for time-sensitive courier operations. Dynamic routing updates in real-time when new orders arrive, and the system can automatically assign urgent deliveries to the nearest available driver."
  },
  {
    q: "Does OmniWTMS provide electronic proof of delivery?",
    a: "Yes, OmniWTMS's ePOD captures GPS-tagged, timestamped photos and customer signatures at every delivery. This eliminates disputes, reduces admin, and provides legally-valid proof of delivery for all shipments."
  },
];

export default function WmsForCouriersPage() {
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
      { "@type": "ListItem", "position": 2, "name": "WMS for Couriers", "item": "https://omniwtms.com/wms-for-couriers" }
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
              <span className="text-xs font-semibold text-blue-700 tracking-wide uppercase">Courier & Delivery</span>
            </span>
            <h1 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-700 text-transparent bg-clip-text">
              Courier & Delivery Management System for UK Firms
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              AI route optimization, driver mobile app, and real-time tracking — everything UK courier companies need to deliver more, faster, and for less.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white font-bold px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                Book Free Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link href="/case-studies/london-couriers">
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg rounded-xl border-2 border-blue-500 text-blue-700 hover:bg-blue-50 transition-all">
                  See Courier Case Study
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
              { value: "31%", label: "Fuel Cost Reduction" },
              { value: "156%", label: "Order Volume Growth" },
              { value: "2.4hrs", label: "Saved Per Driver/Day" },
              { value: "4.8/5", label: "Driver App Rating" },
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
          <h2 className="text-3xl font-black mb-4 text-center bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-700 text-transparent bg-clip-text">Everything Couriers Need</h2>
          <p className="text-xl text-slate-600 mb-12 text-center max-w-2xl mx-auto">
            From dispatch to delivery, OmniWTMS manages every stage of the courier operation.
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
          <h2 className="text-3xl font-black mb-8 text-center bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-700 text-transparent bg-clip-text">Courier Management FAQs</h2>
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
            <Link href="/wms-for-retail" className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-blue-600 hover:border-blue-400 font-medium text-sm">WMS for Retail</Link>
            <Link href="/blog/reduce-delivery-costs" className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-blue-600 hover:border-blue-400 font-medium text-sm">Reduce Delivery Costs Guide</Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl font-black text-white mb-5">Cut Fuel Costs & Deliver More</h2>
          <p className="text-xl text-blue-100 mb-8">UK courier firms save 31% on fuel and grow order volumes by 156% with OmniWTMS.</p>
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
