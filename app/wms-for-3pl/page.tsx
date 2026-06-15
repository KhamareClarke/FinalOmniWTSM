import type { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { ArrowRight, Users, BarChart3, Lock, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "WMS for 3PL — Third-Party Logistics Warehouse Management System UK",
  description: "OmniWTMS is purpose-built for UK 3PL providers. Multi-client inventory, white-label client portals, real-time reporting, and 99.8% accuracy. No setup fees. Book a free demo.",
  keywords: "3PL warehouse management system UK, third party logistics WMS, 3PL software UK, multi-client warehouse management, 3PL inventory management",
  openGraph: {
    title: "WMS for 3PL | OmniWTMS UK",
    description: "Purpose-built for UK 3PL providers. Multi-client inventory, white-label portals, and 99.8% accuracy.",
    url: "https://omniwtms.com/wms-for-3pl",
    type: "website",
    locale: "en_GB",
    siteName: "OmniWTMS",
    images: [{ url: "https://omniwtms.com/og-image.png", width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
    title: "WMS for 3PL | OmniWTMS UK",
    description: "Multi-client inventory management, white-label portals, 99.8% accuracy. 48-hour setup.",
    images: ["https://omniwtms.com/og-image.png"],
    site: "@omniwtms"
  },
  alternates: { canonical: "https://omniwtms.com/wms-for-3pl" }
};

const features = [
  { icon: Users, title: "Multi-Client Inventory Segregation", description: "Manage inventory for multiple clients with complete separation, individual reporting, and client-specific workflows." },
  { icon: Globe, title: "White-Label Client Portals", description: "Give each client a branded self-service portal to view stock levels, order status, and delivery performance." },
  { icon: BarChart3, title: "Client Billing & Reporting", description: "Automated billing based on storage, picks, and deliveries. Send professional reports to clients at the click of a button." },
  { icon: Lock, title: "GDPR-Compliant Data Segregation", description: "Each client's data is completely segregated with role-based access controls and full audit trails." },
];

const faqs = [
  {
    q: "Can OmniWTMS manage inventory for multiple clients simultaneously?",
    a: "Yes, OmniWTMS is purpose-built for multi-client 3PL operations. Each client's inventory is completely segregated with individual reporting, billing, and portal access. You can manage unlimited clients from a single platform."
  },
  {
    q: "Can I give clients visibility into their own inventory without showing other clients' data?",
    a: "Absolutely. OmniWTMS provides white-label client portals that each client can log into to see only their own inventory, orders, and delivery performance. You can brand the portal with your 3PL company logo and colours."
  },
  {
    q: "How does OmniWTMS handle billing for 3PL operations?",
    a: "OmniWTMS tracks all billable activities per client — storage by pallet/location, inbound and outbound picks, labelling, and value-added services. This data can be exported or used to generate client invoices automatically."
  },
  {
    q: "Does OmniWTMS support multi-warehouse 3PL operations?",
    a: "Yes, OmniWTMS supports unlimited warehouse locations. You can manage inventory across multiple sites, assign clients to specific warehouses or locations, and get unified reporting across all your 3PL sites."
  },
];

export default function WmsFor3plPage() {
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
      { "@type": "ListItem", "position": 2, "name": "WMS for 3PL", "item": "https://omniwtms.com/wms-for-3pl" }
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
              <span className="text-xs font-semibold text-blue-700 tracking-wide uppercase">3PL & Distribution</span>
            </span>
            <h1 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-700 text-transparent bg-clip-text">
              Warehouse Management System for UK 3PL Providers
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Purpose-built for third-party logistics. Manage multiple clients, automate billing, and give every client a branded self-service portal — all from one platform.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white font-bold px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                Book Free Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link href="/case-studies/manchester-logistics">
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg rounded-xl border-2 border-blue-500 text-blue-700 hover:bg-blue-50 transition-all">
                  See 3PL Case Study
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
              { value: "99.8%", label: "Inventory Accuracy" },
              { value: "£47K", label: "Avg. Monthly Savings" },
              { value: "38%", label: "Faster Deliveries" },
              { value: "48hrs", label: "Go-Live Time" },
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
          <h2 className="text-3xl font-black mb-4 text-center bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-700 text-transparent bg-clip-text">Built for Multi-Client 3PL Operations</h2>
          <p className="text-xl text-slate-600 mb-12 text-center max-w-2xl mx-auto">
            Everything a UK 3PL needs to manage clients efficiently, accurately, and profitably.
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

      {/* FAQ */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-black mb-8 text-center bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-700 text-transparent bg-clip-text">3PL WMS FAQs</h2>
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
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-700 text-transparent bg-clip-text">Explore Other Solutions</h2>
          <div className="flex flex-wrap gap-4">
            <Link href="/wms-for-ecommerce" className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-blue-600 hover:border-blue-400 font-medium text-sm">WMS for E-commerce</Link>
            <Link href="/wms-for-retail" className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-blue-600 hover:border-blue-400 font-medium text-sm">WMS for Retail</Link>
            <Link href="/wms-for-couriers" className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-blue-600 hover:border-blue-400 font-medium text-sm">WMS for Couriers</Link>
            <Link href="/case-studies" className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-blue-600 hover:border-blue-400 font-medium text-sm">Case Studies</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl font-black text-white mb-5">Ready to Scale Your 3PL Operation?</h2>
          <p className="text-xl text-blue-100 mb-8">Join UK 3PL providers achieving 99.8% accuracy and £47K+ monthly savings with OmniWTMS.</p>
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
