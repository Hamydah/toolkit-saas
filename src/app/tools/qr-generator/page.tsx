"use client";
import { useState } from "react";
import QRCode from "qrcode";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function QRGeneratorPage() {
  const [text, setText] = useState("");
  const [qrUrl, setQrUrl] = useState("");

  const generate = async () => {
    if (!text.trim()) return;
    const url = await QRCode.toDataURL(text, { width: 300, margin: 2 });
    setQrUrl(url);
  };

  const download = () => {
    if (!qrUrl) return;
    const a = document.createElement("a");
    a.href = qrUrl; a.download = "qrcode.png"; a.click();
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl font-bold text-center mb-4">QR Code Generator</h1>
        <p className="text-gray-600 text-center mb-8">Create QR codes for URLs, text, WiFi, and more</p>

        <div className="mb-6">
          <Input value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter URL or text..." className="mb-4" />
          <Button className="w-full bg-purple-500 hover:bg-purple-600" onClick={generate}>Generate QR Code</Button>
        </div>

        <Card className="min-h-[350px] flex items-center justify-center">
          <CardContent className="flex flex-col items-center p-8">
            {qrUrl ? (
              <>
                <img src={qrUrl} alt="QR Code" className="mb-4 rounded-lg" />
                <Button onClick={download}><Download className="mr-2 h-4 w-4" />Download</Button>
              </>
            ) : (
              <p className="text-gray-400">Your QR code will appear here</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}