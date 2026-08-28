"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const footerLinks = [
  { number: "01", label: "首頁", href: "/" },
  { number: "02", label: "認識好天使", href: "/about" },
  { number: "03", label: "加入好天使", href: "/career" },
  { number: "04", label: "團隊文化", href: "/team" },
  { number: "05", label: "聯絡我們", href: "/contact" },
];

const keywords = ["REAL ESTATE", "FINANCE", "PEOPLE", "GROWTH"];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-900 text-ivory">
      {/* top gold line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.4,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="h-px origin-left bg-gold/70"
      />

      <div className="container-shell relative">
        {/* =====================================================
            TOP
        ===================================================== */}
        <div className="grid gap-16 py-20 md:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:gap-24">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="text-[9px] font-semibold tracking-[0.32em] text-gold">
              GOOD ANGEL / TAICHUNG
            </p>

            <h2 className="mt-7 max-w-xl text-3xl font-semibold leading-[1.25] tracking-[-0.04em] text-white md:text-5xl">
              與願意成長的人，
              <br />
              <span className="text-brand-200">一起走得更遠。</span>
            </h2>

            <p className="mt-8 max-w-md text-sm leading-7 text-white/45">
              結合不動產實務、財商教育與人才培育，
              與願意學習、願意成長的夥伴一起累積專業。
            </p>

            {/* Keywords */}
            <div className="mt-12 flex max-w-lg flex-wrap gap-x-7 gap-y-4">
              {keywords.map((keyword) => (
                <span
                  key={keyword}
                  className="text-[9px] tracking-[0.25em] text-white/30"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Navigation */}
          <nav className="border-t border-white/15">
            {footerLinks.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.06,
                }}
              >
                <Link
                  href={item.href}
                  className="group relative flex items-center justify-between overflow-hidden border-b border-white/15 py-5 md:py-6"
                >
                  {/* hover background */}
                  <div className="absolute inset-0 origin-left scale-x-0 bg-white/[0.035] transition-transform duration-500 group-hover:scale-x-100" />

                  <div className="relative flex items-center gap-6">
                    <span className="text-[8px] tracking-[0.2em] text-gold">
                      {item.number}
                    </span>

                    <span className="text-base font-medium text-white/65 transition-all duration-300 group-hover:translate-x-2 group-hover:text-white md:text-lg">
                      {item.label}
                    </span>
                  </div>

                  <span className="relative text-lg text-white/25 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-gold">
                    ↗
                  </span>
                </Link>
              </motion.div>
            ))}
          </nav>
        </div>

        {/* =====================================================
            GIANT LOGOTYPE
        ===================================================== */}
        <div className="overflow-hidden border-t border-white/15">
          <Link href="/" className="group block">
            <motion.div
              initial={{ y: "35%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative py-10 md:py-12"
            >
              <p className="select-none whitespace-nowrap text-[clamp(3.8rem,11.5vw,11rem)] font-semibold leading-[0.86] tracking-[-0.04em] text-white transition-colors duration-700 group-hover:text-brand-200">
                GOOD ANGEL
              </p>

              <span className="absolute right-0 top-1/2 hidden -translate-y-1/2 text-4xl text-gold opacity-0 transition-all duration-500 group-hover:-translate-y-[65%] group-hover:translate-x-2 group-hover:opacity-100 md:block">
                ↗
              </span>
            </motion.div>
          </Link>
        </div>

        {/* =====================================================
            INFORMATION
        ===================================================== */}
        <div className="grid gap-10 border-t border-white/15 py-10 md:grid-cols-3 md:py-12">
          <div>
            <p className="text-[8px] font-semibold tracking-[0.28em] text-gold">
              OFFICE
            </p>

            <p className="mt-4 text-sm leading-7 text-white/50">
              臺中市北屯區
              <br />
              文心路四段 61 號
            </p>
          </div>

          <div>
            <p className="text-[8px] font-semibold tracking-[0.28em] text-gold">
              CONTACT
            </p>

            <div className="mt-4 space-y-2 text-sm text-white/50">
              <a
                href="tel:0422991391"
                className="block transition-colors hover:text-white"
              >
                04-2299-1391
              </a>

              <a
                href="mailto:Goodangel1013@gmail.com"
                className="block break-all transition-colors hover:text-white"
              >
                Goodangel1013@gmail.com
              </a>
            </div>
          </div>

          <div className="md:text-right">
            <p className="text-[8px] font-semibold tracking-[0.28em] text-gold">
              LOCATION
            </p>

            <p className="mt-4 text-sm leading-7 text-white/50">
              TAICHUNG
              <br />
              TAIWAN
            </p>
          </div>
        </div>

        {/* =====================================================
            COPYRIGHT
        ===================================================== */}
        <div className="flex flex-col gap-5 border-t border-white/10 py-7 text-[9px] tracking-[0.16em] text-white/25 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 好天使不動產財商團隊</p>

          <div className="flex items-center gap-5">
            <span>REAL ESTATE</span>
            <span className="text-gold/50">✦</span>
            <span>FINANCE</span>
            <span className="text-gold/50">✦</span>
            <span>GROWTH</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
