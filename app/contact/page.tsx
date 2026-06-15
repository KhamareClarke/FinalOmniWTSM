import type { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Phone, Mail, MapPin, Clock, ArrowRight, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact OmniWTMS — Get in Touch with Our UK Logistics Team",
  description: "Contact OmniWTMS. Call, email, or book a demo with our UK-based logistics experts. 24/7 support available. 45 Liverpool St, London EC2M 7QN.",
  alternates: { canonical: "https://omniwtms.com/contact" },
};

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    detail: "+44 20 7946 0982",
    sub: "Mon–Fri, 9am–5:30pm GMT",
    link: "tel:+442079460982",
    cta: "Call now",
  },
  {
    icon: Mail,
    title: "Email Us",
    detail: "sales@omniwtms.com",
    sub: "We reply within 2 hours",
    link: "mailto:sales@omniwtms.com",
    cta: "Send email",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    detail: "45 Liverpool St, London EC2M 7QN",
    sub: "By appointment only",
    link: "https://maps.google.com/?q=45+Liverpool+St+London",
    cta: "Get directions",
  },
  {
    icon: Clock,
    title: "Support Hours",
    detail: "24/7 UK-Based Support",
    sub: "Emergency line always open",
    link: null,
    cta: null,
  },
];

const faqs = [
  { q: "How quickly can I get a demo?", a: "We can usually book a personalised demo within 24 hours. Use the button below or call us directly." },
  { q: "Is there a free trial?", a: "We offer a free personalised demo running with your own data. Most customers go live within 48 hours after the demo." },
  { q: "Do you offer onsite support?", a: "Yes, for Enterprise customers we offer onsite implementation support across the UK. Contact us to discuss your requirements." },
  { q: "How do I report a technical issue?", a: "Existing customers can reach our 24/7 support line or email support@omniwtms.com. We target a 1-hour response for critical issues." },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-24 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 via-purple-100 to-indigo-100 border border-blue-200/60 shadow-sm mb-6">
              <span className="text-xs font-semibold text-blue-700 tracking-wide uppercase">Contact Us</span>
            </span>
            <h1 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-700 text-transparent bg-clip-text">
              Talk to Our UK Logistics Experts
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Whether you want a demo, have a question, or need support — our UK-based team is ready to help. No bots, no offshore call centres.
            </p>
            <Link href="/book-a-demo">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white font-bold px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                Book a Free Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-black mb-12 text-center bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-700 text-transparent bg-clip-text">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, i) => {
              const Icon = method.icon;
              return (
                <div key={i} className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{method.title}</h3>
                  <p className="text-gray-800 font-medium text-sm mb-1">{method.detail}</p>
                  <p className="text-gray-500 text-xs mb-4">{method.sub}</p>
                  {method.link && method.cta && (
                    <a
                      href={method.link}
                      className="mt-auto inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold text-sm transition-colors"
                      target={method.link.startsWith("http") ? "_blank" : undefined}
                      rel={method.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {method.cta} <ArrowRight className="ml-1 h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-black mb-8 text-center bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-700 text-transparent bg-clip-text">Common Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl font-black text-white mb-5">Ready to See OmniWTMS in Action?</h2>
          <p className="text-xl text-blue-100 mb-8">Book a free personalised demo with one of our logistics experts.</p>
          <Link href="/book-a-demo">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-bold px-10 py-6 text-lg rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Book Your Free Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
