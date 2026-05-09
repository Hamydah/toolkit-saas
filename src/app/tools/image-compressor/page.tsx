"use client";
import { useState } from "react";
import { Link2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ImageCompressorPage() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState("");
  const [quality, setQuality] = useState(80);

  const compress = () => {
    if (!file || !preview) return;
    const img = new window.Image();
    img.src = preview;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      canvas.getContext("2d")?.drawImage(img, 0, 0);
      canvas.toBlob((blob) => {
        if (!blob) return;
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url; a.download = `compressed_${file.name}`; a.click();
      }, file.type, quality / 100);
    };
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl font-bold text-center mb-4">Image Compressor</h1>
        <p className="text-gray-600 text-center mb-8">Reduce image file size without losing quality</p>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Quality: {quality}%</CardTitle>
          </CardHeader>
          <CardContent>
            <input type="range" min="10" max="100" value={quality} onChange={(e) => setQuality(Number(e.target.value))} className="w-full" />
          </CardContent>
        </Card>

        <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center mb-6 cursor-pointer hover:border-purple-500">
          <input type="file" accept="image/*" className="hidden" onChange={(e) => { const f = e.target.files?.[0]; if (f) { setFile(f); setPreview(URL.createObjectURL(f)); } }} />
          <Link2 className="h-12 w-12 mx-auto mb-4 text-gray-400" />
          <p className="font-medium">Click to select image</p>
        </div>

        {preview && (
          <div className="mb-6 flex gap-4">
            <img src={preview} alt="Preview" className="w-1/2 rounded-lg" />
            <div className="flex-1">
              <p className="font-medium">{file?.name}</p>
              <p className="text-sm text-gray-500">{(file?.size || 0) / 1024 > 1024 ? `${((file?.size || 0) / 1024 / 1024).toFixed(2)} MB` : `${((file?.size || 0) / 1024).toFixed(1)} KB`}</p>
            </div>
          </div>
        )}

        <Button className="w-full bg-purple-500 hover:bg-purple-600" onClick={compress} disabled={!file}>Compress & Download</Button>
      </div>
    </div>
  );
}