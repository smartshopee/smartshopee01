"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
      <div className="mx-auto max-w-screen-sm px-4 h-14 flex items-center gap-3">
        <Link href="/" className="font-bold text-[#007BFF] text-lg">Smart Shopee</Link>
        <div className="flex-1" />
        <Link aria-label="Search" href="/" className="p-2">
          <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        </Link>
        <Link aria-label="Saved" href="/favorites" className="p-2">
          <svg className="size-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-6.716-4.35-9.3-7.2C.9 11.862 1.2 8.4 4.2 7.2 6.24 6.36 8.22 7.2 9 8.4c.78-1.2 2.76-2.04 4.8-1.2 3 1.2 3.3 4.662 1.5 6.6C18.716 16.65 12 21 12 21z"/></svg>
        </Link>
        <Link aria-label="Profile" href="/profile" className="p-2">
          <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="7" r="4"/><path d="M5.5 21a8.38 8.38 0 0 1 13 0"/></svg>
        </Link>
      </div>
    </header>
  );
}
