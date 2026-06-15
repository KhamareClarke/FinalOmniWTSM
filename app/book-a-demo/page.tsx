import type { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { ArrowRight, CheckCircle, Clock, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Book a Free Demo — OmniWTMS UK Logistics Platform",
  description: "Book a free personalised demo of OmniWTMS. See how UK logistics firms cut costs and go live in 48 hours. Speak to a UK-based expert today.",
  alternates: { canonical: "https://omniwtms.com/book-a-demo" },
};

const benefits = [
  { icon: Clock, text: "Live in 48 hours — no lengthy implementation" },
  { icon: Users, text: "UK-based expert walks you through your use case" },
  { icon: Zap, text: "See the platform with your own data and workflows" },
  { icon: CheckCircle, text: "No commitment — completely free, no hard sell" },
];

const steps = [
  { step: "1", title: "Book a time", description: "Choose a 30-minute slot that works for you. We have morning and afternoon availability Mon–Fri." },
  { step: "2", title: "We prepare", description: "Your dedicated UK logistics expert reviews your industry and tailors the demo to your specific needs." },
  { step: "3", title: "Live walkthrough", description: "See OmniWTMS in action — WMS, TMS, live tracking, and reporting — built around your workflows." },
  { step: "4", title: "Go live", description: "Most customers go live within 48 hours of the demo. We handle the setup and onboarding for you." },
];

export default function BookADemoPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-24 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 via-purple-100 to-indigo-100 border border-blue-200/60 shadow-sm mb-6">
              <span className="text-xs font-semibold text-blue-700 tracking-wide uppercase">Free Demo</span>
            </span>
            <h1 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-700 text-transparent bg-clip-text">
              See OmniWTMS in Action — Free
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Book a personalised 30-minute demo with a UK logistics expert. We'll show you exactly how OmniWTMS works for your business — no scripts, no pressure.
            </p>
            <ul className="space-y-3 mb-10">
              {benefits.map((b, i) => {
                const Icon = b.icon;
                return (
                  <li key={i} className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-blue-600 shrink-0" />
                    <span className="text-slate-700 font-medium">{b.text}</span>
                  </li>
                );
              })}
            </ul>
            <a href="mailto:sales@omniwtms.com?subject=Book%20a%20Demo">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white font-bold px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                Request Your Free Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <p className="text-sm text-gray-500 mt-3">Or call us: <a href="tel:+442079460982" className="text-blue-600 hover:underline font-medium">+44 20 7946 0982</a></p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-black mb-4 text-center bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-700 text-transparent bg-clip-text">How It Works</h2>
          <p className="text-xl text-slate-600 mb-12 text-center max-w-2xl mx-auto">From booking to going live — here's what to expect.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={i} className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-white font-black text-sm">{s.step}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-black mb-6 bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-700 text-transparent bg-clip-text">Trusted by 250+ UK Logistics Firms</h2>
          <p className="text-xl text-slate-600 mb-6 max-w-2xl mx-auto">
            From single-site e-commerce warehouses to multi-depot 3PLs across the UK — companies like yours go live in 48 hours with zero setup fee.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            {[
              { value: "250+", label: "UK Logistics Firms" },
              { value: "48hrs", label: "Average Go-Live" },
              { value: "99.8%", label: "Inventory Accuracy" },
              { value: "24/7", label: "UK-Based Support" },
            ].map((stat, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                <div className="text-3xl font-black bg-gradient-to-r from-blue-700 to-indigo-700 text-transparent bg-clip-text mb-1">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl font-black text-white mb-5">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">Book your free demo today — speak to a real UK logistics expert, not a chatbot.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:sales@omniwtms.com?subject=Book%20a%20Demo">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-bold px-10 py-6 text-lg rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                Email Us to Book
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 font-bold px-8 py-6 text-lg rounded-xl">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
