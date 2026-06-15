import type { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { TrendingUp, Package, ArrowRight, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { caseStudies } from "@/lib/case-studies-data";
import { generateMetadata as genMeta } from "@/lib/seo";

export const metadata: Metadata = genMeta({
  title: "Customer Case Studies — Real Results from UK Logistics Companies",
  description: "See how UK logistics firms like Manchester Logistics Group, London Express Couriers, and Birmingham Warehouse Solutions achieved 38%+ faster deliveries and 99.8% accuracy with OmniWTMS.",
  canonical: "https://omniwtms.com/case-studies",
  keywords: ["WMS case studies UK", "logistics success stories", "warehouse management results", "transport management ROI"],
});

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "manchester-logistics": Truck,
  "london-couriers": Package,
  "birmingham-warehouse": TrendingUp,
};

export default function CaseStudiesPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "OmniWTMS Customer Case Studies",
    "description": "Real results from UK logistics companies using OmniWTMS",
    "numberOfItems": caseStudies.length,
    "itemListElement": caseStudies.map((study, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": `https://omniwtms.com/case-studies/${study.slug}`,
      "name": `${study.company} Case Study`,
      "item": {
        "@type": "Review",
        "itemReviewed": {
          "@type": "SoftwareApplication",
          "name": "OmniWTMS"
        },
        "author": {
          "@type": "Person",
          "name": study.author,
          "jobTitle": study.authorTitle
        },
        "reviewBody": study.testimonial,
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://omniwtms.com" },
      { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": "https://omniwtms.com/case-studies" }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Header />
      <Breadcrumbs />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 via-purple-100 to-indigo-100 border border-blue-200/60 shadow-sm mb-6">
              <span className="text-xs font-semibold text-blue-700 tracking-wide uppercase">Customer Results</span>
            </span>
            <h1 className="text-5xl md:text-6xl font-black mb-5 bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-700 text-transparent bg-clip-text">
              Real Results from Real UK Businesses
            </h1>
            <p className="text-xl text-slate-600">
              See how leading logistics companies transformed their operations with OmniWTMS
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="space-y-16">
            {caseStudies.map((study, index) => {
              const IconComponent = iconMap[study.slug] || TrendingUp;
              return (
                <article
                  key={study.slug}
                  className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Image Section */}
                    <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-12 flex items-center justify-center relative">
                      <IconComponent className="h-32 w-32 text-blue-600 opacity-20 absolute" />
                      <div className="relative z-10 text-center">
                        <h3 className="text-3xl font-black mb-2 bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-700 text-transparent bg-clip-text">
                          {study.company}
                        </h3>
                        <p className="text-lg text-gray-700 mb-1">{study.industry}</p>
                        <p className="text-sm text-gray-600 mb-1">{study.size}</p>
                        <p className="text-sm text-gray-500">{study.location}</p>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8">
                      <div className="mb-6">
                        <h4 className="text-sm font-bold text-blue-600 uppercase tracking-wide mb-2">
                          The Challenge
                        </h4>
                        <p className="text-gray-700">{study.challenge}</p>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-sm font-bold text-green-600 uppercase tracking-wide mb-2">
                          The Solution
                        </h4>
                        <p className="text-gray-700">{study.solution}</p>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-sm font-bold text-purple-600 uppercase tracking-wide mb-3">
                          The Results
                        </h4>
                        <div className="grid grid-cols-2 gap-4">
                          {study.results.map((result, idx) => (
                            <div
                              key={idx}
                              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-4 text-center border border-blue-200"
                            >
                              <div className="text-3xl font-bold text-blue-600 mb-1">
                                {result.metric}
                              </div>
                              <div className="text-sm text-gray-700">{result.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-blue-600 mb-6">
                        <p className="text-gray-800 italic mb-3">"{study.testimonial}"</p>
                        <p className="text-sm font-semibold text-gray-900">
                          — {study.author}, {study.authorTitle}
                        </p>
                      </div>

                      <Link href={`/case-studies/${study.slug}`}>
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                          Read Full Case Study
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Proven Results Across the UK
            </h2>
            <p className="text-xl text-blue-100">
              Join 250+ logistics companies achieving exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { value: "250+", label: "UK Companies" },
              { value: "38%", label: "Avg. Delivery Speed Increase" },
              { value: "99.8%", label: "Avg. Accuracy Rate" },
              { value: "48hrs", label: "Avg. Implementation Time" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-blue-100 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl font-black text-white mb-5">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            See how OmniWTMS can transform your logistics operations in just 48 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 font-bold px-10 py-6 text-lg rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Book Your Free Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Link href="/pricing">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 font-bold px-8 py-6 text-lg rounded-xl">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
