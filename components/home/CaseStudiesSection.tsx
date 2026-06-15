"use client";
import React, { useState, useEffect, useRef } from "react";
import { Star, ArrowRight } from "lucide-react";
import Link from "next/link";

const cases = [
  {
    tag: "3PL",
    stat: "60% Less Admin Time",
    quote: "Onboarding new clients in hours, not weeks. Admin workload dropped by half.",
    author: "Operations Director",
    company: "City Express Logistics",
    initials: "CE",
    tagBg: "bg-blue-100",
    tagText: "text-blue-700",
    bar: "bg-blue-500",
    statGrad: "from-blue-600 via-blue-700 to-indigo-600",
    avatarBg: "bg-blue-600",
    border: "hover:border-blue-300",
    href: "/case-studies/manchester-logistics",
  },
  {
    tag: "E-Commerce",
    stat: "99.8% Pick Accuracy",
    quote: "No more stockouts or mis-picks. Total trust in the numbers.",
    author: "Head of Fulfilment",
    company: "ShopRocket",
    initials: "SR",
    tagBg: "bg-purple-100",
    tagText: "text-purple-700",
    bar: "bg-purple-500",
    statGrad: "from-purple-600 via-purple-700 to-indigo-600",
    avatarBg: "bg-purple-600",
    border: "hover:border-purple-300",
    href: "/case-studies/birmingham-warehouse",
  },
  {
    tag: "Transport",
    stat: "Fleet Billing Cut 40%",
    quote: "We see every delivery in real time and bill clients in minutes, not days.",
    author: "Fleet Manager",
    company: "UK National Couriers",
    initials: "UN",
    tagBg: "bg-green-100",
    tagText: "text-green-700",
    bar: "bg-green-500",
    statGrad: "from-green-600 via-green-700 to-teal-600",
    avatarBg: "bg-green-600",
    border: "hover:border-green-300",
    href: "/case-studies/london-couriers",
  },
];

export default function CaseStudiesSection() {
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
    <section id="case-studies" className="py-32 bg-white border-b border-gray-200 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-50/50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-50/40 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 via-purple-100 to-indigo-100 border border-blue-200/60 shadow-sm mb-6">
            <span className="text-xs font-semibold text-blue-700 tracking-wide uppercase">Customer Results</span>
          </span>
          <h2 className="text-5xl md:text-6xl font-black mb-5 bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-700 text-transparent bg-clip-text">
            Real Improvements
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Measurable results from live UK customer deployments
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <div
              key={c.tag}
              className={`bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col hover:shadow-lg transition-all duration-300 ${c.border} ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className={`h-1 ${c.bar}`} />
              <div className="p-7 flex flex-col flex-1">
                {/* Tag + stars */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`inline-block px-3 py-1 ${c.tagBg} ${c.tagText} font-semibold rounded-full text-xs`}>{c.tag}</span>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, j) => <Star key={j} className="h-3 w-3 text-yellow-400 fill-current" />)}
                  </div>
                </div>

                {/* Stat headline */}
                <h3 className={`text-2xl font-black mb-4 bg-gradient-to-r ${c.statGrad} text-transparent bg-clip-text`}>{c.stat}</h3>

                {/* Quote */}
                <blockquote className="text-slate-600 text-sm leading-relaxed mb-5 flex-1 italic">
                  "{c.quote}"
                </blockquote>

                {/* Author */}
                <div className="pt-4 border-t border-gray-100 flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-full ${c.avatarBg} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                    {c.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">{c.author}</p>
                    <p className="text-xs text-gray-500">{c.company}</p>
                  </div>
                </div>

                {/* Read more */}
                <Link href={c.href} className={`mt-4 inline-flex items-center gap-1.5 text-xs font-semibold ${c.tagText} hover:gap-2.5 transition-all`}>
                  Read case study <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom link */}
        <div className={`mt-12 text-center transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <Link href="/case-studies" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 hover:gap-3 transition-all">
            View all case studies <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
