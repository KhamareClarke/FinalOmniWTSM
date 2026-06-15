"use client";
import React, { useState, useEffect, useRef } from "react";
import { openBookingWidget } from "@/utils/bookingWidget";
import { Button } from "@/components/ui/button";
import {
  Package,
  Truck,
  BarChart3,
  CheckCircle,
  Clock,
  Activity,
  Sun,
  Droplets,
  Wind,
  ArrowRight,
  LayoutDashboard,
  MapPin,
  Warehouse,
  ArrowLeftRight,
  Car,
  Users,
  FileBarChart,
  ShoppingCart,
  Settings,
  LogOut,
  Receipt,
  Sparkles,
} from "lucide-react";

const sidebarSections = [
  {
    title: "MAIN",
    items: [
      { icon: LayoutDashboard, label: "Dashboard", active: true },
      { icon: MapPin,          label: "Live Tracking", active: false },
    ],
  },
  {
    title: "WAREHOUSE",
    items: [
      { icon: Package,         label: "Inventories",   active: false },
      { icon: Warehouse,       label: "Warehouses",    active: false },
      { icon: ArrowLeftRight,  label: "Operations",    active: false },
      { icon: BarChart3,       label: "Visualisation", active: false },
    ],
  },
  {
    title: "TRANSPORT",
    items: [
      { icon: Truck,  label: "Couriers", active: false },
      { icon: Car,    label: "Fleet",    active: false },
    ],
  },
  {
    title: "BUSINESS",
    items: [
      { icon: Users,        label: "Customers",  active: false },
      { icon: ShoppingCart, label: "Ecommerce",  active: false },
      { icon: FileBarChart, label: "Analytics",  active: false },
      { icon: Receipt,      label: "Invoices",   active: false },
      { icon: Sparkles,     label: "Empire OS",  active: false },
    ],
  },
  {
    title: "SYSTEM",
    items: [
      { icon: Settings, label: "Settings", active: false },
    ],
  },
];

