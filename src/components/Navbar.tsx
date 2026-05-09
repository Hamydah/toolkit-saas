"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-purple-500" />
            <span className="text-xl font-bold">ToolKit Pro</span>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link href="/tools" className="text-sm font-medium text-gray-600 hover:text-purple-500">All Tools</Link>
            <Link href="/pricing" className="text-sm font-medium text-gray-600 hover:text-purple-500">Pricing</Link>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <Link href="/pricing" className="px-4 py-2 bg-purple-500 text-white rounded-md text-sm font-medium hover:bg-purple-600">
              Get Pro - $9/mo
            </Link>
          </div>
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <Link href="/tools" className="text-sm font-medium text-gray-600">All Tools</Link>
              <Link href="/pricing" className="text-sm font-medium text-gray-600">Pricing</Link>
              <Link href="/pricing" className="px-4 py-2 bg-purple-500 text-white rounded-md text-sm font-medium text-center">Get Pro</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}