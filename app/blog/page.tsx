import type { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, TrendingUp, Package, Truck, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/lib/blog-data";
import { generateMetadata as genMeta } from "@/lib/seo";

export const metadata: Metadata = genMeta({
  title: "Logistics Insights & Resources | WMS & TMS Blog",
  description: "Expert advice on warehouse management, transport optimization, last-mile delivery, and UK logistics technology. Practical guides for logistics firms.",
  canonical: "https://omniwtms.com/blog",
  keywords: ["logistics blog UK", "warehouse management tips", "transport management insights", "logistics technology articles"],
});

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Technology: TrendingUp,
  Operations: Truck,
  "Best Practices": BarChart3,
  "Customer Success": TrendingUp,
  Sustainability: Package,
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Breadcrumbs />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "OmniWTMS Logistics Blog",
            "description": "Expert advice on warehouse management, transport optimization, and UK logistics technology",
            "url": "https://omniwtms.com/blog",
            "publisher": {
              "@type": "Organization",
              "name": "OmniWTMS",
              "logo": {
                "@type": "ImageObject",
                "url": "https://omniwtms.com/images/omniwtmslogo.png"
              }
            },
            "blogPost": blogPosts.map((post) => ({
              "@type": "BlogPosting",
              "headline": post.title,
              "description": post.excerpt,
              "datePublished": post.date,
              "author": {
                "@type": "Person",
                "name": post.author
              },
              "url": `https://omniwtms.com/blog/${post.slug}`
            }))
          })
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 via-purple-100 to-indigo-100 border border-blue-200/60 shadow-sm mb-6">
              <span className="text-xs font-semibold text-blue-700 tracking-wide uppercase">Logistics Blog</span>
            </span>
            <h1 className="text-5xl md:text-6xl font-black mb-5 bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-700 text-transparent bg-clip-text">
              Logistics Insights & Resources
            </h1>
            <p className="text-xl text-slate-600">
              Expert advice, industry trends, and practical tips to optimize your warehouse and transport operations.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => {
              const IconComponent = iconMap[post.category] || Package;
              return (
                <article
                  key={post.slug}
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100"
                >
                  <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center relative overflow-hidden">
                    <IconComponent className="h-20 w-20 text-blue-600 opacity-20" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3 text-sm">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-semibold">
                        {post.category}
                      </span>
                      <div className="flex items-center text-gray-500">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>

                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h2>

                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(post.date).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </div>

                      <Link
                        href={`/blog/${post.slug}`}
                        className="flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                      >
                        Read More
                        <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5">
            Ready to Transform Your Logistics?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            See how OmniWTMS can help you achieve the results discussed in these articles.
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-blue-50 font-bold px-10 py-6 text-lg rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Book a Free Demo
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
