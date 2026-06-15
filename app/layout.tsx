import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import LiveChatWidget from "@/components/LiveChatWidget";
import { Toaster } from "sonner";
import { generateMetadata, siteConfig } from "@/lib/seo";

export const metadata: Metadata = generateMetadata({
  title: "OmniWTMS - AI-Powered UK Warehouse & Transport Management System | 48-Hour Setup",
  description: "UK's #1 Warehouse & Transport Management System. 250+ logistics firms trust OmniWTMS. 38% faster deliveries, 99.8% accuracy, zero delays. Live in 48 hours. Book free demo today!",
  canonical: siteConfig.url,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB">
      <head>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-R6MQ2XYE9Z"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-R6MQ2XYE9Z', {
              send_page_view: true,
              custom_map: {}
            });
            function trackConversion(eventName, params) {
              gtag('event', eventName, params);
            }
            window.trackDemoBooking = function(source) {
              trackConversion('demo_booking_click', { event_category: 'conversion', event_label: source || 'unknown', value: 1 });
            };
            window.trackPricingView = function() {
              trackConversion('pricing_view', { event_category: 'engagement', event_label: 'pricing_page' });
            };
            window.trackTrialStart = function(plan) {
              trackConversion('trial_start', { event_category: 'conversion', event_label: plan || 'unknown', value: 1 });
            };
          `}
        </Script>

        {/* Favicon */}
        <link rel="icon" href="/images/omniwtmslogo.png" type="image/png" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/omniwtmslogo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/omniwtmslogo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/omniwtmslogo.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="sElVXokhy9IvhKHxzPoQk8EeErMF5Q3XTLK4XwXIJik" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="keywords" content="warehouse management system UK, transport management system, WMS, TMS, logistics software, 3PL software, courier software, delivery management, UK logistics, warehouse software" />
        <meta name="author" content="OmniWTMS Ltd" />
        <meta name="language" content="English" />
        <meta name="geo.region" content="GB" />
        <meta name="geo.placename" content="United Kingdom" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://omniwtms.com/" />
        <meta property="og:title" content="OmniWTMS - AI-Powered UK Warehouse & Transport Management" />
        <meta property="og:description" content="UK's fastest, most advanced WMS & TMS. 250+ logistics firms trust us. 38% faster deliveries, zero delays, full automation." />
        <meta property="og:image" content="https://omniwtms.com/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="OmniWTMS - AI-Powered Warehouse & Transport Management System" />
        <meta property="og:site_name" content="OmniWTMS" />
        <meta property="og:locale" content="en_GB" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://omniwtms.com/" />
        <meta name="twitter:title" content="OmniWTMS - AI-Powered UK Warehouse & Transport Management" />
        <meta name="twitter:description" content="UK's fastest, most advanced WMS & TMS. 250+ logistics firms trust us. 38% faster deliveries, zero delays, full automation." />
        <meta name="twitter:image" content="https://omniwtms.com/og-image.png" />
        <meta name="twitter:image:alt" content="OmniWTMS Dashboard Preview" />
        <meta name="twitter:site" content="@omniwtms" />
        <meta name="twitter:creator" content="@omniwtms" />

        <link rel="alternate" hrefLang="en-gb" href="https://omniwtms.com" />
        <link rel="alternate" hrefLang="x-default" href="https://omniwtms.com" />

        {/* WebSite Schema — enables Google Sitelinks Search Box */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "OmniWTMS",
              "url": "https://omniwtms.com",
              "description": "AI-powered Warehouse & Transport Management System for UK logistics firms",
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://omniwtms.com/help?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
              "foundingDate": "2022",
              "numberOfEmployees": {
                "@type": "QuantitativeValue",
                "value": "50"
              },
              "areaServed": {
                "@type": "Country",
                "name": "United Kingdom"
              }
            })
          }}
        />

        {/* SoftwareApplication Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "OmniWTMS",
              "applicationCategory": "BusinessApplication",
              "applicationSubCategory": "Warehouse Management System",
              "operatingSystem": "Web Browser, iOS, Android",
              "description": "AI-powered Warehouse & Transport Management System for UK logistics firms. Real-time tracking, route optimization, inventory management, and electronic proof of delivery.",
              "url": "https://omniwtms.com",
              "author": {
                "@type": "Organization",
                "name": "OmniWTMS Ltd",
                "url": "https://omniwtms.com"
              },
              "offers": {
                "@type": "Offer",
                "price": "599",
                "priceCurrency": "GBP",
                "priceValidUntil": "2026-12-31",
                "availability": "https://schema.org/InStock",
                "url": "https://omniwtms.com/pricing"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "ratingCount": "250",
                "bestRating": "5",
                "worstRating": "1"
              },
              "featureList": [
                "Real-time GPS tracking",
                "AI route optimization",
                "Inventory management",
                "Electronic proof of delivery",
                "Multi-warehouse management",
                "Driver mobile app",
                "Customer tracking portal",
                "Automated reporting"
              ]
            })
          }}
        />

        {/* Product Schema with Reviews */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "OmniWTMS Warehouse & Transport Management System",
              "description": "AI-powered Warehouse & Transport Management System for UK logistics firms",
              "brand": {
                "@type": "Brand",
                "name": "OmniWTMS"
              },
              "url": "https://omniwtms.com",
              "image": "https://omniwtms.com/og-image.png",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "250",
                "bestRating": "5",
                "worstRating": "1"
              },
              "review": [
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "Sarah Mitchell",
                    "jobTitle": "Operations Director"
                  },
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "reviewBody": "OmniWTMS transformed our entire operation. We went from chaos to complete control in just 48 hours. Our delivery times improved by 40% and customer complaints dropped to almost zero.",
                  "datePublished": "2024-11-01"
                },
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "James Thompson",
                    "jobTitle": "CEO"
                  },
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "reviewBody": "The AI routing alone saved us over £15,000 per month in fuel costs. The mobile app made our drivers' lives so much easier.",
                  "datePublished": "2024-10-15"
                },
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "Lisa Rodriguez",
                    "jobTitle": "Warehouse Manager"
                  },
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "reviewBody": "We eliminated virtually all picking errors and cut our order processing time in half. The ROI was evident within the first month.",
                  "datePublished": "2024-09-20"
                }
              ]
            })
          }}
        />

        {/* Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "OmniWTMS Warehouse & Transport Management",
              "provider": {
                "@type": "Organization",
                "name": "OmniWTMS Ltd",
                "url": "https://omniwtms.com"
              },
              "serviceType": "Warehouse Management System",
              "description": "AI-powered WMS and TMS platform for UK logistics firms. Includes real-time tracking, route optimization, inventory management, and 48-hour implementation.",
              "areaServed": {
                "@type": "Country",
                "name": "United Kingdom"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "OmniWTMS Plans",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "OmniWTMS Starter"
                    },
                    "price": "599",
                    "priceCurrency": "GBP",
                    "priceSpecification": {
                      "@type": "UnitPriceSpecification",
                      "price": "599",
                      "priceCurrency": "GBP",
                      "unitText": "MONTH"
                    }
                  }
                ]
              }
            })
          }}
        />

        {/* BreadcrumbList Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://omniwtms.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Solutions",
                  "item": "https://omniwtms.com/#solutions"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Pricing",
                  "item": "https://omniwtms.com/pricing"
                }
              ]
            })
          }}
        />
      </head>
      <body>
        <div id="app">
          {children}
          <LiveChatWidget />
          <Toaster position="top-right" richColors closeButton />
        </div>
      </body>
    </html>
  );
}
