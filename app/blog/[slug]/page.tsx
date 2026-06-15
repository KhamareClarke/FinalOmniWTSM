import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getBlogPost, getAllBlogSlugs } from "@/lib/blog-data";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPost(params.slug);
  if (!post) return {};

  const url = `https://omniwtms.com/blog/${post.slug}`;
  const title = `${post.title} | OmniWTMS Blog`;

  return {
    title,
    description: post.excerpt,
    keywords: post.keywords.join(", "),
    authors: [{ name: post.author }],
    openGraph: {
      title,
      description: post.excerpt,
      url,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      siteName: "OmniWTMS",
      locale: "en_GB",
      images: [
        {
          url: "https://omniwtms.com/og-image.png",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: post.excerpt,
      images: ["https://omniwtms.com/og-image.png"],
      site: "@omniwtms",
    },
    alternates: {
      canonical: url,
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  const url = `https://omniwtms.com/blog/${post.slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "datePublished": post.date,
    "dateModified": post.date,
    "url": url,
    "image": {
      "@type": "ImageObject",
      "url": "https://omniwtms.com/og-image.png",
      "width": 1200,
      "height": 630
    },
    "author": {
      "@type": "Person",
      "name": post.author,
      "jobTitle": post.authorTitle,
      "worksFor": {
        "@type": "Organization",
        "name": "OmniWTMS",
        "url": "https://omniwtms.com"
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "OmniWTMS",
      "url": "https://omniwtms.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://omniwtms.com/images/omniwtmslogo.png",
        "width": 200,
        "height": 60
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    "keywords": post.keywords.join(", "),
    "articleSection": post.category,
    "inLanguage": "en-GB",
    "about": {
      "@type": "Thing",
      "name": "Logistics & Warehouse Management"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://omniwtms.com" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://omniwtms.com/blog" },
      { "@type": "ListItem", "position": 3, "name": post.title, "item": url }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Header />
      <Breadcrumbs />

      <article className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link
            href="/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 font-semibold"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>

          <header className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 via-purple-100 to-indigo-100 border border-blue-200/60 shadow-sm text-xs font-semibold text-blue-700 tracking-wide uppercase">
                {post.category}
              </span>
              <div className="flex items-center text-gray-500 text-sm">
                <Clock className="h-4 w-4 mr-1" />
                {post.readTime}
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-700 text-transparent bg-clip-text">
              {post.title}
            </h1>

            <div className="flex items-center gap-6 text-gray-600">
              <div className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                <span>
                  {post.author}
                  {post.authorTitle && (
                    <span className="text-gray-500 text-sm ml-1">— {post.authorTitle}</span>
                  )}
                </span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
              </div>
            </div>
          </header>

          <div
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-strong:text-gray-900 prose-ul:text-gray-700"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Related Posts */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/blog/warehouse-automation-2025" className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors">
                <span className="text-sm text-blue-600 font-semibold">Technology</span>
                <p className="font-semibold text-gray-900 mt-1">The Future of Warehouse Automation in 2025</p>
              </Link>
              <Link href="/blog/reduce-delivery-costs" className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors">
                <span className="text-sm text-blue-600 font-semibold">Operations</span>
                <p className="font-semibold text-gray-900 mt-1">10 Proven Ways to Reduce Last-Mile Delivery Costs</p>
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 bg-gradient-to-br from-blue-50 via-white to-indigo-50 rounded-2xl border border-blue-200">
            <h3 className="text-2xl font-black mb-4 bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-700 text-transparent bg-clip-text">
              Ready to Implement These Strategies?
            </h3>
            <p className="text-gray-700 mb-6">
              OmniWTMS provides all the tools you need to optimize your logistics operations. Join 250+ UK companies already transforming their operations.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white font-bold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Book a Free Demo
              </Button>
              <Link href="/pricing">
                <Button variant="outline" size="lg" className="px-8 py-3 rounded-xl border-2 border-blue-500 text-blue-700 hover:bg-blue-50 transition-all">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
