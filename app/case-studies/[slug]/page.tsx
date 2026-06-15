import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { TrendingUp, Package, Truck, ArrowLeft, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getCaseStudy, getAllCaseStudySlugs, caseStudies } from "@/lib/case-studies-data";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cs = getCaseStudy(params.slug);
  if (!cs) return {};

  const url = `https://omniwtms.com/case-studies/${cs.slug}`;
  const title = `${cs.company} Case Study — ${cs.results[0].metric} ${cs.results[0].label} | OmniWTMS`;

  return {
    title,
    description: cs.description,
    keywords: cs.keywords.join(", "),
    openGraph: {
      title,
      description: cs.description,
      url,
      type: "article",
      siteName: "OmniWTMS",
      locale: "en_GB",
      images: [
        {
          url: "https://omniwtms.com/og-image.png",
          width: 1200,
          height: 630,
          alt: `${cs.company} — OmniWTMS Case Study`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: cs.description,
      images: ["https://omniwtms.com/og-image.png"],
      site: "@omniwtms",
    },
    alternates: {
      canonical: url,
    },
  };
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "manchester-logistics": Truck,
  "london-couriers": Package,
  "birmingham-warehouse": TrendingUp,
};

export default function CaseStudyPage({ params }: Props) {
  const cs = getCaseStudy(params.slug);

  if (!cs) {
    notFound();
  }

  const url = `https://omniwtms.com/case-studies/${cs.slug}`;
  const IconComponent = iconMap[cs.slug] || TrendingUp;

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "SoftwareApplication",
      "name": "OmniWTMS",
      "url": "https://omniwtms.com",
      "applicationCategory": "BusinessApplication"
    },
    "author": {
      "@type": "Person",
      "name": cs.author,
      "jobTitle": cs.authorTitle
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "reviewBody": cs.testimonial,
    "url": url,
    "datePublished": "2024-11-01",
    "publisher": {
      "@type": "Organization",
      "name": "OmniWTMS"
    }
  };

  const caseStudySchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": `${cs.company} Case Study: ${cs.results[0].metric} ${cs.results[0].label} with OmniWTMS`,
    "description": cs.description,
    "url": url,
    "datePublished": "2024-11-01",
    "author": {
      "@type": "Organization",
      "name": "OmniWTMS",
      "url": "https://omniwtms.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "OmniWTMS",
      "logo": {
        "@type": "ImageObject",
        "url": "https://omniwtms.com/images/omniwtmslogo.png"
      }
    },
    "about": {
      "@type": "Organization",
      "name": cs.company,
      "location": cs.location
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://omniwtms.com" },
      { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": "https://omniwtms.com/case-studies" },
      { "@type": "ListItem", "position": 3, "name": cs.company, "item": url }
    ]
  };

  const otherStudies = caseStudies.filter((s) => s.slug !== cs.slug);

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Header />
      <Breadcrumbs />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-5xl">
          <Link
            href="/case-studies"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 font-semibold"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            All Case Studies
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 via-purple-100 to-indigo-100 border border-blue-200/60 shadow-sm text-xs font-semibold text-blue-700 tracking-wide uppercase">
              {cs.industry}
            </span>
            <span className="text-gray-500 text-sm">{cs.location}</span>
            <span className="text-gray-500 text-sm">·</span>
            <span className="text-gray-500 text-sm">{cs.size}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-700 text-transparent bg-clip-text">
            How {cs.company} Achieved {cs.results[0].metric} {cs.results[0].label} with OmniWTMS
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl">{cs.description}</p>
        </div>
      </section>

      {/* Results banner */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {cs.results.map((result, i) => (
              <div key={i}>
                <div className="text-4xl font-bold text-white mb-1">{result.metric}</div>
                <div className="text-blue-100 text-sm">{result.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left: company info */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 flex flex-col items-center text-center sticky top-8">
                <IconComponent className="h-16 w-16 text-blue-600 opacity-40 mb-4" />
                <h2 className="text-xl font-bold text-gray-900 mb-1">{cs.company}</h2>
                <p className="text-gray-600 text-sm mb-1">{cs.industry}</p>
                <p className="text-gray-500 text-sm mb-1">{cs.location}</p>
                <p className="text-gray-500 text-sm">{cs.size}</p>
              </div>
            </div>

            {/* Right: challenge / solution / testimonial */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-sm font-bold text-red-600 uppercase tracking-wide mb-3">The Challenge</h2>
                <p className="text-gray-700 text-lg leading-relaxed">{cs.challenge}</p>
              </div>

              <div>
                <h2 className="text-sm font-bold text-blue-600 uppercase tracking-wide mb-3">The Solution</h2>
                <p className="text-gray-700 text-lg leading-relaxed">{cs.solution}</p>
                <ul className="mt-4 space-y-2">
                  {cs.results.map((result, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700"><strong>{result.metric}</strong> {result.label}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <blockquote className="bg-gray-50 border-l-4 border-blue-600 rounded-lg p-6">
                <p className="text-gray-800 italic text-lg mb-3">"{cs.testimonial}"</p>
                <footer className="text-sm font-semibold text-gray-900">— {cs.author}, {cs.authorTitle}</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Other case studies */}
      {otherStudies.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-2xl font-black mb-8 bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-700 text-transparent bg-clip-text">More Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherStudies.map((study) => (
                <Link
                  key={study.slug}
                  href={`/case-studies/${study.slug}`}
                  className="block bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg border border-gray-200 hover:border-blue-300 transition-all duration-300"
                >
                  <p className="text-sm text-blue-600 font-semibold mb-1">{study.industry}</p>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{study.company}</h3>
                  <p className="text-gray-600 text-sm mb-3">{study.description}</p>
                  <div className="flex items-center gap-4">
                    {study.results.slice(0, 2).map((r, i) => (
                      <div key={i} className="text-center">
                        <div className="text-xl font-bold text-blue-600">{r.metric}</div>
                        <div className="text-xs text-gray-500">{r.label}</div>
                      </div>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl font-black text-white mb-5">
            Ready to Write Your Own Success Story?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join 250+ UK logistics companies transforming their operations with OmniWTMS.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-bold px-10 py-6 text-lg rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
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
