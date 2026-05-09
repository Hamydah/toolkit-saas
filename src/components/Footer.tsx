import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold">ToolKit Pro</span>
          </div>
          <div className="flex gap-6">
            <Link href="/tools" className="text-sm text-gray-600 hover:text-purple-500">Tools</Link>
            <Link href="/pricing" className="text-sm text-gray-600 hover:text-purple-500">Pricing</Link>
            <Link href="/privacy" className="text-sm text-gray-600 hover:text-purple-500">Privacy</Link>
          </div>
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} ToolKit Pro</p>
        </div>
      </div>
    </footer>
  );
}