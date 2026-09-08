"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const contactItems = [
  {
    label: "PHONE",
    title: "04-2299-1391",
    description: "歡迎於服務時間來電與我們聯繫",
    href: "tel:0422991391",
  },
  {
    label: "EMAIL",
    title: "Goodangel1013@gmail.com",
    description: "求職、合作或其他問題皆可來信",
    href: "mailto:Goodangel1013@gmail.com",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-brand-900 text-ivory"
    >
      {/* Background typography */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-8 top-16 select-none whitespace-nowrap text-[clamp(8rem,21vw,22rem)] font-semibold leading-none tracking-[-0.08em] text-white/[0.018]"
      >
        CONTACT
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 right-0 select-none whitespace-nowrap text-[clamp(8rem,22vw,24rem)] font-semibold leading-none tracking-[-0.08em] text-white/[0.018]"
      >
        ANGEL
      </div>

      {/* Vertical guides */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[4%] top-0 h-full w-px bg-white/[0.04]" />
        <div className="absolute right-[4%] top-0 h-full w-px bg-white/[0.04]" />
      </div>

      {/* =======================================================
          01 / HERO CTA
      ======================================================= */}
      <div className="container-shell relative py-24 md:py-32 lg:py-40">
        <div className="grid gap-14 lg:grid-cols-[0.55fr_1.45fr] lg:gap-20">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="flex items-center gap-4">
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: 40 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
                className="h-px bg-gold"
              />

              <p className="text-[10px] font-semibold tracking-[0.32em] text-gold">
                JOIN OUR TEAM
              </p>
            </div>

            <p className="mt-6 text-sm leading-7 text-white/45">
              Taichung · Taiwan
            </p>

            <div className="mt-14 hidden lg:block">
              <p className="font-serif text-7xl font-light leading-none text-gold">
                05
              </p>

              <p className="mt-4 text-[9px] tracking-[0.28em] text-white/30">
                START YOUR NEXT CHAPTER
              </p>
            </div>
          </motion.div>

          {/* RIGHT */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-6xl text-4xl font-semibold leading-[1.12] tracking-[-0.05em] md:text-6xl lg:text-8xl"
            >
              下一段職涯，
              <br />
              也許可以
              <span className="text-brand-200"> 從這裡開始。</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.85,
                delay: 0.1,
              }}
              className="mt-12 flex flex-col justify-between gap-10 border-t border-white/15 pt-8 md:flex-row md:items-end"
            >
              <p className="max-w-2xl text-base leading-8 text-white/55 md:text-lg">
                如果你對不動產、財商領域或好天使的團隊文化感興趣，
                歡迎進一步認識我們，也歡迎直接與團隊聯絡。
              </p>

              <Link
                href="/career"
                className="group inline-flex min-w-[230px] items-center justify-between bg-yellow px-7 py-4 text-sm font-semibold tracking-wide text-brand-900 transition-all duration-300 hover:bg-yellow-hover"
              >
                <span>了解加入方式</span>

                <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  {"↗\uFE0E"}
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* =======================================================
          02 / CONTACT PANEL
      ======================================================= */}
      <div className="border-y border-white/15">
        <div className="container-shell">
          <div className="grid md:grid-cols-2">
            {contactItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                }}
                className="group relative overflow-hidden border-b border-white/15 py-12 md:border-b-0 md:border-r md:px-10 md:py-16 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
              >
                {/* hover fill */}
                <div className="absolute inset-0 origin-bottom scale-y-0 bg-white/[0.035] transition-transform duration-700 group-hover:scale-y-100" />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <p className="text-[9px] font-semibold tracking-[0.3em] text-gold">
                      {item.label}
                    </p>

                    <span className="text-xl text-white/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-gold">
                      {"↗\uFE0E"}
                    </span>
                  </div>

                  <p className="mt-8 break-all text-2xl font-medium text-white md:text-3xl lg:text-4xl">
                    {item.title}
                  </p>

                  <p className="mt-5 text-sm leading-7 text-white/40">
                    {item.description}
                  </p>

                  <div className="mt-10 h-px w-10 bg-gold transition-all duration-700 group-hover:w-full" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* =======================================================
    03 / OUR OFFICE
