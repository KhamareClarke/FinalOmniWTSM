import type { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { ArrowRight, Users, Target, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About OmniWTMS — UK Warehouse & Transport Management System",
  description: "OmniWTMS is the UK's leading AI-powered Warehouse & Transport Management System. 250+ logistics firms trust us. Learn about our mission, team, and values.",
  alternates: { canonical: "https://omniwtms.com/about" },
};

const values = [
  { icon: Zap, title: "Speed First", description: "We believe logistics software should be live in 48 hours, not 48 weeks. No lengthy implementations, no consultancy fees." },
  { icon: Target, title: "UK Focused", description: "Built for UK road networks, UK carriers, and UK compliance. Our team is UK-based and available 24/7." },
  { icon: Users, title: "Customer Obsessed", description: "Every feature we build comes directly from customer feedback. Our NPS score is 72 — we earn it every day." },
  { icon: Shield, title: "Secure by Default", description: "ISO 27001 certified, GDPR compliant, and AES-256 encrypted. Your logistics data is as safe as it gets." },
];

const stats = [
  { value: "250+", label: "UK Logistics Firms" },
  { value: "99.8%", label: "Inventory Accuracy" },
  { value: "48hrs", label: "Average Go-Live" },
  { value: "24/7", label: "UK-Based Support" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-24 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 via-purple-100 to-indigo-100 border border-blue-200/60 shadow-sm mb-6">
              <span className="text-xs font-semibold text-blue-700 tracking-wide uppercase">About Us</span>
            </span>
            <h1 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-700 text-transparent bg-clip-text">
              The Logistics Platform Built for UK Businesses
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              OmniWTMS was founded with one goal: give UK logistics firms enterprise-grade warehouse and transport management without the enterprise price tag or the six-month implementation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/pricing">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white font-bold px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                  View Pricing
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg rounded-xl border-2 border-blue-500 text-blue-700 hover:bg-blue-50 transition-all">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-blue-600">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, i) => (
              <div key={i}>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-blue-100 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-black mb-4 text-center bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-700 text-transparent bg-clip-text">Our Mission</h2>
          <p className="text-xl text-slate-600 mb-12 text-center max-w-2xl mx-auto">
            To make world-class logistics technology accessible to every UK business, regardless of size.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <div key={i} className="flex gap-4 p-6 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-black mb-6 bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-700 text-transparent bg-clip-text">UK-Based, UK-Focused</h2>
          <p className="text-xl text-slate-600 mb-6 max-w-2xl mx-auto">
            Our team is based in London and we support customers across the entire UK — from Glasgow to Exeter. We understand UK logistics, UK compliance, and UK business needs.
          </p>
          <p className="text-gray-600 max-w-2xl mx-auto">
            OmniWTMS integrates with UK carriers (Royal Mail, DPD, DHL, Yodel, Evri), UK EPOS systems, and is fully compliant with UK GDPR, the Data Protection Act 2018, and ISO 27001 security standards.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl font-black text-white mb-5">Ready to Join 250+ UK Logistics Firms?</h2>
          <p className="text-xl text-blue-100 mb-8">Go live in 48 hours with full support and no setup fee.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/book-a-demo">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-bold px-10 py-6 text-lg rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                Book Your Free Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/case-studies">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 font-bold px-8 py-6 text-lg rounded-xl">
                Read Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