export default function DashboardPreviewSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const fallback = setTimeout(() => setIsVisible(true), 800);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          clearTimeout(fallback);
        }
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  return (
    <section
      id="dashboard-preview"
      className="py-32 bg-gray-50 border-b border-gray-200"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 max-w-8xl">
        {/* Section header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 via-purple-100 to-indigo-100 border border-blue-200/60 shadow-sm mb-6">
            <span className="text-xs font-semibold text-blue-700 tracking-wide uppercase">
              Live Platform
            </span>
          </span>
          <h2 className="text-5xl md:text-6xl font-black mb-5 bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-700 text-transparent bg-clip-text">
            Platform Preview
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Real-time warehouse, fleet, and customer operations in one platform
          </p>
        </div>

        {/* Browser chrome frame */}
        <div
          className={`max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-slate-200 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {/* Chrome bar */}
          <div className="bg-slate-100 border-b border-slate-200 px-4 py-3 flex items-center gap-3 flex-shrink-0">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="bg-white px-4 py-1.5 rounded-md border border-slate-300 flex items-center gap-2 w-80">
                <div className="w-3 h-3 rounded bg-gradient-to-br from-blue-600 to-indigo-600" />
                <span className="text-sm text-slate-500 font-medium">
                  app.omniwtms.com/dashboard
                </span>
              </div>
            </div>
          </div>

          {/* Dashboard — sidebar + main content side by side */}
          <div className="flex flex-row h-[660px] overflow-hidden">

            {/* ── MINI SIDEBAR ── */}
            <div className="w-48 flex-shrink-0 bg-white border-r border-gray-100 flex flex-col h-full overflow-hidden">
              {/* Brand */}
              <div className="px-3 py-2.5 border-b border-gray-100">
                <div className="text-sm font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  OmniWTMS
                </div>
                <div className="text-sm text-gray-400 mt-0.5">Command Your Chain</div>
              </div>

              {/* User block */}
              <div className="px-2.5 py-2 border-b border-gray-100 flex items-center gap-1.5">
                <div className="w-7 h-7 rounded bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                  K
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm text-gray-500">Online</span>
                  </div>
                </div>
                <LogOut className="h-3 w-3 text-gray-400 flex-shrink-0" />
              </div>

              {/* Nav sections */}
              <div className="flex-1 overflow-y-auto py-3 space-y-4">
                {sidebarSections.map(({ title, items }) => (
                  <div key={title} className="px-3">
                    <div className="text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-2 px-1">
                      {title}
                    </div>
                    {items.map(({ icon: Icon, label, active }) => (
                      <div
                        key={label}
                        className={`flex items-center gap-2 px-2 py-1.5 rounded text-xs font-medium mb-1 ${
                          active
                            ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
                            : "text-gray-500"
                        }`}
                      >
                        <Icon className="h-3 w-3 flex-shrink-0" />
                        <span className="truncate">{label}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              {/* Settings footer */}
              <div className="border-t border-gray-100 p-3">
                <div className="flex items-center gap-2 px-2 py-1.5 text-xs text-gray-500">
                  <Settings className="h-3 w-3" />
                  <span>Settings</span>
                </div>
              </div>
            </div>

            {/* ── MAIN CONTENT ── */}
            <div className="flex-1 flex flex-col overflow-hidden relative bg-gray-50/30">

              {/* Background dots */}
              <div
                className="absolute inset-0 pointer-events-none opacity-[0.04]"
                style={{
                  backgroundImage: "radial-gradient(#3b82f6 1px, transparent 1px)",
                  backgroundSize: "16px 16px",
                }}
              />

              {/* Sticky dashboard header */}
              <div className="bg-white/60 backdrop-blur-md border-b border-white/20 px-4 py-2.5 flex items-center justify-between flex-shrink-0 relative z-10">
                <div>
                  <h3 className="text-xs font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent relative inline-block">
                    Dashboard Overview
                    <span className="absolute bottom-0 left-0 w-1/3 h-px bg-gradient-to-r from-blue-600 to-transparent" />
                  </h3>
                  <div className="flex items-center gap-1 mt-0.5">
                    <Activity className="h-2 w-2 text-blue-500 animate-pulse" />
                    <p className="text-sm text-gray-500">
                      Monitor your logistics operations in real-time
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <div className="text-xs font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      14:32:07
                    </div>
                    <div className="text-sm text-gray-500 italic">Monday, 10 June 2026</div>
                  </div>
                  <button className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded text-sm font-semibold shadow-sm">
                    <Activity className="h-3 w-3" />
                    Refresh
                  </button>
                </div>
              </div>

              {/* Scrollable content */}
              <div className="flex-1 overflow-auto px-3 py-3 space-y-3 relative z-10">

                {/* AI Insights Banner */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg px-3 py-2 border border-blue-100 shadow-sm flex items-center gap-2">
                  <div className="p-1 bg-blue-100 rounded flex-shrink-0">
                    <Activity className="h-2.5 w-2.5 text-blue-600" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-blue-800">AI-Powered Insights </span>
                    <span className="text-sm text-blue-600">
                      Your logistics network is operating at 87% efficiency. Warehouse #3 could be optimised to improve capacity.
                    </span>
                  </div>
                </div>

                {/* 4 KPI Cards */}
                <div className="grid grid-cols-4 gap-2">

                  {/* Products */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg overflow-hidden shadow-sm border border-white/60">
                    <div className="h-0.5 bg-gradient-to-r from-purple-500 to-pink-500" />
                    <div className="p-2.5">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm font-semibold bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text text-transparent">
                          Products
                        </span>
                        <div className="p-0.5 bg-gradient-to-br from-purple-500 to-pink-600 rounded text-white">
                          <Package className="h-3 w-3" />
                        </div>
                      </div>
                      <div className="flex items-baseline gap-1.5 mb-1">
                        <span className="text-xl font-bold text-gray-900">1,247</span>
                        <span className="text-[13px] px-1 py-0.5 bg-purple-50 text-purple-600 rounded">+12%</span>
                      </div>
                      <div className="pt-1.5 border-t border-gray-100 space-y-0.5">
                        <div className="flex justify-between items-center">
                          <span className="text-[13px] text-gray-500">Added this week</span>
                          <span className="text-[13px] text-purple-600 font-medium">32</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-[13px] text-gray-500">Stock Health</span>
                          <span className="text-[13px] text-green-600 font-medium flex items-center gap-0.5">
                            <CheckCircle className="h-1.5 w-1.5" /> Good
                          </span>
                        </div>
                        <div className="mt-1 h-1 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full w-3/4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Warehouse Ops */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg overflow-hidden shadow-sm border border-white/60">
                    <div className="h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500" />
                    <div className="p-2.5">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm font-semibold bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">
                          Warehouse Ops
                        </span>
                        <div className="p-0.5 bg-gradient-to-br from-blue-500 to-indigo-600 rounded text-white">
                          <BarChart3 className="h-3 w-3" />
                        </div>
                      </div>
                      <div className="flex items-baseline gap-1.5 mb-1">
                        <span className="text-xl font-bold text-gray-900">847</span>
                        <span className="text-[13px] px-1 py-0.5 bg-blue-50 text-blue-600 rounded">Total Items</span>
                      </div>
                      <div className="pt-1.5 border-t border-gray-100">
                        <div className="flex justify-between items-center mb-0.5">
                          <span className="text-[13px] text-gray-500">Utilisation</span>
                          <span className="text-[13px] font-medium">73%</span>
                        </div>
                        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" style={{ width: "73%" }} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Delivery Metrics */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg overflow-hidden shadow-sm border border-white/60">
                    <div className="h-0.5 bg-gradient-to-r from-green-500 to-teal-500" />
                    <div className="p-2.5">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm font-semibold bg-gradient-to-r from-green-700 to-teal-700 bg-clip-text text-transparent">
                          Delivery Metrics
                        </span>
                        <div className="p-0.5 bg-gradient-to-br from-green-500 to-teal-600 rounded text-white">
                          <Truck className="h-3 w-3" />
                        </div>
                      </div>
                      <div className="flex items-baseline gap-1.5 mb-1">
                        <span className="text-xl font-bold text-gray-900">2,419</span>
                        <span className="text-[13px] px-1 py-0.5 bg-green-50 text-green-600 rounded">94% Success</span>
                      </div>
                      <div className="pt-1.5 border-t border-gray-100 space-y-0.5">
                        <div className="flex justify-between items-center">
                          <span className="text-[13px] text-gray-500">Completed</span>
                          <span className="text-[13px] text-green-600 font-medium flex items-center gap-0.5">
                            <CheckCircle className="h-1.5 w-1.5" /> 2,274
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-[13px] text-gray-500">On-Time Rate</span>
                          <span className="text-[13px] text-green-600 font-medium flex items-center gap-0.5">
                            <Clock className="h-1.5 w-1.5" /> 94%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Warehouse Capacity */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg overflow-hidden shadow-sm border border-white/60">
                    <div className="h-0.5 bg-gradient-to-r from-purple-500 to-pink-500" />
                    <div className="p-2.5">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm font-semibold bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text text-transparent">
                          Warehouse Cap.
                        </span>
                        <div className="p-0.5 bg-gradient-to-br from-purple-500 to-pink-600 rounded text-white">
                          <Package className="h-3 w-3" />
                        </div>
                      </div>
                      <div className="text-xl font-bold text-gray-900 mb-0.5">12 Units</div>
                      <div className="flex items-center gap-0.5 text-[13px] text-gray-500 mb-2">
                        <Package className="h-1.5 w-1.5 text-purple-500" />
                        8,450 Items Stored
                      </div>
                      {[
                        { bay: "Bay A", pct: 88, color: "bg-red-400" },
                        { bay: "Bay B", pct: 72, color: "bg-blue-500" },
                        { bay: "Bay C", pct: 55, color: "bg-green-500" },
                      ].map((b) => (
                        <div key={b.bay} className="mb-0.5">
                          <div className="flex justify-between mb-0.5">
                            <span className="text-sm text-gray-500">{b.bay}</span>
                            <span className="text-sm font-bold text-gray-600">{b.pct}%</span>
                          </div>
                          <div className="h-0.5 bg-gray-100 rounded-full overflow-hidden">
                            <div className={`h-full ${b.color} rounded-full`} style={{ width: `${b.pct}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Charts row */}
                <div className="grid grid-cols-2 gap-2.5">

                  {/* Weather Widget */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg border border-white/60 shadow-sm p-3">
                    <div className="text-sm font-bold bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">
                      Weather Updates
                    </div>
                    <div className="text-[13px] text-gray-400 mb-2">Real-time weather conditions</div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Sun className="h-6 w-6 text-yellow-500" />
                        <div>
                          <div className="text-sm font-bold text-gray-800">14°C</div>
                          <div className="text-[13px] text-gray-400">Feels like 11°</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-[13px] text-blue-600 bg-blue-50 border border-blue-100 px-1.5 py-0.5 rounded font-medium">
                        London
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex items-center gap-1">
                        <Droplets className="h-2.5 w-2.5 text-blue-500" />
                        <span className="text-[13px] text-gray-600">72% Humidity</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Wind className="h-2.5 w-2.5 text-blue-500" />
                        <span className="text-[13px] text-gray-600">18 km/h</span>
                      </div>
                    </div>
                    <div className="mt-2 pt-2 border-t border-gray-100 flex justify-around">
                      {[
                        { day: "Tue", icon: "☁", temp: "12°" },
                        { day: "Wed", icon: "🌤", temp: "16°" },
                        { day: "Thu", icon: "☀", temp: "18°" },
                      ].map((f) => (
                        <div key={f.day} className="flex flex-col items-center gap-0.5">
                          <span className="text-[13px] font-medium text-gray-500">{f.day}</span>
                          <span className="text-sm leading-none">{f.icon}</span>
                          <span className="text-[13px] font-bold text-gray-700">{f.temp}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Delivery Status */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg border border-white/60 shadow-sm p-3">
                    <div className="text-sm font-bold bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">
                      Delivery Status
                    </div>
                    <div className="text-[13px] text-gray-400 mb-2">AI Enhanced</div>
                    <div className="flex items-center gap-3">
                      <div
                        className="w-16 h-16 rounded-full flex-shrink-0"
                        style={{
                          background:
                            "conic-gradient(#f59e0b 0% 15%, #3b82f6 15% 50%, #10b981 50% 95%, #ef4444 95% 100%)",
                        }}
                      >
                        <div className="w-10 h-10 rounded-full bg-white/90 m-3 flex items-center justify-center">
                          <span className="text-[13px] font-bold text-gray-700">94%</span>
                        </div>
                      </div>
                      <div className="space-y-1 flex-1">
                        {[
                          { label: "Pending",     color: "bg-amber-500", pct: "15%" },
                          { label: "In Progress", color: "bg-blue-500",  pct: "35%" },
                          { label: "Completed",   color: "bg-green-500", pct: "45%" },
                          { label: "Failed",      color: "bg-red-500",   pct: "5%"  },
                        ].map((s) => (
                          <div key={s.label} className="flex items-center gap-1">
                            <div className={`w-1.5 h-1.5 rounded-full ${s.color} flex-shrink-0`} />
                            <span className="text-[13px] text-gray-600 flex-1">{s.label}</span>
                            <span className="text-[13px] font-semibold text-gray-700">{s.pct}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="mt-2 p-1.5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded border border-blue-100 flex items-center gap-1">
                      <Activity className="h-2 w-2 text-blue-600 flex-shrink-0" />
                      <span className="text-[13px] text-blue-700 font-medium">AI Insight: </span>
                      <span className="text-[13px] text-blue-600">Completion rates improved by 6% this week</span>
                    </div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white/80 backdrop-blur-sm rounded-lg border border-white/60 shadow-sm overflow-hidden">
                  <div className="px-3 py-2 border-b border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <Activity className="h-2.5 w-2.5 text-blue-600" />
                      <span className="text-sm font-bold bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">
                        Recent Activity
                      </span>
                      <span className="flex items-center gap-0.5 text-[13px] px-1 py-0.5 bg-blue-50 text-blue-600 rounded ml-0.5">
                        <Activity className="h-1.5 w-1.5 animate-pulse" /> Live
                      </span>
                    </div>
                    <p className="text-[13px] text-gray-400">Latest stock movements</p>
                  </div>
                  <div className="p-2 space-y-1.5">
                    {[
                      { product: "Sony 4K TV",        warehouse: "Warehouse A", qty: 24, type: "IN",       dotCls: "bg-green-500", badgeCls: "bg-green-50 text-green-700 border-green-200",   ref: "MV-001923", isNew: true  },
                      { product: "Nike Air Max",       warehouse: "Warehouse B", qty: 12, type: "OUT",      dotCls: "bg-red-500",   badgeCls: "bg-red-50 text-red-700 border-red-200",         ref: "MV-001924", isNew: false },
                      { product: "Samsung Galaxy S25", warehouse: "Warehouse C", qty: 8,  type: "TRANSFER", dotCls: "bg-blue-500",  badgeCls: "bg-blue-50 text-blue-700 border-blue-200",      ref: "MV-001925", isNew: false },
                    ].map((m) => (
                      <div
                        key={m.ref}
                        className={`flex items-center gap-2 p-1.5 rounded-lg ${
                          m.isNew
                            ? "bg-gradient-to-r from-blue-50/50 to-transparent border border-blue-100"
                            : "bg-gray-50/80"
                        }`}
                      >
                        <div className={`w-1 h-6 rounded-full flex-shrink-0 ${m.dotCls}`} />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1">
                            <span className="text-sm font-medium text-gray-800 truncate">{m.product}</span>
                            {m.isNew && (
                              <span className="text-sm px-1 py-0.5 bg-blue-50 text-blue-700 border border-blue-200 rounded">New</span>
                            )}
                          </div>
                          <span className="text-[13px] text-gray-500">{m.warehouse}</span>
                        </div>
                        <span className={`text-sm px-1 py-0.5 rounded-full border font-semibold flex-shrink-0 ${m.badgeCls}`}>
                          {m.type}
                        </span>
                        <span className="text-[13px] font-mono text-gray-400 flex-shrink-0 hidden sm:block">{m.ref}</span>
                        <span className="text-[13px] font-semibold text-blue-700 flex-shrink-0 flex items-center gap-0.5">
                          <Package className="h-1.5 w-1.5" /> {m.qty} units
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <p className="text-slate-500 text-sm mb-3">See it with your own data</p>
          <Button
            onClick={openBookingWidget}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white font-bold rounded-lg shadow-md hover:shadow-lg hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 hover:scale-105 transition-all duration-300 border-0"
          >
            Start Your Free Trial
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
