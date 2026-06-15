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
      "name": "OmniWTMS Growth",
      "price": "349",
      "priceCurrency": "GBP",
      "priceValidUntil": "2026-12-31",
      "availability": "https://schema.org/InStock",
      "url": "https://omniwtms.com/pricing",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "349",
        "priceCurrency": "GBP",
        "unitText": "MONTH",
        "billingDuration": 1,
        "billingIncrement": 1
      },
      "description": "Full WMS & TMS for small UK warehouses and courier firms. Up to 1,000 deliveries/month, 5 users, 1 warehouse, 50GB storage. One-time £199 setup fee."
    },
    {
      "@type": "Offer",
      "name": "OmniWTMS Pro",
      "price": "699",
      "priceCurrency": "GBP",
      "priceValidUntil": "2026-12-31",
      "availability": "https://schema.org/InStock",
      "url": "https://omniwtms.com/pricing",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "699",
        "priceCurrency": "GBP",
        "unitText": "MONTH"
      },
      "description": "Advanced WMS & TMS for scaling 3PLs and regional distribution firms. Up to 10,000 deliveries/month, 25 users, multi-warehouse, 500GB storage. Priority support. One-time £399 setup fee."
    },
    {
      "@type": "Offer",
      "name": "OmniWTMS Enterprise",
      "price": "1200",
      "priceCurrency": "GBP",
      "availability": "https://schema.org/InStock",
      "url": "https://omniwtms.com/pricing",
      "description": "Enterprise WMS & TMS for large 3PLs and national distributors. £1,200/mo. Unlimited deliveries, users, and warehouses. Dedicated account manager, custom integrations, SLA guarantee."
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
      "acceptedAnswer": { "@type": "Answer", "text": "OmniWTMS starts from £349/month (Growth plan). A one-time setup fee applies based on your business size: £299 for small operations (1 warehouse), £699 for medium (2–3 warehouses), and £2,500 for 3PL/Enterprise. This covers onboarding, data migration, courier integrations, and system configuration. No long-term contracts — cancel anytime with 30 days notice." }
    },
    {
      "@type": "Question",
      "name": "Is there a free trial for OmniWTMS?",
      "acceptedAnswer": { "@type": "Answer", "text": "We offer a free personalised demo where you can see OmniWTMS running with your own data and logistics scenarios. Contact us to arrange your demonstration." }
    },
    {
      "@type": "Question",
      "name": "Are there any setup fees or hidden costs?",
      "acceptedAnswer": { "@type": "Answer", "text": "There is a one-time setup fee: £299 for Starter and £699 for Growth. This covers your dedicated onboarding session, data migration, courier integrations, and full system configuration. There are no other hidden costs — UK support is included in your monthly subscription." }
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
