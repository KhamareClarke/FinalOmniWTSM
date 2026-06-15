"use client";
import React, { useState, useEffect, useRef } from "react";
import { UserPlus, Settings, Rocket, ArrowRight } from "lucide-react";
import { openBookingWidget } from "@/utils/bookingWidget";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Sign Up",
    description: "Create your account in minutes. No credit card required and no long-term contract.",
    color: "blue",
  },
  {
    icon: Settings,
    step: "02",
    title: "Configure",
    description: "Our UK team sets up your warehouse, fleet, and carrier integrations within 48 hours.",
    color: "purple",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Go Live",
    description: "Start managing operations with real-time visibility, AI routing, and full automation.",
    color: "indigo",
  },
];

const colorMap: Record<string, { icon: string; iconBg: string; stepText: string; bar: string; ring: string }> = {
  blue:   { icon: "text-blue-600",   iconBg: "bg-blue-50",   stepText: "text-blue-600",   bar: "bg-blue-500",   ring: "ring-blue-200"   },
  purple: { icon: "text-purple-600", iconBg: "bg-purple-50", stepText: "text-purple-600", bar: "bg-purple-500", ring: "ring-purple-200" },
  indigo: { icon: "text-indigo-600", iconBg: "bg-indigo-50", stepText: "text-indigo-600", bar: "bg-indigo-500", ring: "ring-indigo-200" },
};

export default function HowItWorksSection() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fallback = setTimeout(() => setIsVisible(true), 800);
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setIsVisible(true); clearTimeout(fallback); }
    }, { threshold: 0.05 });
    if (ref.current) observer.observe(ref.current);
    return () => { observer.disconnect(); clearTimeout(fallback); };
  }, []);

  return (
    <section id="how-it-works" className="py-32 bg-gradient-to-br from-blue-50 via-white to-indigo-50 border-b border-gray-200 relative overflow-hidden" ref={ref}>
      {/* subtle grid */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hiw-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#6366f1" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hiw-grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 via-purple-100 to-indigo-100 border border-blue-200/60 shadow-sm mb-6">
            <span className="text-xs font-semibold text-blue-700 tracking-wide uppercase">Simple Onboarding</span>
          </span>
          <h2 className="text-5xl md:text-6xl font-black mb-5 bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-700 text-transparent bg-clip-text">
            How It Works
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Live in 48 hours with our UK onboarding team handling everything for you
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-14 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-blue-300 via-purple-300 to-indigo-300 z-0" />

          {steps.map((s, i) => {
            const c = colorMap[s.color];
            const Icon = s.icon;
            return (
              <div
                key={s.step}
                className={`relative z-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden h-full">
                  <div className={`h-1 ${c.bar}`} />
                  <div className="p-8">
                    {/* Step number + icon */}
                    <div className="flex items-start justify-between mb-6">
                      <div className={`${c.iconBg} rounded-2xl p-4 ring-4 ${c.ring}`}>
                        <Icon className={`h-7 w-7 ${c.icon}`} />
                      </div>
                      <span className={`text-5xl font-black ${c.stepText} opacity-15 leading-none`}>{s.step}</span>
                    </div>
                    <h3 className="text-xl font-black text-gray-900 mb-3">{s.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{s.description}</p>
                  </div>
                </div>
                {/* Arrow between cards */}
                {i < steps.length - 1 && (
                  <div className="md:hidden flex justify-center mt-4 mb-0">
                    <ArrowRight className="h-5 w-5 text-gray-300 rotate-90" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className={`mt-16 text-center transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <button
            onClick={openBookingWidget}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Start in 48 Hours
            <ArrowRight className="h-4 w-4" />
          </button>
          <p className="mt-3 text-sm text-gray-500">No setup fee. UK support included.</p>
        </div>
      </div>
    </section>
  );
}
