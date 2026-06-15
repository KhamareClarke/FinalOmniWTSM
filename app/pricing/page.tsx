// @ts-nocheck
import { Suspense } from "react";
import { Metadata } from 'next'
import { PricingContent } from "@/components/pricing/pricing-content";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { generateMetadata, pageConfigs } from "@/lib/seo";

export const metadata: Metadata = generateMetadata({
  ...pageConfigs.pricing,
  canonical: "https://omniwtms.com/pricing",
});

const pricingSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "OmniWTMS Warehouse & Transport Management System",
  "description": "AI-powered Warehouse & Transport Management System for UK logistics firms. Includes real-time tracking, AI route optimisation, inventory management, ePOD, and 48-hour setup.",
  "brand": { "@type": "Brand", "name": "OmniWTMS" },
  "url": "https://omniwtms.com/pricing",
  "image": "https://omniwtms.com/og-image.png",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "250",
    "bestRating": "5",
    "worstRating": "1"
  },
  "offers": [
    {
      "@type": "Offer",
      "name": "OmniWTMS Starter",
      "price": "599",
      "priceCurrency": "GBP",
      "priceValidUntil": "2026-12-31",
      "availability": "https://schema.org/InStock",
      "url": "https://omniwtms.com/pricing",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "599",
        "priceCurrency": "GBP",
        "unitText": "MONTH",
        "billingDuration": 1,
        "billingIncrement": 1
      },
      "description": "Full WMS & TMS for growing logistics businesses. All core features included, UK-based support, 48-hour setup."
    },
    {
      "@type": "Offer",
      "name": "OmniWTMS Growth",
      "price": "999",
      "priceCurrency": "GBP",
      "priceValidUntil": "2026-12-31",
      "availability": "https://schema.org/InStock",
      "url": "https://omniwtms.com/pricing",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "999",
        "priceCurrency": "GBP",
        "unitText": "MONTH"
      },
      "description": "Advanced WMS & TMS with additional warehouses, API integrations, and priority support."
    },
    {
      "@type": "Offer",
      "name": "OmniWTMS Enterprise",
      "price": "0",
      "priceCurrency": "GBP",
      "availability": "https://schema.org/InStock",
      "url": "https://omniwtms.com/pricing",
      "description": "Custom enterprise pricing with dedicated account management, custom integrations, and SLA guarantees."
    }
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://omniwtms.com" },
    { "@type": "ListItem", "position": 2, "name": "Pricing", "item": "https://omniwtms.com/pricing" }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does OmniWTMS cost?",
      "acceptedAnswer": { "@type": "Answer", "text": "OmniWTMS starts from £599/month with no setup fees and no long-term contracts. All core WMS and TMS features are included in every plan. Cancel anytime with 30 days notice." }
    },
    {
      "@type": "Question",
      "name": "Is there a free trial for OmniWTMS?",
      "acceptedAnswer": { "@type": "Answer", "text": "We offer a free personalised demo where you can see OmniWTMS running with your own data and logistics scenarios. Contact us to arrange your demonstration." }
    },
    {
      "@type": "Question",
      "name": "Are there any setup fees or hidden costs?",
      "acceptedAnswer": { "@type": "Answer", "text": "No setup fees, no hidden costs. Data migration, onboarding training, carrier integrations, and UK-based support are all included in your monthly subscription." }
    },
    {
      "@type": "Question",
      "name": "Can I cancel OmniWTMS at any time?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes, you can cancel OmniWTMS at any time with 30 days notice. There are no long-term contracts or cancellation fees." }
    }
  ]
};

export default function PricingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Suspense fallback={<LoadingSpinner />}>
        <PricingContent />
      </Suspense>
    </>
  );
}
