"use client";
import { useState, useCallback } from "react";
import { PDFDocument } from "pdf-lib";
import { Upload, FileText, Download, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function MergePDFPage() {
  const [files, setFiles] = useState<File[]>([]);
  const [isMerging, setIsMerging] = useState(false);

  const onDrop = useCallback((accepted: File[]) => {
    setFiles(prev => [...prev, ...accepted.filter(f => f.type === "application/pdf")]);
  }, []);

  const removeFile = (i: number) => setFiles(prev => prev.filter((_, idx) => idx !== i));

  const mergePDFs = async () => {
    if (files.length < 2) return;
    setIsMerging(true);
    try {
      const merged = await PDFDocument.create();
      for (const file of files) {
        const pdf = await PDFDocument.load(await file.arrayBuffer());
        const pages = await merged.copyPages(pdf, pdf.getPageIndices());
        pages.forEach(p => merged.addPage(p));
      }
      const blob = new Blob([new Uint8Array(await merged.save())], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url; a.download = "merged.pdf"; a.click();
      URL.revokeObjectURL(url);
    } catch (e) { console.error(e); }
    setIsMerging(false);
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl font-bold text-center mb-4">Merge PDF Files</h1>
        <p className="text-gray-600 text-center mb-8">Combine multiple PDFs into one document</p>
        
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center mb-8 cursor-pointer hover:border-purple-500" onClick={() => document.createElement("input").click()}>
          <Upload className="h-12 w-12 mx-auto mb-4 text-gray-400" />
          <p className="font-medium mb-2">Drag & drop PDF files here</p>
          <p className="text-gray-500 text-sm">or click to select</p>
          <input type="file" accept=".pdf" multiple className="hidden" onChange={(e) => { const f = Array.from(e.target.files || []); setFiles(prev => [...prev, ...f.filter(f => f.type === "application/pdf")]); }} />
        </div>

        {files.length > 0 && (
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold">Files ({files.length})</h3>
              <Button variant="ghost" size="sm" onClick={() => setFiles([])}>Clear all</Button>
            </div>
            <div className="space-y-2">
              {files.map((f, i) => (
                <Card key={i} className="flex items-center gap-3 p-4">
                  <FileText className="h-5 w-5 text-purple-500 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate">{f.name}</p>
                    <p className="text-sm text-gray-500">{(f.size / 1024).toFixed(1)} KB</p>
                  </div>
                  <Button variant="ghost" className="h-8 w-8 p-0" onClick={() => removeFile(i)}><X className="h-4 w-4" /></Button>
                </Card>
              ))}
            </div>
          </div>
        )}

        <Button size="lg" className="w-full bg-purple-500 hover:bg-purple-600" onClick={mergePDFs} disabled={files.length < 2 || isMerging}>
          <Download className="mr-2 h-5 w-5" />{isMerging ? "Merging..." : "Merge & Download"}
        </Button>
      </div>
    </div>
  );
}