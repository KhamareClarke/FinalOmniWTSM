import type { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/seo";
import { PrivacyPolicyClientContent } from "@/components/privacy-policy/client-content";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = genMeta({
  title: "Privacy Policy — How OmniWTMS Protects Your Data",
  description: "OmniWTMS privacy policy. We are fully GDPR compliant and ISO 27001 certified. Learn how we collect, use, and protect your data as a UK logistics platform.",
  canonical: "https://omniwtms.com/privacy-policy",
  noIndex: false,
});

export default function PrivacyPolicyPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://omniwtms.com" },
      { "@type": "ListItem", "position": 2, "name": "Privacy Policy", "item": "https://omniwtms.com/privacy-policy" }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 via-purple-100 to-indigo-100 border border-blue-200/60 shadow-sm mb-6">
            <span className="text-xs font-semibold text-blue-700 tracking-wide uppercase">Legal</span>
          </span>
          <h1 className="text-4xl md:text-5xl font-black mb-3 bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-700 text-transparent bg-clip-text">Privacy Policy</h1>
          <p className="text-gray-500 text-sm">Last updated: January 2025 | OmniWTMS Ltd</p>
        </div>
      </section>
      <div className="max-w-4xl mx-auto py-12 px-4">

        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-gray-700">
              This Privacy Policy describes how OmniWTMS Ltd ("we", "our", or "us") collects, uses, and protects
              your personal information when you use our AI-powered Warehouse & Transport Management System. We are
              fully compliant with the UK General Data Protection Regulation (UK GDPR), the Data Protection Act 2018,
              and ISO 27001 certified.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Account information (name, email address, company details)</li>
              <li>Usage data (system interactions, feature usage, preferences)</li>
              <li>Device information (browser type, operating system, IP address)</li>
              <li>Order and inventory management data entered into the platform</li>
              <li>Vehicle and logistics operational data</li>
              <li>Communications and support ticket history</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>To provide and maintain the OmniWTMS platform</li>
              <li>To notify you about changes to our service</li>
              <li>To provide 24/7 UK-based customer support</li>
              <li>To detect, prevent and address technical issues</li>
              <li>To improve and optimize our AI algorithms</li>
              <li>To send service-related communications (not marketing without consent)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <p className="text-gray-700">
              OmniWTMS is ISO 27001 certified and implements industry-standard security measures including
              AES-256 encryption at rest, TLS 1.3 encryption in transit, role-based access controls, and
              regular third-party penetration testing. Our UK data centres comply with all relevant regulations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">GDPR & Your Rights</h2>
            <p className="text-gray-700 mb-3">Under UK GDPR, you have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Access your personal data</li>
              <li>Correct inaccurate personal data</li>
              <li>Request deletion of your personal data</li>
              <li>Restrict or object to processing</li>
              <li>Data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Data Retention</h2>
            <p className="text-gray-700">
              We retain personal data for as long as your account is active, plus 7 years for financial and
              compliance records as required by UK law. Operational data is retained for the period specified
              in your service agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
            <p className="text-gray-700">
              We use essential cookies for platform functionality and analytics cookies (with your consent)
              to improve our service. You can manage cookie preferences via our cookie consent banner.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-700">
              If you have questions about this Privacy Policy or wish to exercise your data rights, contact our
              Data Protection Officer at: <a href="mailto:privacy@omniwtms.com" className="text-blue-600 hover:underline">privacy@omniwtms.com</a>
            </p>
            <p className="text-gray-700 mt-2">
              You also have the right to lodge a complaint with the Information Commissioner&apos;s Office (ICO)
              at <a href="https://ico.org.uk" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">ico.org.uk</a>.
            </p>
          </section>

          <PrivacyPolicyClientContent />
        </div>
      </div>
      <Footer />
    </div>
  );
}
