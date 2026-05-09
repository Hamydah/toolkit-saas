import Link from "next/link";
import { FileText, RefreshCw, Sparkles, QrCode, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const tools = [
  { icon: FileText, title: "PDF Tools", color: "text-red-500", bg: "bg-red-50", tools: ["Merge PDF", "Split PDF", "Compress PDF"] },
  { icon: RefreshCw, title: "Converters", color: "text-blue-500", bg: "bg-blue-50", tools: ["Image Converter", "Document Converter"] },
  { icon: Sparkles, title: "AI Tools", color: "text-purple-500", bg: "bg-purple-50", tools: ["AI Humanizer", "Text Summarizer"] },
  { icon: QrCode, title: "Utilities", color: "text-green-500", bg: "bg-green-50", tools: ["QR Generator", "Image Compressor"] },
];

export default function HomePage() {
  return (
    <div>
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Free Online Tools for <span className="text-purple-500">Everyone</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            PDF tools, file converters, AI humanizer, QR generator and more. No signup required.
          </p>
          <Link href="/tools">
            <Button className="text-lg px-8 py-4 bg-purple-500 hover:bg-purple-600">
              Start Using Tools <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader><CardTitle>Free</CardTitle><CardDescription><span className="text-3xl font-bold">$0</span></CardDescription></CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-purple-500" /> 5 uses per day</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-purple-500" /> Basic tools</li>
                </ul>
                <Link href="/tools"><Button variant="outline" className="w-full">Get Started</Button></Link>
              </CardContent>
            </Card>
            <Card className="border-purple-500 ring-2 ring-purple-500">
              <CardHeader><CardTitle>Pro</CardTitle><CardDescription><span className="text-3xl font-bold">$9/mo</span></CardDescription></CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-purple-500" /> Unlimited uses</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-purple-500" /> All premium tools</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-purple-500" /> No ads</li>
                </ul>
                <Link href="/checkout?plan=pro"><Button className="w-full bg-purple-500 hover:bg-purple-600">Upgrade</Button></Link>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>Agency</CardTitle><CardDescription><span className="text-3xl font-bold">$29/mo</span></CardDescription></CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-purple-500" /> Everything in Pro</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-purple-500" /> Team access</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-purple-500" /> API access</li>
                </ul>
                <Link href="/checkout?plan=agency"><Button variant="outline" className="w-full">Contact Sales</Button></Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">All Tools</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((cat) => (
              <Card key={cat.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className={`p-3 rounded-lg ${cat.bg} w-fit mb-2`}>
                    <cat.icon className={`h-6 w-6 ${cat.color}`} />
                  </div>
                  <CardTitle>{cat.title}</CardTitle>
                  <CardDescription>{cat.tools.join(", ")}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="/tools" className="text-purple-500 text-sm font-medium hover:underline">View all →</Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}