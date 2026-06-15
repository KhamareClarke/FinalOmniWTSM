import { PageLayout } from "@/components/layout/page-layout";
import HeroSection from "@/components/home/HeroSection";
import DashboardPreviewSection from "@/components/home/DashboardPreviewSection";
import DemoSection from "@/components/home/DemoSection";
import SolutionsSection from "@/components/home/SolutionsSection";
import CaseStudiesSection from "@/components/home/CaseStudiesSection";
import PricingSectionHome from "@/components/home/PricingSectionHome";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import FAQSection from "@/components/home/FAQSection";
import CookieConsent from "@/components/CookieConsent";

const faqItems = [
  { q: "Is there a setup fee or long-term contract?", a: "No setup fees, no long-term contracts. Start from £599/month and cancel anytime with 30 days notice." },
  { q: "What support is included?", a: "All plans include unlimited UK-based support by phone, email, and live chat, 24 hours a day, 7 days a week." },
  { q: "Can I migrate from another WMS?", a: "Yes, we provide free data migration and onboarding assistance from your current WMS or spreadsheet-based system. Most migrations complete within the 48-hour setup window." },
  { q: "Are all features included in every plan?", a: "Yes, every plan includes all core WMS and TMS features. Optional add-ons (such as additional warehouses or API integrations) are available at transparent pricing." },
  { q: "Is OmniWTMS secure and GDPR compliant?", a: "Yes, we are fully GDPR compliant, ISO 27001 certified, and store all UK customer data on UK-based servers with AES-256 encryption." },
  { q: "How long does implementation take?", a: "Most customers go live within 48 hours. This includes data migration, carrier integrations, barcode system setup, and staff training." },
  { q: "Does OmniWTMS work on mobile devices?", a: "Yes, OmniWTMS includes native iOS and Android apps for drivers and warehouse staff, with offline mode for areas with poor connectivity." },
  { q: "Can OmniWTMS manage multiple warehouses?", a: "Yes, OmniWTMS supports unlimited warehouse locations. You can manage inventory, orders, and reporting across all sites from a single platform." },
  { q: "Does OmniWTMS integrate with e-commerce platforms?", a: "Yes, OmniWTMS integrates natively with Shopify, WooCommerce, Amazon, eBay, and all major UK e-commerce platforms. Orders sync automatically." },
  { q: "What courier integrations does OmniWTMS support?", a: "OmniWTMS integrates with Royal Mail, DPD, DHL, UPS, Evri, Yodel, and all major UK carriers. Custom carrier integrations are available on Enterprise plans." },
  { q: "Does OmniWTMS provide proof of delivery?", a: "Yes, OmniWTMS's electronic proof of delivery (ePOD) captures GPS-tagged, timestamped photos and customer signatures via the driver mobile app." },
  { q: "Can I track vehicles and drivers in real-time?", a: "Yes, OmniWTMS provides live GPS tracking for all vehicles with ETA updates sent automatically to customers. You can see your entire fleet on a live map." },
  { q: "Does OmniWTMS have AI route optimization?", a: "Yes, AI-powered route optimization is included in all plans. It considers live traffic, delivery windows, vehicle capacity, and driver hours to minimize fuel costs and delivery times." },
  { q: "Is training included?", a: "Yes, all plans include onboarding training for your team. We also provide a video training library, help documentation, and a dedicated account manager on Enterprise plans." },
  { q: "Can OmniWTMS handle 3PL multi-client operations?", a: "Yes, OmniWTMS is purpose-built for 3PL providers. It supports multi-client inventory segregation, white-label client portals, and automated billing per client." },
  { q: "What analytics and reporting does OmniWTMS provide?", a: "OmniWTMS includes real-time dashboards, KPI tracking, custom reports, and automated email reports. Track delivery performance, inventory accuracy, driver efficiency, and cost per delivery." },
  { q: "Does OmniWTMS work for same-day delivery operations?", a: "Yes, OmniWTMS supports same-day and time-slot delivery workflows with dynamic route updates as new orders arrive throughout the day." },
  { q: "How does OmniWTMS reduce picking errors?", a: "Barcode scanning at every pick point, zone-based picking workflows, and automated pick list generation combine to achieve 99.9% pick accuracy in customer deployments." },
  { q: "Is there a free trial?", a: "We offer a free demo where you can see OmniWTMS running with your own data. Contact us to arrange a personalised demonstration with your logistics scenarios." },
  { q: "What happens if I need help outside business hours?", a: "OmniWTMS provides 24/7 support via phone, email, and live chat. Our UK-based team is available around the clock, including weekends and bank holidays." },
];

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map((item) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a,
      },
    })),
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "OmniWTMS",
    "legalName": "OmniWTMS Ltd",
    "url": "https://omniwtms.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://omniwtms.com/images/omniwtmslogo.png",
      "width": 200,
      "height": 60
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "email": "info@omniwtms.com",
        "contactType": "customer support",
        "areaServed": "GB",
        "availableLanguage": ["English"],
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "00:00",
          "closes": "23:59"
        }
      },
      {
        "@type": "ContactPoint",
        "email": "sales@omniwtms.com",
        "contactType": "sales",
        "areaServed": "GB",
        "availableLanguage": ["English"]
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "GB",
      "addressRegion": "England"
    },
    "sameAs": [
      "https://www.linkedin.com/company/omniwtms",
      "https://twitter.com/omniwtms"
    ],
    "description": "OmniWTMS is the UK's all-in-one AI-powered warehouse and transport management platform for logistics, 3PL, and courier firms. 250+ UK companies. 48-hour setup.",
    "areaServed": {
      "@type": "Country",
      "name": "United Kingdom"
    }
  };

  return (
    <PageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <section id="home" aria-label="Hero">
        <HeroSection />
      </section>
      <DashboardPreviewSection />
      <SolutionsSection />
      <HowItWorksSection />
      <CaseStudiesSection />
      <PricingSectionHome />
      <FAQSection />
      <DemoSection />
      <CookieConsent />
    </PageLayout>
  );
}
