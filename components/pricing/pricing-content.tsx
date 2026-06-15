// @ts-nocheck
"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Check,
  Zap,
  Building2,
  Crown,
  Users,
  Package,
  Truck,
  HardDrive,
  Headphones,
  Globe,
  ShieldCheck,
  ArrowRight,
  Loader2,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const plans = [
  {
    id: "growth",
    name: "Growth",
    icon: Zap,
    price: 349,
    setupFee: 299,
    tagline: "1 warehouse · up to 500 orders/mo",
    highlight: false,
    limits: [
      { icon: Truck, label: "Up to 1,000 deliveries / month" },
      { icon: Users, label: "5 users" },
      { icon: Building2, label: "1 warehouse" },
      { icon: HardDrive, label: "50 GB data storage" },
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
    cta: "Get Started",
    ctaVariant: "outline" as const,
  },
  {
    id: "pro",
    name: "Pro",
    icon: Building2,
    price: 699,
    setupFee: 699,
    tagline: "2–3 warehouses · 500–2,000 orders/mo",
    highlight: true,
    limits: [
      { icon: Truck, label: "Up to 10,000 deliveries / month" },
      { icon: Users, label: "25 users" },
      { icon: Building2, label: "Multi-warehouse" },
      { icon: HardDrive, label: "500 GB data storage" },
    ],
    features: [
      "Everything in Growth",
      "Multi-warehouse management",
      "White-label customer portal",
      "Advanced route optimisation (AI)",
      "Supplier & purchase order management",
      "Payroll & time tracking",
      "Hazmat compliance module",
      "Temperature-controlled delivery support",
      "Priority support (phone + email)",
      "API access for integrations",
      "Dedicated onboarding manager",
      "No long-term contract",
    ],
    cta: "Get Started",
    ctaVariant: "default" as const,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    icon: Crown,
    price: 1200,
    setupFee: 2500,
    tagline: "Multi-tenant 3PL · high volume",
    highlight: false,
    limits: [
      { icon: Truck, label: "Unlimited deliveries" },
      { icon: Users, label: "Unlimited users" },
      { icon: Building2, label: "Unlimited warehouses" },
      { icon: HardDrive, label: "Unlimited data storage" },
    ],
    features: [
      "Everything in Pro",
      "Dedicated account manager",
      "Custom integrations (ERP, EDI, ecommerce)",
      "SLA guarantee with uptime commitment",
      "Custom reporting & data exports",
      "Autodesk Forge 3D CAD model uploads",
      "Multi-tenant / white-label platform",
      "Flexible contract terms",
      "On-site onboarding available",
      "24/7 priority support",
    ],
    cta: "Talk to Sales",
    ctaVariant: "outline" as const,
  },
];

const faqs = [
  {
    q: "What does the setup fee cover?",
    a: "The one-time setup fee covers your dedicated onboarding session, data migration assistance, courier integrations, and initial system configuration. It's charged once at the start of your subscription.",
  },
  {
    q: "What happens if I exceed my delivery limit?",
    a: "We'll notify you when you reach 80% of your limit. You can upgrade your plan at any time or we'll agree an overage rate with you — we won't cut you off mid-month.",
  },
  {
    q: "Is there a free trial?",
    a: "We offer a free personalised demo with your own data and logistics scenarios. Book one via the contact page and we'll have you live within 48 hours of signing up.",
  },
  {
    q: "Can I cancel at any time?",
    a: "Yes — 30 days notice, no cancellation fees, no long-term contracts on Starter or Growth. Enterprise contracts are discussed individually.",
  },
  {
    q: "Do you support multiple couriers?",
    a: "Yes. OmniWTMS integrates with all major UK couriers out of the box. Additional or custom integrations are included in Growth and Enterprise.",
  },
];

export function PricingContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const success = searchParams.get("success") === "true";
  const cancelled = searchParams.get("cancelled") === "true";

  const handleCheckout = async (planId: string) => {
    if (planId === "enterprise") {
      router.push("/contact");
      return;
    }

    setLoadingPlan(planId);
    setError(null);

    try {
      const res = await fetch("/api/payments/create-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan: planId }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to start checkout");
      }

      window.location.href = data.url;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setLoadingPlan(null);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-16">
      {/* Success / cancelled banners */}
      {success && (
        <div className="flex items-center gap-3 rounded-xl bg-green-50 border border-green-200 px-5 py-4 text-green-800">
          <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0" />
          <p className="font-medium">Payment successful — welcome to OmniWTMS! Check your email for next steps.</p>
        </div>
      )}
      {cancelled && (
        <div className="flex items-center gap-3 rounded-xl bg-amber-50 border border-amber-200 px-5 py-4 text-amber-800">
          <AlertCircle className="h-5 w-5 text-amber-600 shrink-0" />
          <p className="font-medium">Checkout cancelled. Your plan hasn't changed.</p>
        </div>
      )}
      {error && (
        <div className="flex items-center gap-3 rounded-xl bg-red-50 border border-red-200 px-5 py-4 text-red-800">
          <AlertCircle className="h-5 w-5 text-red-600 shrink-0" />
          <p className="font-medium">{error}</p>
        </div>
      )}

      {/* Hero */}
      <div className="text-center space-y-4">
        <Badge className="bg-blue-100 text-blue-700 border-0 px-3 py-1">Simple, transparent pricing</Badge>
        <h1 className="text-4xl font-black tracking-tight bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-700 bg-clip-text text-transparent">
          Plans built for UK logistics
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
          No hidden fees. No long-term contracts. Cancel any time with 30 days notice.
          A one-time setup fee is charged at the start to cover onboarding and configuration.
        </p>
      </div>

      {/* Plan cards */}
      <div className="grid gap-8 lg:grid-cols-3">
        {plans.map((plan) => {
          const Icon = plan.icon;
          const isLoading = loadingPlan === plan.id;

          return (
            <div
              key={plan.id}
              className={cn(
                "relative rounded-2xl border bg-white p-8 flex flex-col gap-8 transition-all duration-200",
                plan.highlight
                  ? "border-blue-500 shadow-2xl shadow-blue-500/10 ring-2 ring-blue-500"
                  : "border-gray-200 shadow-md hover:shadow-lg"
              )}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white border-0 px-4 py-1 text-sm font-semibold shadow">
                    Most Popular
                  </Badge>
                </div>
              )}

              {/* Header */}
              <div className="space-y-3">
                <div className={cn(
                  "inline-flex items-center justify-center w-12 h-12 rounded-xl",
                  plan.highlight
                    ? "bg-gradient-to-br from-blue-600 to-indigo-600 text-white"
                    : "bg-gray-100 text-gray-700"
                )}>
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-gray-900">{plan.name}</h2>
                  <p className="text-sm text-gray-500 mt-1">{plan.tagline}</p>
                </div>
              </div>

              {/* Pricing */}
              <div className="space-y-2">
                <div className="flex items-end gap-1">
                  <span className="text-5xl font-black text-gray-900">£{plan.price.toLocaleString()}</span>
                  <span className="text-gray-500 mb-2">/mo</span>
                </div>
                <p className="text-sm text-gray-500">
                  + <span className="font-semibold text-gray-700">£{plan.setupFee?.toLocaleString()} one-time setup fee</span>
                </p>
                <p className="text-xs text-gray-400">
                  Covers onboarding, data migration & configuration
                </p>
              </div>

              {/* Usage limits */}
              <div className="rounded-xl bg-gray-50 p-4 space-y-3">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Usage limits</p>
                {plan.limits.map(({ icon: LimitIcon, label }) => (
                  <div key={label} className="flex items-center gap-2.5 text-sm text-gray-700">
                    <LimitIcon className="h-4 w-4 text-blue-500 shrink-0" />
                    <span>{label}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Button
                size="lg"
                variant={plan.ctaVariant}
                className={cn(
                  "w-full font-bold rounded-xl py-6 text-base",
                  plan.highlight
                    ? "bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white border-0"
                    : ""
                )}
                onClick={() => handleCheckout(plan.id)}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Redirecting to checkout...
                  </>
                ) : (
                  <>
                    {plan.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>

              {/* Features */}
              <div className="space-y-3">
                <p className="text-sm font-semibold text-gray-700">What's included</p>
                {plan.features.map((f) => (
                  <div key={f} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Trust bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-y border-gray-100 py-10">
        {[
          { icon: ShieldCheck, label: "No long-term contracts" },
          { icon: Headphones, label: "UK-based support" },
          { icon: Globe, label: "48-hour setup" },
          { icon: Package, label: "All couriers supported" },
        ].map(({ icon: TrustIcon, label }) => (
          <div key={label} className="flex items-center gap-3 text-sm text-gray-600 font-medium">
            <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
              <TrustIcon className="h-4 w-4 text-blue-600" />
            </div>
            {label}
          </div>
        ))}
      </div>

      {/* Setup fee explainer */}
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h3 className="text-2xl font-black text-gray-900">What does the setup fee cover?</h3>
          <p className="text-gray-500 text-sm max-w-xl mx-auto">
            Paid once when you sign up. Covers everything needed to get your team live from day one.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              profile: "Small",
              fee: "£299",
              sub: "1 warehouse · <500 orders/mo",
              color: "border-blue-200 bg-blue-50/50",
              badge: "bg-blue-100 text-blue-700",
              items: [
                "Dedicated onboarding support",
                "Basic inventory data import",
                "Core system configuration",
                "User accounts & permissions setup",
              ],
            },
            {
              profile: "Medium",
              fee: "£699",
              sub: "2–3 warehouses · 500–2,000 orders/mo",
              color: "border-indigo-200 bg-indigo-50/50",
              badge: "bg-indigo-100 text-indigo-700",
              items: [
                "Complete system rollout",
                "Multi-courier API integrations",
                "Virtual staff training session",
                "Multi-warehouse configuration",
                "Full data migration",
              ],
            },
            {
              profile: "3PL / Enterprise",
              fee: "£2,500",
              sub: "Multi-tenant · high volume",
              color: "border-purple-200 bg-purple-50/50",
              badge: "bg-purple-100 text-purple-700",
              items: [
                "Custom business logic setup",
                "White-label client portals",
                "Dedicated setup support manager",
                "Tailored SLA configuration",
                "Full data migration & testing",
                "On-site or extended onboarding",
              ],
            },
          ].map(({ profile, fee, sub, color, badge, items }) => (
            <div key={profile} className={`rounded-xl border p-6 space-y-4 ${color}`}>
              <div className="space-y-1">
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${badge}`}>{profile}</span>
                <div className="text-2xl font-black text-gray-900 pt-2">{fee}</div>
                <p className="text-xs text-gray-500">{sub}</p>
              </div>
              <div className="space-y-2">
                {items.map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="h-3.5 w-3.5 text-green-500 mt-0.5 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="space-y-6 max-w-3xl mx-auto">
        <h3 className="text-2xl font-black text-center text-gray-900">Frequently asked questions</h3>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="rounded-xl border border-gray-200 bg-white p-6 space-y-2">
              <p className="font-semibold text-gray-900">{q}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="text-center space-y-4 py-8">
        <h3 className="text-2xl font-black text-gray-900">Not sure which plan is right for you?</h3>
        <p className="text-gray-500">Book a free demo and we'll recommend the best fit for your operation.</p>
        <Link href="/book-a-demo">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white font-bold px-10 py-6 rounded-xl text-base"
          >
            Book a Free Demo
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
