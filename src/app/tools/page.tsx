import Link from "next/link";
import { FileText, RefreshCw, Sparkles, QrCode, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const tools = [
  { icon: FileText, title: "PDF Tools", color: "text-red-500", bg: "bg-red-50", items: [
    { name: "Merge PDF", desc: "Combine multiple PDFs", href: "/tools/merge-pdf" },
    { name: "Split PDF", desc: "Split into separate files", href: "/tools/split-pdf" },
    { name: "Compress PDF", desc: "Reduce file size", href: "/tools/compress-pdf" },
  ]},
  { icon: Sparkles, title: "AI Tools", color: "text-purple-500", bg: "bg-purple-50", items: [
    { name: "AI Humanizer", desc: "Make AI text natural", href: "/tools/ai-humanizer" },
    { name: "Text Summarizer", desc: "Summarize any text", href: "/tools/summarizer" },
  ]},
  { icon: QrCode, title: "Utilities", color: "text-green-500", bg: "bg-green-50", items: [
    { name: "QR Generator", desc: "Create QR codes", href: "/tools/qr-generator" },
    { name: "Image Compressor", desc: "Reduce image size", href: "/tools/image-compressor" },
  ]},
  { icon: RefreshCw, title: "Converters", color: "text-blue-500", bg: "bg-blue-50", items: [
    { name: "Image Converter", desc: "Convert image formats", href: "/tools/image-converter" },
    { name: "Document Converter", desc: "Convert documents", href: "/tools/document-converter" },
  ]},
];

export default function ToolsPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">All Tools</h1>
        <p className="text-gray-600 text-center mb-12">Browse our collection of free online tools</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((cat) => (
            <div key={cat.title}>
              <div className="flex items-center gap-2 mb-4">
                <div className={`p-2 rounded-lg ${cat.bg}`}><cat.icon className={`h-5 w-5 ${cat.color}`} /></div>
                <h2 className="font-bold text-lg">{cat.title}</h2>
              </div>
              <div className="space-y-2">
                {cat.items.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <Card className="hover:border-purple-500 cursor-pointer transition-colors">
                      <CardHeader className="p-4">
                        <CardTitle className="text-base">{item.name}</CardTitle>
                        <p className="text-sm text-gray-500">{item.desc}</p>
                      </CardHeader>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}