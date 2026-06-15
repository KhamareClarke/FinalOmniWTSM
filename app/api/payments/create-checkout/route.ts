import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe/client";

const PLANS = {
  growth: {
    priceId: process.env.STRIPE_GROWTH_PRICE_ID,
    setupFeeId: process.env.STRIPE_GROWTH_SETUP_FEE_ID,
    name: "Growth",
  },
  pro: {
    priceId: process.env.STRIPE_PRO_PRICE_ID,
    setupFeeId: process.env.STRIPE_PRO_SETUP_FEE_ID,
    name: "Pro",
  },
} as const;

export async function POST(request: NextRequest) {
  try {
    const { plan } = await request.json();
    const planConfig = PLANS[plan as keyof typeof PLANS];

    if (!planConfig) {
      return NextResponse.json({ error: "Invalid plan" }, { status: 400 });
    }
    if (!planConfig.priceId) {
      return NextResponse.json(
        { error: `Stripe price ID not configured for ${planConfig.name} plan` },
        { status: 503 }
      );
    }

    const stripe = getStripe();
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://omniwtms.com";

    const lineItems: { price: string; quantity: number }[] = [
      { price: planConfig.priceId, quantity: 1 },
    ];

    if (planConfig.setupFeeId) {
      lineItems.unshift({ price: planConfig.setupFeeId, quantity: 1 });
    }

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: lineItems,
      success_url: `${appUrl}/pricing?success=true&plan=${plan}`,
      cancel_url: `${appUrl}/pricing?cancelled=true`,
      metadata: { plan: planConfig.name },
      billing_address_collection: "required",
      allow_promotion_codes: true,
      subscription_data: {
        metadata: { plan: planConfig.name },
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json({ error: "Failed to create checkout session" }, { status: 500 });
  }
}
