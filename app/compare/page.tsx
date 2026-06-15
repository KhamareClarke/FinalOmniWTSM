import type { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Check, X, ArrowRight, Star, Zap, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { generateMetadata as genMeta } from "@/lib/seo";

export const metadata: Metadata = genMeta({
  title: "OmniWTMS vs Mintsoft vs Peoplevox vs Cin7 vs Linnworks — WMS Comparison UK 2026",
  description: "Compare OmniWTMS to Mintsoft, Peoplevox, Cin7, and Linnworks. The only UK WMS with AI route optimisation, fleet management, and 48-hour setup — all in one platform.",
  canonical: "https://omniwtms.com/compare",
  keywords: ["WMS comparison UK", "OmniWTMS vs Mintsoft", "OmniWTMS vs Peoplevox", "OmniWTMS vs Cin7", "OmniWTMS vs Linnworks", "best WMS UK 2026"],
});

const competitors = [
  { id: "omniwtms", name: "OmniWTMS", highlight: true },
  { id: "mintsoft",   name: "Mintsoft",   highlight: false },
  { id: "peoplevox",  name: "Peoplevox",  highlight: false },
  { id: "cin7",       name: "Cin7",       highlight: false },
  { id: "linnworks",  name: "Linnworks",  highlight: false },
];

type FeatureValue = boolean | string;

const featureGroups: { category: string; items: { name: string; omniwtms: FeatureValue; mintsoft: FeatureValue; peoplevox: FeatureValue; cin7: FeatureValue; linnworks: FeatureValue }[] }[] = [
  {
    category: "Warehouse Management",
    items: [
      { name: "Multi-Warehouse Management",      omniwtms: true,  mintsoft: true,  peoplevox: true,  cin7: true,  linnworks: true  },
      { name: "Barcode & QR Scanning",           omniwtms: true,  mintsoft: true,  peoplevox: true,  cin7: true,  linnworks: true  },
      { name: "Bin / Zone / Slot Management",    omniwtms: true,  mintsoft: true,  peoplevox: true,  cin7: false, linnworks: false },
      { name: "Automated Pick Lists",            omniwtms: true,  mintsoft: true,  peoplevox: true,  cin7: true,  linnworks: true  },
      { name: "3PL Multi-Client Support",        omniwtms: true,  mintsoft: true,  peoplevox: true,  cin7: false, linnworks: false },
      { name: "Hazmat / Cold-Chain Tracking",    omniwtms: true,  mintsoft: false, peoplevox: false, cin7: false, linnworks: false },
      { name: "Automated Inventory Reordering",  omniwtms: true,  mintsoft: false, peoplevox: false, cin7: true,  linnworks: true  },
      { name: "Pallet Management",               omniwtms: true,  mintsoft: true,  peoplevox: true,  cin7: false, linnworks: false },
    ],
  },
  {
    category: "Transport & Fleet Management",
    items: [
      { name: "Real-Time GPS Fleet Tracking",    omniwtms: true,  mintsoft: false, peoplevox: false, cin7: false, linnworks: false },
      { name: "AI Route Optimisation",           omniwtms: true,  mintsoft: false, peoplevox: false, cin7: false, linnworks: false },
      { name: "Driver Mobile App (iOS & Android)",omniwtms: true, mintsoft: true,  peoplevox: true,  cin7: false, linnworks: false },
      { name: "Electronic Proof of Delivery",    omniwtms: true,  mintsoft: true,  peoplevox: true,  cin7: false, linnworks: false },
      { name: "Live Customer Delivery ETAs",     omniwtms: true,  mintsoft: true,  peoplevox: false, cin7: false, linnworks: false },
      { name: "Driver Payroll & Time Logs",      omniwtms: true,  mintsoft: false, peoplevox: false, cin7: false, linnworks: false },
      { name: "Offline Driver Mode",             omniwtms: true,  mintsoft: false, peoplevox: false, cin7: false, linnworks: false },
      { name: "Live Fleet Map",                  omniwtms: true,  mintsoft: false, peoplevox: false, cin7: false, linnworks: false },
    ],
  },
  {
    category: "AI & Analytics",
    items: [
      { name: "AI Demand Forecasting",           omniwtms: true,  mintsoft: false, peoplevox: false, cin7: false, linnworks: false },
      { name: "Predictive Stock Alerts",         omniwtms: true,  mintsoft: false, peoplevox: false, cin7: true,  linnworks: false },
      { name: "Custom Reporting & Dashboards",   omniwtms: true,  mintsoft: true,  peoplevox: true,  cin7: true,  linnworks: true  },
      { name: "Real-Time KPI Tracking",          omniwtms: true,  mintsoft: true,  peoplevox: true,  cin7: true,  linnworks: true  },
      { name: "AI Empire OS Recommendations",    omniwtms: true,  mintsoft: false, peoplevox: false, cin7: false, linnworks: false },
      { name: "Automated Email Reports",         omniwtms: true,  mintsoft: true,  peoplevox: false, cin7: true,  linnworks: true  },
    ],
  },
  {
    category: "Integrations & E-commerce",
    items: [
      { name: "Shopify Integration",             omniwtms: true,  mintsoft: true,  peoplevox: true,  cin7: true,  linnworks: true  },
      { name: "Amazon / eBay Integration",       omniwtms: true,  mintsoft: true,  peoplevox: true,  cin7: true,  linnworks: true  },
      { name: "Royal Mail / DPD / DHL / Evri",   omniwtms: true,  mintsoft: true,  peoplevox: true,  cin7: false, linnworks: true  },
      { name: "Open REST API",                   omniwtms: true,  mintsoft: true,  peoplevox: true,  cin7: true,  linnworks: true  },
      { name: "WooCommerce / Magento",           omniwtms: true,  mintsoft: true,  peoplevox: true,  cin7: true,  linnworks: true  },
      { name: "Xero / QuickBooks Billing",       omniwtms: true,  mintsoft: true,  peoplevox: false, cin7: true,  linnworks: false },
    ],
  },
  {
    category: "Support & Implementation",
    items: [
      { name: "24/7 UK-Based Support",           omniwtms: true,  mintsoft: false, peoplevox: false, cin7: false, linnworks: false },
      { name: "48-Hour Go-Live",                 omniwtms: true,  mintsoft: false, peoplevox: false, cin7: false, linnworks: false },
      { name: "Free Data Migration",             omniwtms: true,  mintsoft: false, peoplevox: false, cin7: false, linnworks: false },
      { name: "Dedicated Account Manager",       omniwtms: true,  mintsoft: false, peoplevox: true,  cin7: false, linnworks: false },
      { name: "Video Training Library",          omniwtms: true,  mintsoft: true,  peoplevox: true,  cin7: true,  linnworks: true  },
      { name: "No Setup Fee",                    omniwtms: true,  mintsoft: false, peoplevox: false, cin7: false, linnworks: false },
      { name: "No Minimum Contract",             omniwtms: true,  mintsoft: false, peoplevox: false, cin7: false, linnworks: false },
      { name: "ISO 27001 / GDPR Certified",      omniwtms: true,  mintsoft: true,  peoplevox: true,  cin7: true,  linnworks: true  },
    ],
  },
];

const pricingCards = [
  {
    name: "OmniWTMS",
    price: "£599",
    contract: "No contract",
    setup: "£0 setup fee",
    support: "24/7 UK support",
    highlight: true,
    badge: "BEST VALUE",
  },
  {
    name: "Mintsoft",
    price: "£799+",
    contract: "12-month minimum",
    setup: "Setup fee applies",
    support: "Business hours only",
    highlight: false,
  },
  {
    name: "Peoplevox",
    price: "£1,200+",
    contract: "Annual contract",
    setup: "£3,000+ setup",
    support: "Ticketed support",
    highlight: false,
  },
  {
    name: "Cin7",
    price: "£699+",
    contract: "Annual contract",
    setup: "Onboarding fee",
    support: "Email / chat only",
    highlight: false,
  },
  {
    name: "Linnworks",
    price: "£449+",
    contract: "Annual contract",
    setup: "Setup fee applies",
    support: "Limited WMS support",
    highlight: false,
  },
];

const vsCards = [
  {
    competitor: "Mintsoft",
    summary: "Mintsoft is a strong 3PL WMS but has no TMS, no GPS fleet tracking, and no AI route optimisation. OmniWTMS replaces Mintsoft plus your separate routing and fleet tools — at a lower combined cost.",
    omniWins: ["AI route optimisation included", "Live GPS fleet tracking", "Driver app with offline mode", "Hazmat & cold-chain support", "48-hour go-live vs 4–8 weeks"],
  },
  {
    competitor: "Peoplevox",
    summary: "Peoplevox (Descartes) is an enterprise e-commerce WMS with strong pick-and-pack features but requires significant implementation time, hefty setup costs, and has no transport or fleet management built in.",
    omniWins: ["No £3,000+ setup fee", "No 12-month lock-in", "Built-in TMS & fleet management", "48-hour setup vs 6–12 weeks", "24/7 UK support vs ticketed system"],
  },
  {
    competitor: "Cin7",
    summary: "Cin7 is inventory and order management software — not a true WMS. It lacks bin-level warehouse control, driver apps, ePOD, and any transport management. OmniWTMS gives you all of this out of the box.",
    omniWins: ["True bin/zone/slot WMS", "ePOD & driver mobile app", "Full fleet & route management", "3PL multi-client support", "Hazmat & pallet management"],
  },
  {
    competitor: "Linnworks",
    summary: "Linnworks is a multi-channel e-commerce platform with basic order routing. It lacks warehouse slot management, driver apps, fleet tracking, and route optimisation — the core of any serious logistics operation.",
    omniWins: ["Real warehouse management (bins, zones, pallets)", "GPS fleet tracking & live map", "AI route optimisation", "Electronic proof of delivery", "Driver payroll & time logs"],
  },
];

export default function ComparePage() {
  const allItems = featureGroups.flatMap((g) => g.items);
  const scores = {
    omniwtms:  allItems.filter((f) => f.omniwtms  === true).length,
    mintsoft:  allItems.filter((f) => f.mintsoft   === true).length,
    peoplevox: allItems.filter((f) => f.peoplevox  === true).length,
    cin7:      allItems.filter((f) => f.cin7       === true).length,
    linnworks: allItems.filter((f) => f.linnworks  === true).length,
  };
  const total = allItems.length;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",    item: "https://omniwtms.com" },
      { "@type": "ListItem", position: 2, name: "Compare", item: "https://omniwtms.com/compare" },
    ],
  };

  const faqItems = [
    { q: "How does OmniWTMS pricing compare to Mintsoft?", a: "OmniWTMS starts at £599/month with no setup fee and no minimum contract. Mintsoft typically starts at £799+/month with a 12-month commitment and additional setup costs. OmniWTMS also includes transport management and AI routing that Mintsoft does not offer." },
    { q: "Does OmniWTMS replace both a WMS and a TMS?", a: "Yes. OmniWTMS is an all-in-one platform covering warehouse management, transport management, fleet tracking, route optimisation, and driver management — replacing tools like Mintsoft (WMS) and Paragon or Route4Me (TMS/routing) with a single subscription." },
    { q: "How quickly can OmniWTMS be set up compared to Peoplevox?", a: "OmniWTMS goes live in 48 hours with free data migration included. Peoplevox (Descartes) typically takes 6–12 weeks to implement and charges £3,000+ in setup fees." },
    { q: "Is Cin7 a real WMS?", a: "Cin7 is primarily an inventory and order management platform. It lacks bin-level warehouse management, driver apps, ePOD, fleet tracking, and transport management — all of which are included in OmniWTMS." },
    { q: "Why choose OmniWTMS over Linnworks?", a: "Linnworks is built for multi-channel e-commerce selling, not warehouse operations. It has no GPS fleet tracking, no driver app, no route optimisation, and no bin/slot-level WMS. OmniWTMS offers all of these as standard features." },
  ];

  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Header />
      <Breadcrumbs />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 via-purple-100 to-indigo-100 border border-blue-200/60 shadow-sm mb-6">
              <Zap className="h-3.5 w-3.5 text-blue-600" />
              <span className="text-xs font-semibold text-blue-700 tracking-wide uppercase">WMS Comparison 2026</span>
            </span>
            <h1 className="text-5xl md:text-6xl font-black mb-5 bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-700 text-transparent bg-clip-text">
              OmniWTMS vs Every Major Competitor
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              How OmniWTMS stacks up against Mintsoft, Peoplevox, Cin7, and Linnworks — feature by feature, pound for pound.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {Object.entries(scores).map(([key, score]) => (
                <div key={key} className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold border ${key === "omniwtms" ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-transparent shadow-lg" : "bg-white text-gray-700 border-gray-200"}`}>
                  <span className="capitalize">{competitors.find((c) => c.id === key)?.name}</span>
                  <span className={`${key === "omniwtms" ? "bg-white/20" : "bg-gray-100"} px-1.5 py-0.5 rounded-md text-xs`}>{score}/{total}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl font-black mb-10 text-center bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-700 text-transparent bg-clip-text">
            Pricing Comparison
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {pricingCards.map((c) => (
              <div key={c.name} className={`rounded-2xl p-6 border-2 relative flex flex-col gap-3 ${c.highlight ? "bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 border-transparent text-white shadow-xl shadow-blue-500/25" : "bg-white border-gray-200 text-gray-900"}`}>
                {c.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-gray-900 text-xs font-black px-3 py-1 rounded-full shadow">
                    {c.badge}
                  </span>
                )}
                <h3 className={`text-lg font-black ${c.highlight ? "text-white" : "text-gray-900"}`}>{c.name}</h3>
                <div>
                  <span className={`text-3xl font-black ${c.highlight ? "text-white" : "text-gray-900"}`}>{c.price}</span>
                  <span className={`text-sm ml-1 ${c.highlight ? "text-blue-100" : "text-gray-500"}`}>/mo</span>
                </div>
                <ul className="space-y-1.5 text-sm flex-1">
                  {[c.contract, c.setup, c.support].map((detail, i) => (
                    <li key={i} className={`flex items-center gap-2 ${c.highlight ? "text-blue-100" : "text-gray-600"}`}>
                      {c.highlight ? <Check className="h-3.5 w-3.5 text-green-300 shrink-0" /> : <X className="h-3.5 w-3.5 text-red-400 shrink-0" />}
                      {detail}
                    </li>
                  ))}
                </ul>
                {c.highlight && (
                  <Link href="/pricing" className="mt-2">
                    <Button className="w-full bg-white text-blue-600 hover:bg-blue-50 font-bold rounded-xl text-sm">
                      Get Started
                    </Button>
                  </Link>
                )}
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-4">Competitor pricing based on publicly available information as of 2026. Actual prices may vary.</p>
        </div>
      </section>

      {/* Full Feature Comparison Table */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50/40">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl font-black mb-10 text-center bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-700 text-transparent bg-clip-text">
            Full Feature Comparison
          </h2>
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full" role="table" aria-label="WMS feature comparison">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="px-5 py-4 text-left text-sm font-bold text-gray-600 w-[30%]" scope="col">Feature</th>
                    {competitors.map((c) => (
                      <th key={c.id} scope="col" className={`px-3 py-4 text-center text-sm font-black ${c.highlight ? "text-blue-600 bg-blue-50/60" : "text-gray-500"}`}>
                        {c.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {featureGroups.map((group, gi) => (
                    <>
                      <tr key={`g-${gi}`} className="bg-gradient-to-r from-blue-600/5 to-indigo-600/5">
                        <td colSpan={6} className="px-5 py-3 text-sm font-black text-blue-800 uppercase tracking-wide">
                          {group.category}
                        </td>
                      </tr>
                      {group.items.map((f, fi) => (
                        <tr key={`f-${gi}-${fi}`} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                          <td className="px-5 py-3.5 text-sm text-gray-700 font-medium">{f.name}</td>
                          {competitors.map((c) => {
                            const val = f[c.id as keyof typeof f];
                            return (
                              <td key={c.id} className={`px-3 py-3.5 text-center ${c.highlight ? "bg-blue-50/40" : ""}`}>
                                {val === true ? (
                                  <Check className="h-5 w-5 text-green-600 mx-auto" aria-label="Included" />
                                ) : val === false ? (
                                  <X className="h-5 w-5 text-red-400 mx-auto" aria-label="Not included" />
                                ) : (
                                  <span className="text-xs text-gray-500">{val}</span>
                                )}
                              </td>
                            );
                          })}
                        </tr>
                      ))}
                    </>
                  ))}
                  {/* Score row */}
                  <tr className="bg-gradient-to-r from-gray-50 to-blue-50/30 border-t-2 border-gray-200">
                    <td className="px-5 py-4 text-sm font-black text-gray-900">Total Score</td>
                    {(["omniwtms", "mintsoft", "peoplevox", "cin7", "linnworks"] as const).map((key) => (
                      <td key={key} className={`px-3 py-4 text-center ${key === "omniwtms" ? "bg-blue-50/60" : ""}`}>
                        <span className={`inline-flex items-center justify-center text-sm font-black px-3 py-1 rounded-full ${key === "omniwtms" ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow" : "bg-gray-100 text-gray-700"}`}>
                          {scores[key]}/{total}
                        </span>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Individual vs cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl font-black mb-10 text-center bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-700 text-transparent bg-clip-text">
            OmniWTMS Head-to-Head
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {vsCards.map((card) => (
              <div key={card.competitor} className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-black text-gray-900">
                    OmniWTMS <span className="text-gray-400 font-bold">vs</span>{" "}
                    <span className="bg-gradient-to-r from-blue-700 to-indigo-700 text-transparent bg-clip-text">{card.competitor}</span>
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-5 leading-relaxed">{card.summary}</p>
                  <ul className="space-y-2">
                    {card.omniWins.map((win, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <div className="mt-0.5 h-4 w-4 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shrink-0">
                          <Check className="h-2.5 w-2.5 text-white" />
                        </div>
                        <span className="text-sm text-gray-700 font-medium">{win}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why OmniWTMS */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl font-black mb-10 text-center bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-700 text-transparent bg-clip-text">
            Why 250+ UK Firms Chose OmniWTMS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Zap,    title: "The Only All-in-One",      description: "WMS + TMS + Fleet + AI Route Optimisation in one platform. No stitching together Mintsoft, Paragon, and a driver app — everything is here." },
              { icon: Clock,  title: "48 Hours, Not 8 Weeks",    description: "While competitors take 6–12 weeks and charge £3,000+ in setup fees, OmniWTMS is live in 48 hours with free data migration and onboarding." },
              { icon: Shield, title: "No Lock-In, No Surprises", description: "Monthly rolling contract, £0 setup fee, and transparent pricing from £599/month. Cancel anytime — we earn your business every month." },
            ].map(({ icon: Icon, title, description }, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mb-5 shadow-lg shadow-blue-500/20">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-black mb-8 text-center bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-700 text-transparent bg-clip-text">
            Comparison FAQs
          </h2>
          <div className="space-y-4">
            {faqItems.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:border-blue-200 transition-colors">
                <h3 className="text-base font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl font-black text-white mb-5">
            See Why We Win the Comparison Every Time
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Book a free 30-minute demo. We'll show you OmniWTMS running with your own data — no scripts, no pressure.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/book-a-demo">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-bold px-10 py-4 text-lg rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                Book Free Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/pricing">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 font-bold px-8 py-4 text-lg rounded-xl">
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