======================================================= */}
      <div className="relative border-b border-white/15">
        <div className="container-shell relative py-20 md:py-28 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Office heading */}
            <div className="grid gap-10 lg:grid-cols-[0.5fr_1.5fr] lg:gap-12">
              <div>
                <div className="flex items-center gap-4">
                  <span className="h-px w-10 bg-gold" />

                  <p className="text-[10px] font-semibold tracking-[0.3em] text-gold">
                    OUR OFFICE
                  </p>
                </div>

                <p className="mt-4 text-[9px] tracking-[0.25em] text-white/25">
                  TAICHUNG / TAIWAN
                </p>
              </div>

              <div>
                <p className="max-w-4xl text-3xl font-medium leading-[1.4] tracking-[-0.03em] text-white md:text-5xl">
                  臺中市北屯區
                  <br />
                  文心路四段 61 號
                </p>

                <div className="mt-10 flex flex-col justify-between gap-8 border-t border-white/15 pt-7 md:flex-row md:items-center">
                  <p className="text-sm text-white/40">
                    Good Angel · Taichung City, Taiwan
                  </p>

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=臺中市北屯區文心路四段61號"
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-5 text-sm font-medium text-white/70 transition-colors hover:text-gold"
                  >
                    <span>開啟地圖</span>

                    <span className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                      {"↗\uFE0E"}
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Real office photo */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 1,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative mt-16 overflow-hidden md:mt-20 lg:mt-24"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden md:aspect-[16/9]">
                <Image
                  src="/images/office-lobby.jpg"
                  alt="好天使不動產財商團隊台中辦公室大廳"
                  fill
                  sizes="(max-width: 768px) 100vw, 1280px"
                  className="object-cover transition-transform duration-[1800ms] ease-out group-hover:scale-[1.025]"
                />

                {/* subtle image treatment */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-900/60 via-brand-900/5 to-transparent" />

                {/* Top number */}
                <div className="absolute right-5 top-5 border border-white/25 bg-brand-900/30 px-4 py-2 backdrop-blur-md md:right-8 md:top-8">
                  <span className="text-[9px] font-semibold tracking-[0.28em] text-white/75">
                    03 / OFFICE
                  </span>
                </div>

                {/* Bottom caption */}
                <div className="absolute inset-x-0 bottom-0 flex flex-col justify-between gap-4 p-6 md:flex-row md:items-end md:p-10">
                  <div>
                    <p className="text-[9px] font-semibold tracking-[0.32em] text-gold">
                      GOOD ANGEL
                    </p>

                    <p className="mt-2 text-xl font-medium text-white md:text-2xl">
                      我們所在的地方
                    </p>
                  </div>

                  <p className="text-[9px] tracking-[0.28em] text-white/55">
                    TAICHUNG · TAIWAN
                  </p>
                </div>
              </div>

              {/* Gold line */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.2,
                  delay: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="h-[2px] origin-left bg-gold"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
      {/* =======================================================
          04 / FINAL BRAND STATEMENT
      ======================================================= */}
      <div className="border-t border-white/15">
        <div className="container-shell relative py-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-between gap-10 md:flex-row md:items-end"
          >
            <div>
              <p className="text-3xl font-semibold tracking-[0.05em] text-white md:text-4xl">
                好天使
              </p>

              <p className="mt-3 text-[9px] tracking-[0.3em] text-white/30">
                GOOD ANGEL
              </p>
            </div>

            <div className="md:text-right">
              <p className="text-sm leading-7 text-white/40">
                不動產 × 財商 × 人才培育
              </p>

              <p className="mt-2 text-base font-medium text-white/65">
                與願意成長的人，一起走得更遠。
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom moving line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="h-[2px] origin-left bg-gold"
      />
    </section>
  );
}
