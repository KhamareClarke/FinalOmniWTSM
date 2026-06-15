// @ts-nocheck
"use client";

import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Truck,
  LogOut,
  Building2,
  FileText,
  LoaderIcon,
  FileCheck,
  Map,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard, shortcut: "Alt + D" },
  {
    name: "Warehouses",
    href: "/warehouses",
    icon: Building2,
    shortcut: "Alt + W",
  },
  {
    name: "Inventories",
    href: "/products",
    icon: Package,
    shortcut: "Alt + P",
  },
  { name: "Orders", href: "/orders", icon: ShoppingCart, shortcut: "Alt + O" },
  { name: "Couriers", href: "/couriers", icon: Truck, shortcut: "Alt + C" },
  {
    name: "POD Management",
    href: "/pod",
    icon: FileCheck,
    shortcut: "Alt + M",
  },
  {
    name: "Tracking & Management",
    href: "/tracking",
    icon: LoaderIcon,
    shortcut: "Alt + T",
  },
  { name: "Reports", href: "/reports", icon: FileText, shortcut: "Alt + R" },
  { name: "Stock", href: "/Stock", icon: FileText, shortcut: "Alt + S" },
  {
    name: "Print Label",
    href: "/upload-orders",
    icon: FileText,
    shortcut: "Alt + L",
  },
];

export function Sidebar({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLinkClick = () => {
    if (window.innerWidth < 1024) {
      onClose();
    }
  };

  const handleLogout = () => {
    router.push("/login");
  };

  return (
    <>
      {/* Backdrop for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 lg:hidden z-40"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <nav
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 transform bg-white border-r border-blue-100 transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:w-64",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex h-full flex-col">
          <div className="flex-1 space-y-1 p-4">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={handleLinkClick}
                  className={cn(
                    "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition-all duration-200",
                    "keyboard-focus",
                    isActive
                      ? "bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white shadow-md shadow-blue-500/20"
                      : "text-gray-600 hover:text-blue-700 hover:bg-blue-50"
                  )}
                  role="menuitem"
                  aria-current={isActive ? "page" : undefined}
                >
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                  <span>{item.name}</span>
                  <span
                    className={cn("ml-auto text-xs", isActive ? "text-white/70" : "text-gray-400")}
                    aria-label={`Shortcut: ${item.shortcut}`}
                  >
                    {item.shortcut}
                  </span>
                </Link>
              );
            })}
          </div>
          <div className="border-t border-blue-100 p-4">
            <button
              onClick={handleLogout}
              className={cn(
                "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold",
                "text-gray-500 hover:text-red-600 hover:bg-red-50 transition-all duration-200",
                "keyboard-focus"
              )}
              role="menuitem"
            >
              <LogOut className="h-5 w-5" aria-hidden="true" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
