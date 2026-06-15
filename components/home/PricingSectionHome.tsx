"use client";
import React, { useState } from "react";
import CountdownSlots from "./CountdownSlots";
import { openBookingWidget } from "@/utils/bookingWidget";
import { Loader2, Check, Truck, Users, Building2, HardDrive } from "lucide-react";

const plans = [
  {
    id: "growth",
    name: "Growth",
    price: "£349",
    setupFee: "£299",
    tagline: "1 warehouse · up to 500 orders/mo",
    badge: { label: "Growth", bg: "bg-blue-100 text-blue-700" },
    highlight: false,
    border: "border border-gray-200",
    priceColor: "text-blue-700",
    checkColor: "text-blue-500",
    btnClass: "bg-gradient-to-r from-blue-600 to-indigo-600",
    limits: [
      { icon: Truck, text: "Up to 1,000 deliveries/month" },
      { icon: Users, text: "5 users" },
      { icon: Building2, text: "1 warehouse" },
      { icon: HardDrive, text: "50GB data storage" },
    ],
    features: [
      "Full WMS — orders, inventory, picking & packing",
      "Real-time delivery tracking",
      "ePOD (electronic proof of delivery)",
      "3D warehouse visualisation",
      "Courier management",
      "Reports & analytics dashboard",
      "Customer portal",
      "UK email & chat support",
      "48-hour onboarding setup",
      "No long-term contract",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price: "£699",
    setupFee: "£699",
    tagline: "2–3 warehouses · 500–2,000 orders/mo",
    badge: { label: "Most Popular", bg: "bg-indigo-500 text-white" },
    highlight: true,
    border: "border-2 border-indigo-500",
    priceColor: "text-indigo-700",
    checkColor: "text-indigo-500",
    btnClass: "bg-gradient-to-r from-indigo-600 to-purple-600",
    limits: [
      { icon: Truck, text: "Up to 10,000 deliveries/month" },
      { icon: Users, text: "25 users" },
      { icon: Building2, text: "Multi-warehouse" },
      { icon: HardDrive, text: "500GB data storage" },
    ],
    features: [
      "Everything in Growth",
      "Multi-warehouse management",
      "White-label customer portal",
      "Advanced AI route optimisation",
      "Supplier & purchase order management",
      "Payroll & time tracking",
      "Hazmat compliance module",
      "Temperature-controlled delivery support",
      "Priority phone & email support",
      "API access for integrations",
      "Dedicated onboarding manager",
      "No long-term contract",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "£1,200",
    setupFee: "£2,500",
    tagline: "Multi-tenant 3PL · high volume",
    badge: { label: "Enterprise", bg: "bg-purple-100 text-purple-700" },
    highlight: false,
    border: "border border-gray-200",
    priceColor: "text-purple-700",
    checkColor: "text-purple-500",
    btnClass: "bg-gradient-to-r from-purple-600 to-indigo-600",
    limits: [
      { icon: Truck, text: "Unlimited deliveries" },
      { icon: Users, text: "Unlimited users" },
      { icon: Building2, text: "Unlimited warehouses" },
      { icon: HardDrive, text: "Unlimited data storage" },
    ],
    features: [
      "Everything in Pro",
      "Dedicated account manager",
      "Custom integrations (ERP, EDI, ecommerce)",
      "SLA guarantee & uptime commitment",
      "Custom reporting & data exports",
      "3D CAD model uploads (Autodesk Forge)",
      "Multi-tenant / white-label platform",
      "Flexible contract terms",
      "On-site onboarding available",
      "24/7 priority support",
    ],
  },
];

export default function PricingSectionHome() {
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);

  const handleCheckout = async (planId: string) => {
    if (planId === "enterprise") {
      openBookingWidget();
      return;
    }
    setLoadingPlan(planId);
    try {
      const res = await fetch("/api/payments/create-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan: planId }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Checkout failed");
      window.location.href = data.url;
    } catch {
      setLoadingPlan(null);
    }
  };

  return (
    <section id="pricing" className="py-32 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 max-w-8xl">
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 via-purple-100 to-indigo-100 border border-blue-200/60 shadow-sm mb-6">
            <span className="text-xs font-semibold text-blue-700 tracking-wide uppercase">Transparent Pricing</span>
          </span>
          <h2 className="text-5xl md:text-6xl font-black mb-5 bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-700 text-transparent bg-clip-text">
            Pricing
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            All plans include every feature, UK-based support, and rapid onboarding.
            A one-time setup fee applies. Cancel anytime with 30 days notice.
          </p>
        </div>

        <CountdownSlots />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`bg-white rounded-xl ${plan.border} ${plan.highlight ? "shadow-xl" : "shadow-sm hover:shadow-md"} p-6 flex flex-col relative transition`}
            >
              <span className={`absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full ${plan.badge.bg}`}>
                {plan.badge.label}
              </span>

              <h3 className={`text-2xl font-bold ${plan.priceColor} mb-1`}>
                {plan.price}
                {plan.id !== "enterprise" && (
                  <span className="text-base font-medium text-gray-500">/mo</span>
                )}
              </h3>
              <p className="text-sm text-gray-500 mb-1">
                + <span className="font-semibold text-gray-700">{plan.setupFee} one-time setup fee</span>
              </p>
              <p className="text-gray-600 text-sm mb-5">{plan.tagline}</p>

              <div className="bg-gray-50 rounded-lg p-3 mb-5 space-y-2">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Usage limits</p>
                {plan.limits.map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2 text-sm text-gray-700">
                    <Icon className={`h-3.5 w-3.5 shrink-0 ${plan.checkColor}`} />
                    {text}
                  </div>
                ))}
              </div>

              <button
                onClick={() => handleCheckout(plan.id)}
                disabled={loadingPlan !== null}
                className={`inline-flex items-center justify-center gap-2 px-6 py-3 ${plan.btnClass} text-white font-bold rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border-0 w-full mb-6 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100`}
              >
                {loadingPlan === plan.id ? (
                  <><Loader2 className="h-4 w-4 animate-spin" /> Redirecting...</>
                ) : plan.id === "enterprise" ? "Talk to Sales" : "Get Started"}
              </button>

              <div className="space-y-2.5">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">What's included</p>
                {plan.features.map((f) => (
                  <div key={f} className="flex items-start gap-2 text-sm text-gray-600">
                    <Check className={`h-3.5 w-3.5 mt-0.5 shrink-0 ${plan.checkColor}`} />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="w-full flex justify-center mt-12">
          <div className="bg-gray-50 border border-gray-200 rounded-xl px-6 py-4 max-w-4xl w-full">
            <p className="text-sm font-semibold text-gray-800 mb-3">All plans include:</p>
            <div className="flex flex-wrap gap-2 justify-center">
              <span className="text-xs bg-white text-gray-700 px-3 py-1.5 rounded-full border border-gray-200">Unlimited UK support</span>
              <span className="text-xs bg-white text-gray-700 px-3 py-1.5 rounded-full border border-gray-200">UK data residency</span>
              <span className="text-xs bg-white text-gray-700 px-3 py-1.5 rounded-full border border-gray-200">48-hour onboarding</span>
              <span className="text-xs bg-white text-gray-700 px-3 py-1.5 rounded-full border border-gray-200">All integrations</span>
              <span className="text-xs bg-white text-gray-700 px-3 py-1.5 rounded-full border border-gray-200">Mobile & desktop</span>
              <span className="text-xs bg-white text-gray-700 px-3 py-1.5 rounded-full border border-gray-200">Security & compliance</span>
              <span className="text-xs bg-white text-gray-700 px-3 py-1.5 rounded-full border border-gray-200">Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
