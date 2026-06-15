import type { Metadata } from "next";
import { Suspense } from "react";
import { HelpContent } from "@/components/help/help-content";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { generateMetadata as genMeta } from "@/lib/seo";

export const metadata: Metadata = genMeta({
  title: "Help Centre — OmniWTMS Support & Documentation",
  description: "Get help with OmniWTMS. Step-by-step guides for warehouse management, order tracking, route optimization, inventory management, and driver app. 24/7 UK-based support available.",
  canonical: "https://omniwtms.com/help",
  keywords: ["OmniWTMS help", "warehouse management support", "WMS documentation", "logistics software help UK"],
});

export default function HelpPage() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <HelpContent />
    </Suspense>
  );
}
