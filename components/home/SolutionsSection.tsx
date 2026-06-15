"use client";
import React, { useState, useEffect, useRef } from "react";
import { Warehouse, Truck, BarChart3, Heart, CheckCircle, ArrowRight } from "lucide-react";
import { openBookingWidget } from "@/utils/bookingWidget";

const solutions = [
  {
    icon: Warehouse,
    title: "Warehouse Operations",
    color: "blue",
    features: [
      "Real-time inventory tracking with barcode and RFID",
      "Automated pick optimisation and order fulfilment",
      "3D warehouse visualisation for capacity planning",
    ],
  },
  {
    icon: Truck,
    title: "Transportation",
    color: "indigo",
    features: [
      "AI-powered route optimisation and dispatch",
      "Live GPS tracking for all vehicles and drivers",
      "Digital proof of delivery via mobile app",
    ],
  },
  {
    icon: BarChart3,
    title: "Data and Analytics",
    color: "purple",
    features: [
      "Live KPI dashboards for operational visibility",
      "AI-powered demand forecasting and analytics",
      "Custom reports with automated alerts",
    ],
  },
  {
    icon: Heart,
    title: "Customer Experience",
    color: "green",
    features: [
      "Real-time order tracking and notifications",
      "Branded customer portal for self-service",
      "Flexible delivery options and time slots",
    ],
  },
];

const colorMap: Record<string, { icon: string; iconBg: string; check: string; bar: string; border: string }> = {
  blue:   { icon: "text-blue-600",   iconBg: "bg-blue-50",   check: "text-blue-500",   bar: "bg-blue-500",   border: "hover:border-blue-300"   },
  indigo: { icon: "text-indigo-600", iconBg: "bg-indigo-50", check: "text-indigo-500", bar: "bg-indigo-500", border: "hover:border-indigo-300" },
  purple: { icon: "text-purple-600", iconBg: "bg-purple-50", check: "text-purple-500", bar: "bg-purple-500", border: "hover:border-purple-300" },
  green:  { icon: "text-green-600",  iconBg: "bg-green-50",  check: "text-green-500",  bar: "bg-green-500",  border: "hover:border-green-300"  },
};

export default function SolutionsSection() {
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
    <section id="solutions" className="py-32 bg-white border-b border-gray-200 relative overflow-hidden" ref={ref}>
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/60 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-50/40 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 via-purple-100 to-indigo-100 border border-blue-200/60 shadow-sm mb-6">
            <span className="text-xs font-semibold text-blue-700 tracking-wide uppercase">Core Platform</span>
          </span>
          <h2 className="text-5xl md:text-6xl font-black mb-5 bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-700 text-transparent bg-clip-text">
            Core Operations
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Complete visibility and control across warehouse, transport, and customer operations
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solutions.map((s, i) => {
            const c = colorMap[s.color];
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className={`bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden transition-all duration-700 hover:shadow-lg ${c.border} ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${100 + i * 100}ms` }}
              >
                <div className={`h-1 ${c.bar}`} />
                <div className="p-7">
                  <div className="flex items-center gap-4 mb-5">
                    <div className={`${c.iconBg} rounded-xl p-3`}>
                      <Icon className={`h-6 w-6 ${c.icon}`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{s.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <CheckCircle className={`h-4 w-4 ${c.check} mt-0.5 flex-shrink-0`} />
                        <span className="text-sm text-gray-700">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA row */}
        <div className={`mt-14 text-center transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <button
            onClick={openBookingWidget}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            See All Features
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
