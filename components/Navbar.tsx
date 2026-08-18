"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = [
  { label: "首頁", href: "/" },
  { label: "認識好天使", href: "/about" },
  { label: "加入好天使", href: "/career" },
  { label: "團隊文化", href: "/team" },
  { label: "聯絡我們", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-brand-900/10 bg-paper/90 backdrop-blur-xl">
      <div className="container-shell flex h-20 items-center justify-between">
        {/* Brand */}
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="group flex items-center gap-3"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-900 text-sm font-semibold text-ivory transition duration-300 group-hover:bg-brand-800">
            G
          </div>

          <div className="leading-none">
            <p className="text-lg font-semibold tracking-[0.08em] text-brand-900">
              好天使
            </p>

            <p className="mt-1 text-[9px] font-medium tracking-[0.22em] text-muted">
              GOOD ANGEL
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative py-2 text-sm font-medium tracking-wide text-muted transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:text-brand-900 hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/career"
          className="hidden items-center gap-3 bg-brand-900 px-6 py-3 text-sm font-medium tracking-wide text-ivory transition duration-300 hover:bg-brand-800 lg:inline-flex"
        >
          加入我們
          <span aria-hidden="true">↗</span>
        </Link>

        {/* Mobile Button */}
        <button
          type="button"
          aria-label={isOpen ? "關閉選單" : "開啟選單"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
          className="flex h-11 w-11 items-center justify-center border border-brand-900/20 text-brand-900 transition hover:bg-brand-900 hover:text-ivory lg:hidden"
        >
          <span className="text-lg leading-none">{isOpen ? "✕" : "☰"}</span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-brand-900/10 bg-paper lg:hidden">
          <nav className="container-shell flex flex-col py-6">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="group flex items-center justify-between border-b border-brand-900/10 py-5"
              >
                <div className="flex items-center gap-4">
                  <span className="text-[10px] tracking-[0.2em] text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-lg font-medium text-brand-900">
                    {item.label}
                  </span>
                </div>

                <span className="text-muted transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            ))}

            <Link
              href="/career"
              onClick={() => setIsOpen(false)}
              className="mt-8 flex items-center justify-between bg-brand-900 px-6 py-4 text-sm font-medium tracking-wide text-ivory"
            >
              <span>加入我們</span>
              <span aria-hidden="true">↗</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
