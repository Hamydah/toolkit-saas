"use client";
import { useState } from "react";
import { Sparkles, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const replacements: Record<string, string[]> = {
  Furthermore: ["Plus", "Also", "And"],
  However: ["But", "Yet", "Still"],
  Therefore: ["So", "Which means", "So basically"],
  Moreover: ["Also", "Plus", "On top of that"],
  Additionally: ["Also", "Plus", "And"],
  In conclusion: ["So yeah", "To wrap up", "Bottom line"],
  It is important: ["It's worth noting", "Keep in mind"],
};

export default function AIHumanizerPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);

  const humanize = () => {
    let result = input;
    for (const [word, alternatives] of Object.entries(replacements)) {
      const regex = new RegExp(word, "gi");
      result = result.replace(regex, () => alternatives[Math.floor(Math.random() * alternatives.length)]);
    }
    setOutput(result);
  };

  const copy = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold text-center mb-4">AI Humanizer</h1>
        <p className="text-gray-600 text-center mb-8">Transform AI text into natural, human-like writing</p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium mb-2">AI Text</label>
            <Textarea value={input} onChange={(e) => setInput(e.target.value)} placeholder="Paste AI-generated text..." className="min-h-[300px]" />
          </div>
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-medium">Humanized</label>
              {output && <Button variant="ghost" size="sm" onClick={copy}>{copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}{copied ? "Copied!" : "Copy"}</Button>}
            </div>
            <Textarea value={output} readOnly placeholder="Humanized text appears here..." className="min-h-[300px]" />
          </div>
        </div>

        <Button className="w-full bg-purple-500 hover:bg-purple-600" onClick={humanize} disabled={!input.trim()}>
          <Sparkles className="mr-2 h-5 w-5" />Humanize Text
        </Button>
      </div>
    </div>
  );
}