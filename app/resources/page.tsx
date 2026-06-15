import type { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FileText, Video, BookOpen, Download, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { generateMetadata as genMeta } from "@/lib/seo";
import Link from "next/link";

export const metadata: Metadata = genMeta({
  title: "Free Logistics Resources — WMS Guides, Whitepapers & Tools",
  description: "Download free UK logistics resources: WMS buyer's guide, ROI calculator, route optimization whitepaper, implementation checklist, and inventory management best practices.",
  canonical: "https://omniwtms.com/resources",
  keywords: ["free WMS guide UK", "logistics whitepaper", "warehouse management resources", "logistics ROI calculator", "WMS implementation checklist"],
});

const resources = [
  {
    id: "wms-buyers-guide",
    title: "The Complete WMS Buyer's Guide 2025",
    type: "Guide",
    description: "Everything you need to know about selecting the right warehouse management system for your UK business. Covers feature comparison, implementation, pricing, and ROI calculation.",
    format: "PDF",
    pages: "32 pages",
    icon: BookOpen,
    downloadUrl: "/resources/wms-buyers-guide-2025.pdf",
    keywords: "warehouse management system buyer's guide"
  },
  {
    id: "roi-calculator",
    title: "Logistics ROI Calculator",
    type: "Tool",
    description: "Calculate your potential savings and ROI from implementing OmniWTMS. Input your current costs and see projected savings across fuel, labour, errors, and failed deliveries.",
    format: "Excel",
    pages: "Interactive",
    icon: FileText,
    downloadUrl: "/resources/logistics-roi-calculator.xlsx",
    keywords: "logistics ROI calculator"
  },
  {
    id: "route-optimization-whitepaper",
    title: "AI Route Optimization Whitepaper",
    type: "Whitepaper",
    description: "Deep dive into how AI-powered routing reduces fuel costs by 30% and improves delivery times. Includes case studies from UK logistics firms and implementation guidance.",
    format: "PDF",
    pages: "24 pages",
    icon: FileText,
    downloadUrl: "/resources/ai-route-optimization-whitepaper.pdf",
    keywords: "AI route optimization whitepaper"
  },
  {
    id: "implementation-checklist",
    title: "WMS Implementation Checklist",
    type: "Checklist",
    description: "Step-by-step checklist to ensure smooth implementation of your new warehouse management system. Covers data migration, staff training, integrations, and go-live testing.",
    format: "PDF",
    pages: "8 pages",
    icon: CheckCircle,
    downloadUrl: "/resources/wms-implementation-checklist.pdf",
    keywords: "WMS implementation checklist"
  },
  {
    id: "video-demo",
    title: "OmniWTMS Platform Demo",
    type: "Video",
    description: "Watch a comprehensive 15-minute walkthrough of OmniWTMS features. See real-time tracking, AI routing, inventory management, and the driver mobile app in action.",
    format: "Video",
    pages: "15 minutes",
    icon: Video,
    downloadUrl: "https://www.youtube.com/watch?v=omniwtms-demo",
    keywords: "OmniWTMS demo video"
  },
  {
    id: "inventory-best-practices",
    title: "Inventory Management Best Practices",
    type: "Guide",
    description: "Proven strategies for optimizing inventory levels and reducing carrying costs in UK warehouses. Covers cycle counting, ABC analysis, FEFO management, and KPI tracking.",
    format: "PDF",
    pages: "18 pages",
    icon: BookOpen,
    downloadUrl: "/resources/inventory-management-best-practices.pdf",
    keywords: "inventory management best practices UK"
  },
];

export default function ResourcesPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Free Logistics Resources",
    "description": "Free guides, whitepapers, and tools for UK logistics professionals",
    "url": "https://omniwtms.com/resources",
    "numberOfItems": resources.length,
    "itemListElement": resources.map((resource, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": resource.title,
      "url": `https://omniwtms.com/resources#${resource.id}`,
      "item": {
        "@type": resource.type === "Video" ? "VideoObject" : "CreativeWork",
        "name": resource.title,
        "description": resource.description,
        "url": resource.downloadUrl,
        "creator": {
          "@type": "Organization",
          "name": "OmniWTMS"
        },
        "keywords": resource.keywords
      }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://omniwtms.com" },
      { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://omniwtms.com/resources" }
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
              <span className="text-xs font-semibold text-blue-700 tracking-wide uppercase">Free Resources</span>
            </span>
            <h1 className="text-5xl md:text-6xl font-black mb-5 bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-700 text-transparent bg-clip-text">
              Free Logistics Resources
            </h1>
            <p className="text-xl text-slate-600">
              Guides, whitepapers, and tools to help you optimize your warehouse and transport operations.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource) => {
              const IconComponent = resource.icon;
              return (
                <div
                  key={resource.id}
                  id={resource.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 overflow-hidden group"
                >
                  <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-8 flex items-center justify-center">
                    <IconComponent className="h-16 w-16 text-blue-600" aria-hidden="true" />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                        {resource.type}
                      </span>
                      <span className="text-sm text-gray-500">{resource.format}</span>
                    </div>

                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {resource.title}
                    </h2>

                    <p className="text-gray-600 mb-4">
                      {resource.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{resource.pages}</span>
                      <a
                        href={resource.downloadUrl}
                        className="inline-flex items-center px-4 py-2 border border-blue-600 text-blue-600 rounded-lg font-semibold text-sm hover:bg-blue-600 hover:text-white transition-colors group-hover:bg-blue-600 group-hover:text-white"
                        aria-label={`Download ${resource.title}`}
                      >
                        <Download className="h-4 w-4 mr-2" />
                        {resource.type === "Video" ? "Watch Now" : "Download"}
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Related content links */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-2xl font-black mb-6 text-center bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-700 text-transparent bg-clip-text">More Helpful Content</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/blog" className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <h3 className="font-bold text-gray-900 mb-2">Logistics Blog</h3>
              <p className="text-gray-600 text-sm">Expert articles on WMS, route optimization, and UK logistics trends</p>
            </Link>
            <Link href="/case-studies" className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-2">Case Studies</h3>
              <p className="text-gray-600 text-sm">Real results from UK logistics companies using OmniWTMS</p>
            </Link>
            <Link href="/help" className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-2">Help Centre</h3>
              <p className="text-gray-600 text-sm">Step-by-step guides and FAQs for OmniWTMS users</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl font-black text-white mb-5">
            Want Personalised Guidance?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Book a free consultation with our logistics experts to discuss your specific needs.
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-blue-50 font-bold px-10 py-6 text-lg rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Schedule Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
