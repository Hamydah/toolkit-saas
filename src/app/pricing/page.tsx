import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function PricingPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Simple Pricing</h1>
        <p className="text-gray-600 text-center mb-12">Start free, upgrade when you need more</p>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card>
            <CardHeader><CardTitle>Free</CardTitle><CardDescription><span className="text-4xl font-bold">$0</span><span className="text-gray-500">/mo</span></CardDescription></CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-purple-500" /> 5 uses per day</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-purple-500" /> Basic tools</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-purple-500" /> No signup required</li>
              </ul>
              <Link href="/tools"><Button variant="outline" className="w-full">Get Started</Button></Link>
            </CardContent>
          </Card>

          <Card className="border-purple-500 ring-2 ring-purple-500">
            <CardHeader><CardTitle>Pro</CardTitle><CardDescription><span className="text-4xl font-bold">$9</span><span className="text-gray-500">/mo</span></CardDescription></CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-purple-500" /> Unlimited uses</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-purple-500" /> All premium tools</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-purple-500" /> No ads</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-purple-500" /> Priority support</li>
              </ul>
              <Link href="/checkout?plan=pro"><Button className="w-full bg-purple-500 hover:bg-purple-600">Start Free Trial</Button></Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle>Agency</CardTitle><CardDescription><span className="text-4xl font-bold">$29</span><span className="text-gray-500">/mo</span></CardDescription></CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-purple-500" /> Everything in Pro</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-purple-500" /> 5 team members</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-purple-500" /> API access</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-purple-500" /> Custom branding</li>
              </ul>
              <Link href="/contact"><Button variant="outline" className="w-full">Contact Sales</Button></Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}