"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight, Star, Users, TrendingUp, CheckCircle,
  Zap, Clock,
} from "lucide-react";
import { openBookingWidget } from "@/utils/bookingWidget";
import Link from "next/link";

const proofItems = [
  { icon: Users,     text: "250+ UK Firms",       color: "text-blue-600" },
  { icon: Star,      text: "4.9 / 5 Stars",        color: "text-yellow-500" },
  { icon: TrendingUp,text: "38% Faster Deliveries",color: "text-green-600" },
  { icon: Clock,     text: "48-Hour Setup",         color: "text-purple-600" },
];

export default function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const onScroll = () => {
      const el = document.getElementById("sticky-header");
      if (el) el.style.transform = window.scrollY > 600 ? "translateY(0)" : "translateY(-100%)";
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const anim = (delay = 0) =>
    `transform transition-all duration-700 ${delay ? `delay-[${delay}ms]` : ""} ${
      visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
    }`;

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden border-b border-gray-200">

        {/* Background blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-blue-200/25 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -right-24 w-[700px] h-[700px] bg-purple-200/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-100/30 rounded-full blur-3xl" />
          {/* subtle grid */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#6366f1" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 max-w-5xl relative z-10 py-28 md:py-40">
          <div className="flex flex-col items-center text-center gap-8">

            {/* Badge */}
            <div className={anim(0)}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 via-purple-100 to-indigo-100 border border-blue-200/60 shadow-sm">
                <Zap className="h-3.5 w-3.5 text-blue-600" />
                <span className="text-xs font-semibold text-blue-700 tracking-wide uppercase">
                  AI-Powered · UK-Based · 48-Hour Setup
                </span>
              </span>
            </div>

            {/* Headline */}
            <div className={anim(100)}>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.05] tracking-tight">
                <span className="bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-700 text-transparent bg-clip-text">
                  Warehouse &amp; Transport
                </span>
                <br />
                <span className="text-gray-900">Management</span>
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Complete control from{" "}
                <span className="font-semibold text-blue-600">warehouse</span> to{" "}
                <span className="font-semibold text-purple-600">delivery</span>.
                Real-time visibility, AI route optimisation, and full fleet automation. All in one UK platform.
              </p>
            </div>

            {/* CTAs */}
            <div className={`flex flex-wrap justify-center gap-4 ${anim(200)}`}>
              <Button
                size="lg"
                onClick={openBookingWidget}
                className="group px-10 py-4 text-base font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-0"
              >
                Book Free Demo
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Link href="/pricing">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-10 py-4 text-base font-bold rounded-xl border-2 border-blue-600 text-blue-600 hover:bg-blue-50 hover:scale-105 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                >
                  View Pricing
                </Button>
              </Link>
            </div>

            {/* Trust line */}
            <p className={`text-sm text-gray-500 ${anim(250)}`}>
              No setup fee · Cancel anytime · UK-based 24/7 support
            </p>

            {/* Social proof pills */}
            <div className={`flex flex-wrap justify-center gap-3 ${anim(300)}`}>
              {proofItems.map(({ icon: Icon, text, color }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2 shadow-sm"
                >
                  <Icon className={`h-3.5 w-3.5 ${color}`} />
                  <span className="text-xs font-semibold text-gray-700">{text}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── MOBILE STICKY CTA ───────────────────────────────────────────── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200 p-3 shadow-lg">
        <Button
          onClick={openBookingWidget}
          className="w-full py-3 text-base font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white rounded-xl shadow-md hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 border-0"
        >
          <CheckCircle className="h-4 w-4 mr-2" />
          Book Free Demo - No Setup Fee
        </Button>
      </div>

      {/* ── DESKTOP FAB ─────────────────────────────────────────────────── */}
      <div className="hidden md:block fixed bottom-8 right-8 z-50">
        <div className="relative group">
          <Button
            onClick={openBookingWidget}
            className="w-14 h-14 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 text-white rounded-full shadow-xl hover:scale-110 transition-all duration-300 border-0"
          >
            <ArrowRight className="h-5 w-5" />
          </Button>
          <div className="absolute bottom-16 right-0 bg-slate-900 text-white px-3 py-1.5 rounded-lg text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap shadow-lg">
            Book Free Demo
          </div>
        </div>
      </div>

      {/* ── STICKY SCROLL HEADER ────────────────────────────────────────── */}
      <div
        id="sticky-header"
        className="hidden md:block fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm transform -translate-y-full transition-transform duration-300"
      >
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-black text-base bg-gradient-to-r from-blue-700 to-indigo-700 text-transparent bg-clip-text">OmniWTMS</span>
            <span className="text-xs text-slate-500 hidden sm:block">UK Warehouse &amp; Transport Management</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />)}
              <span className="text-xs font-semibold text-gray-600 ml-1">4.9/5</span>
            </div>
            <Button
              onClick={openBookingWidget}
              className="px-5 py-2 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white rounded-lg text-sm font-bold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 border-0"
            >
              Book Free Demo
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
