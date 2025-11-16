"use client";
import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items: { href: string; label: string; icon: ReactNode }[] = [
  { href: "/", label: "Home", icon: (
    <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 10v10h14V10"/></svg>
  ) },
  { href: "/favorites", label: "Saved", icon: (
    <svg className="size-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-6.716-4.35-9.3-7.2C.9 11.862 1.2 8.4 4.2 7.2 6.24 6.36 8.22 7.2 9 8.4c.78-1.2 2.76-2.04 4.8-1.2 3 1.2 3.3 4.662 1.5 6.6C18.716 16.65 12 21 12 21z"/></svg>
  ) },
  { href: "/category/all", label: "Categories", icon: (
    <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
  ) },
  { href: "/profile", label: "Profile", icon: (
    <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="7" r="4"/><path d="M5.5 21a8.38 8.38 0 0 1 13 0"/></svg>
  ) },
];

export default function BottomNav() {
  const pathname = usePathname();
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-30 border-t bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <ul className="mx-auto max-w-screen-sm grid grid-cols-4 h-14">
        {items.map(({ href, icon, label }) => {
          const active = pathname === href;
          return (
            <li key={href}>
              <Link
                href={href as any}
                className={`flex h-full flex-col items-center justify-center text-xs ${active ? "text-[#007BFF]" : "text-gray-600"}`}
              >
                {icon}
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
