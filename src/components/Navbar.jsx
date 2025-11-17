import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-white/40">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-fuchsia-500 to-blue-500" />
          <span className="font-black tracking-tight text-gray-800">MyTales</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <a href="#what" className="hover:text-gray-900">What it is</a>
          <a href="#features" className="hover:text-gray-900">Key features</a>
          <a href="#how" className="hover:text-gray-900">How it works</a>
        </nav>
        <button className="md:hidden p-2 rounded-lg hover:bg-white/70 text-gray-700" aria-label="Menu">
          <Menu size={20} />
        </button>
        <a href="#cta" className="hidden md:inline-flex bg-gradient-to-r from-fuchsia-500 to-blue-500 text-white px-4 py-2 rounded-lg font-semibold shadow-md hover:shadow-lg transition-shadow">Try it</a>
      </div>
    </header>
  );
}
