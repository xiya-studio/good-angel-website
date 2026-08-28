"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "首頁", href: "/" },
  { label: "認識好天使", href: "/about" },
  { label: "加入好天使", href: "/career" },
  { label: "團隊文化", href: "/team" },
  { label: "聯絡我們", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomeTop = pathname === "/" && !isScrolled;

  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isHomeTop
          ? "border-b border-transparent bg-transparent"
          : "border-b border-brand-900/10 bg-paper/90 shadow-[0_10px_40px_rgba(20,45,30,0.06)] backdrop-blur-xl"
      }`}
    >
      {/* Scroll Progress */}
      <motion.div
        style={{ scaleX }}
        className="absolute left-0 top-0 z-[60] h-[2px] w-full origin-left bg-gold"
      />

      <div className="container-shell flex h-20 items-center justify-between">
        {/* Brand */}
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="group flex items-center gap-3"
        >
          <div
            className={`relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full text-sm font-semibold transition-all duration-500 group-hover:scale-105 ${
              isHomeTop
                ? "bg-white text-brand-900"
                : "bg-brand-900 text-ivory group-hover:bg-brand-800"
            }`}
          >
            <span className="relative z-10 transition-transform duration-500 group-hover:scale-110">
              G
            </span>

            <div className="absolute inset-0 translate-y-full bg-gold/20 transition-transform duration-500 group-hover:translate-y-0" />
          </div>

          <div className="leading-none">
            <p
              className={`text-lg font-semibold tracking-[0.08em] transition-colors duration-500 ${
                isHomeTop ? "text-white" : "text-brand-900"
              }`}
            >
              好天使
            </p>

            <div className="mt-1 flex items-center gap-2">
              <span className="h-px w-0 bg-gold transition-all duration-500 group-hover:w-4" />

              <p
                className={`text-[9px] font-medium tracking-[0.22em] transition-colors duration-500 ${
                  isHomeTop ? "text-white/50" : "text-muted"
                }`}
              >
                GOOD ANGEL
              </p>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item, index) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative flex items-start gap-1.5 py-3 text-sm font-medium tracking-wide transition-colors duration-300 ${
                  isHomeTop
                    ? isActive
                      ? "text-white"
                      : "text-white/60 hover:text-white"
                    : isActive
                      ? "text-brand-900"
                      : "text-muted hover:text-brand-900"
                }`}
              >
                <span className="mt-[1px] text-[8px] font-medium tracking-wider text-gold/70 transition-colors duration-300 group-hover:text-gold">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span>{item.label}</span>

                <span
                  className={`absolute bottom-1 left-0 h-px bg-gold transition-all duration-500 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/career"
          className={`group relative hidden overflow-hidden px-6 py-3 text-sm font-medium tracking-wide transition-all duration-500 lg:inline-flex ${
            isHomeTop
              ? "bg-[#c7d98f] text-brand-900"
              : "bg-brand-900 text-ivory"
          }`}
        >
          <span className="absolute inset-0 translate-y-full bg-brand-800 transition-transform duration-500 group-hover:translate-y-0" />

          <span className="relative z-10 flex items-center gap-3 transition-colors duration-300 group-hover:text-white">
            加入我們
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            >
              ↗
            </span>
          </span>
        </Link>

        {/* Mobile Button */}
        <button
          type="button"
          aria-label={isOpen ? "關閉選單" : "開啟選單"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
          className={`group flex h-11 w-11 items-center justify-center border transition-all duration-500 lg:hidden ${
            isHomeTop
              ? "border-white/30 text-white hover:border-white hover:bg-white hover:text-brand-900"
              : "border-brand-900/20 text-brand-900 hover:bg-brand-900 hover:text-ivory"
          }`}
        >
          <span className="text-lg leading-none transition-transform duration-300">
            {isOpen ? "✕" : "☰"}
          </span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden border-brand-900/10 bg-paper/95 backdrop-blur-xl transition-all duration-500 lg:hidden ${
          isOpen
            ? "max-h-[600px] border-t opacity-100"
            : "max-h-0 border-t-0 opacity-0"
        }`}
      >
        <nav className="container-shell flex flex-col py-6">
          {navItems.map((item, index) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));

            return (
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

                  <span
                    className={`text-lg font-medium transition-colors duration-300 ${
                      isActive
                        ? "text-brand-900"
                        : "text-brand-900/70 group-hover:text-brand-900"
                    }`}
                  >
                    {item.label}
                  </span>
                </div>

                <span className="text-muted transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            );
          })}

          <Link
            href="/career"
            onClick={() => setIsOpen(false)}
            className="group mt-8 flex items-center justify-between bg-brand-900 px-6 py-4 text-sm font-medium tracking-wide text-ivory transition-colors duration-300 hover:bg-brand-800"
          >
            <span>加入我們</span>

            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            >
              ↗
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
