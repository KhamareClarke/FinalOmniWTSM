import type { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { ArrowRight, CheckCircle, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getLocation } from "@/lib/location-data";

const loc = getLocation("warehouse-management-london")!;

export const metadata: Metadata = {
  title: `Warehouse Management System ${loc.city} — WMS & TMS Software | OmniWTMS`,
  description: loc.metaDescription,
  keywords: loc.keywords,
  openGraph: {
    title: `Warehouse Management System ${loc.city} | OmniWTMS`,
    description: loc.metaDescription,
    url: `https://omniwtms.com/${loc.slug}`,
    type: "website",
    locale: "en_GB",
    siteName: "OmniWTMS",
    images: [{ url: "https://omniwtms.com/og-image.png", width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
    title: `WMS ${loc.city} | OmniWTMS`,
    description: loc.metaDescription,
    images: ["https://omniwtms.com/og-image.png"],
    site: "@omniwtms"
  },
  alternates: { canonical: `https://omniwtms.com/${loc.slug}` }
};

export default function LocationPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": `OmniWTMS — Warehouse Management System ${loc.city}`,
    "description": loc.description,
    "url": `https://omniwtms.com/${loc.slug}`,
    "applicationCategory": "BusinessApplication",
    "areaServed": {
      "@type": "City",
      "name": loc.city,
      "containedInPlace": {
        "@type": "AdministrativeArea",
        "name": loc.region
      }
    },
    "offers": { "@type": "Offer", "price": "599", "priceCurrency": "GBP", "priceValidUntil": "2026-12-31" },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "ratingCount": "250" }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `Is OmniWTMS available for logistics companies in ${loc.city}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Yes, OmniWTMS serves ${loc.stats[0].value} customers in ${loc.city} and ${loc.region}. Our cloud-based platform works anywhere in the UK and can be deployed within 48 hours.`
        }
      },
      {
        "@type": "Question",
        "name": `How quickly can OmniWTMS be implemented for a ${loc.city} logistics firm?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `OmniWTMS is typically live within 48 hours for ${loc.city} businesses. This includes data migration from your existing system, carrier integrations, and staff training — all included in your subscription.`
        }
      },
      {
        "@type": "Question",
        "name": `What carriers does OmniWTMS integrate with for ${loc.city} deliveries?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `OmniWTMS integrates with all major UK carriers including Royal Mail, DPD, DHL, UPS, Evri, and Yodel — all commonly used by ${loc.city} logistics firms. Custom carrier integrations are also available.`
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://omniwtms.com" },
      { "@type": "ListItem", "position": 2, "name": `WMS ${loc.city}`, "item": `https://omniwtms.com/${loc.slug}` }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Header />

      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-24 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center gap-2 mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 via-purple-100 to-indigo-100 border border-blue-200/60 shadow-sm">
                <MapPin className="h-4 w-4 text-blue-600" />
                <span className="text-xs font-semibold text-blue-700 tracking-wide uppercase">{loc.region}</span>
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-700 text-transparent bg-clip-text">
              Warehouse Management System for {loc.city} Logistics Firms
            </h1>
            <p className="text-xl text-slate-600 mb-8">{loc.description}</p>
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
            {loc.stats.map((stat, i) => (
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
          <h2 className="text-3xl font-black mb-8 bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-700 text-transparent bg-clip-text">{loc.city}-Specific Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {loc.highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{h}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-black mb-8 text-center bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-700 text-transparent bg-clip-text">{loc.city} WMS FAQs</h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.name}</h3>
                <p className="text-gray-700">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-700 text-transparent bg-clip-text">Also serving nearby areas</h2>
          <div className="flex flex-wrap gap-3 mb-8">
            {loc.nearbyAreas.map((area) => (
              <span key={area} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">{area}</span>
            ))}
          </div>
          <h2 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-700 text-transparent bg-clip-text">Explore Solutions by Industry</h2>
          <div className="flex flex-wrap gap-4">
            <Link href="/wms-for-ecommerce" className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-blue-600 hover:border-blue-400 font-medium text-sm">WMS for E-commerce</Link>
            <Link href="/wms-for-3pl" className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-blue-600 hover:border-blue-400 font-medium text-sm">WMS for 3PL</Link>
            <Link href="/wms-for-couriers" className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-blue-600 hover:border-blue-400 font-medium text-sm">WMS for Couriers</Link>
            <Link href="/case-studies" className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-blue-600 hover:border-blue-400 font-medium text-sm">Case Studies</Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl font-black text-white mb-5">Ready to Transform Your {loc.city} Operation?</h2>
          <p className="text-xl text-blue-100 mb-8">Join {loc.stats[0].value} {loc.city} logistics companies using OmniWTMS. Live in 48 hours.</p>
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
