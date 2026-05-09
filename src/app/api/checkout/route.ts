import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { plan } = await request.json();
    
    const prices: Record<string, number> = {
      pro: 900,
      agency: 2900,
    };

    const amount = prices[plan];
    if (!amount) {
      return NextResponse.json({ error: "Invalid plan" }, { status: 400 });
    }

    return NextResponse.json({ 
      message: "Stripe integration ready. Add STRIPE_SECRET_KEY to enable payments.",
      plan,
      amount,
    });
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}