"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

const pillars = [
  {
    number: "01",
    title: "不動產實務",
    english: "REAL ESTATE",
  },
  {
    number: "02",
    title: "財商教育",
    english: "FINANCE",
  },
  {
    number: "03",
    title: "人才培育",
    english: "GROWTH",
  },
];

export default function Hero() {
  const { scrollY } = useScroll();

  const imageY = useTransform(scrollY, [0, 800], [0, 35]);
  const contentY = useTransform(scrollY, [0, 800], [0, -18]);

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-brand-900 text-ivory"
    >
      {/* Background Typography */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1.4,
          delay: 0.6,
        }}
        className="pointer-events-none absolute left-[4%] top-28 select-none text-[clamp(7rem,18vw,18rem)] font-semibold leading-none tracking-[-0.08em] text-white/[0.018]"
      >
        GOOD
      </motion.div>

      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1.4,
          delay: 0.8,
        }}
        className="pointer-events-none absolute -bottom-10 left-[2%] select-none text-[clamp(7rem,17vw,17rem)] font-semibold leading-none tracking-[-0.08em] text-white/[0.018]"
      >
        ANGEL
      </motion.div>

      {/* Decorative vertical lines */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[4%] top-0 h-full w-px bg-white/[0.05]" />
        <div className="absolute right-[4%] top-0 h-full w-px bg-white/[0.05]" />
      </div>

      <div className="relative min-h-screen">
        <div className="grid min-h-screen lg:grid-cols-[52%_48%]">
          {/* LEFT */}
          <div className="relative z-20 flex items-center">
            <div className="container-shell w-full pb-20 pt-32 lg:pb-20 lg:pr-12 lg:pt-32">
              <motion.div style={{ y: contentY }} className="max-w-3xl">
                {/* Eyebrow */}
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex items-center gap-4"
                >
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: 40 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.3,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="h-px bg-gold"
                  />

                  <p className="text-[11px] font-medium tracking-[0.3em] text-gold">
                    JOIN GOOD ANGEL
                  </p>
                </motion.div>

                {/* Heading */}
                <h1 className="mt-8 text-[clamp(2.8rem,5.4vw,5.7rem)] font-semibold leading-[1.03] tracking-[-0.055em]">
                  <span className="block overflow-hidden">
                    <motion.span
                      initial={{ y: "110%" }}
                      animate={{ y: 0 }}
                      transition={{
                        duration: 0.95,
                        delay: 0.2,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="block"
                    >
                      和一群對的人，
                    </motion.span>
                  </span>

                  <span className="block overflow-hidden">
                    <motion.span
                      initial={{ y: "110%" }}
                      animate={{ y: 0 }}
                      transition={{
                        duration: 0.95,
                        delay: 0.32,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="block text-brand-200"
                    >
                      做值得成長的事。
                    </motion.span>
                  </span>
                </h1>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.48,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="mt-8 max-w-xl text-base leading-8 text-white/60 md:text-lg md:leading-9"
                >
                  好天使不動產財商團隊結合不動產實務、財商教育與人才培育，
                  透過專業學習與團隊陪伴，讓不同背景的夥伴建立自己的專業能力與職涯方向。
                </motion.p>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.62,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="mt-10 flex flex-col gap-4 sm:flex-row"
                >
                  <Link
                    href="/career"
                    className="group inline-flex min-w-[190px] items-center justify-between bg-[#c7d98f] px-7 py-4 text-sm font-semibold tracking-wide text-[#1f3326] transition-all duration-300 hover:bg-[#dbe8b4]"
                  >
                    <span>加入好天使</span>

                    <span
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    >
                      ↗
                    </span>
                  </Link>

                  <Link
                    href="/about"
                    className="group inline-flex min-w-[190px] items-center justify-between border border-white/25 px-7 py-4 text-sm font-medium tracking-wide text-white/90 transition-all duration-300 hover:border-brand-200 hover:bg-brand-200 hover:text-brand-900"
                  >
                    <span>認識我們</span>

                    <span
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                </motion.div>

                {/* Pillars */}
                <div className="mt-16 grid max-w-2xl grid-cols-1 gap-0 border-t border-white/15 sm:grid-cols-3">
                  {pillars.map((pillar, index) => (
                    <motion.div
                      key={pillar.number}
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.7,
                        delay: 0.75 + index * 0.08,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="group relative border-b border-white/15 py-6 sm:border-b-0 sm:border-r sm:px-6 sm:first:pl-0 sm:last:border-r-0"
                    >
                      <p className="font-serif text-3xl text-gold">
                        {pillar.number}
                      </p>

                      <p className="mt-3 text-sm font-medium tracking-wide text-white/90">
                        {pillar.title}
                      </p>

                      <p className="mt-2 text-[9px] tracking-[0.25em] text-white/35">
                        {pillar.english}
                      </p>

                      <span className="absolute bottom-0 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* RIGHT IMAGE AREA */}
          <div className="relative min-h-[560px] overflow-hidden lg:min-h-screen">
            {/* Image reveal */}
            <motion.div
              initial={{
                clipPath: "inset(0 100% 0 0)",
              }}
              animate={{
                clipPath: "inset(0 0% 0 0)",
              }}
              transition={{
                duration: 1.25,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute inset-0"
            >
              <motion.div
                style={{ y: imageY }}
                initial={{ scale: 1.08 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 1.5,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute -inset-y-10 inset-x-0"
              >
                <Image
                  src="/images/hero-team.png"
                  alt="好天使團隊共同討論與學習"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  className="object-cover object-center"
                />
              </motion.div>
            </motion.div>

            {/* Image Overlay */}
            <div className="pointer-events-none absolute inset-0 z-[1] bg-brand-900/10" />

            {/* Left Blend */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-[2] w-[38%] bg-gradient-to-r from-brand-900 via-brand-900/60 to-transparent" />

            {/* Top Blend */}
            <div className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-32 bg-gradient-to-b from-brand-900/35 to-transparent lg:h-40" />

            {/* Bottom Blend */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[38%] bg-gradient-to-t from-brand-900/80 via-brand-900/30 to-transparent" />

            {/* Grid */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-[3] opacity-[0.05]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)",
                backgroundSize: "64px 64px",
              }}
            />

            {/* Gold diagonal line */}
            <motion.div
              aria-hidden="true"
              initial={{
                scaleY: 0,
              }}
              animate={{
                scaleY: 1,
              }}
              transition={{
                duration: 1,
                delay: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute -left-12 top-[10%] z-20 hidden h-[60%] w-px origin-top rotate-[18deg] bg-gold/60 lg:block"
            />

            {/* Slide number */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.75,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute right-10 top-28 z-20 text-right lg:top-32"
            >
              <p className="font-serif text-6xl font-light leading-none text-gold/80">
                01
              </p>

              <p className="mt-2 text-sm tracking-[0.2em] text-white/50">
                / 05
              </p>
            </motion.div>

            {/* Bottom information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute bottom-10 left-10 right-10 z-20"
            >
              <div className="flex items-end justify-between border-t border-white/20 pt-5">
                <div>
                  <p className="text-[9px] tracking-[0.3em] text-gold">
                    GROW TOGETHER
                  </p>

                  <p className="mt-2 max-w-xs text-sm leading-6 text-white/55">
                    REAL ESTATE · FINANCE · GROWTH
                  </p>
                </div>

                <span className="hidden text-[9px] tracking-[0.25em] text-white/30 sm:block">
                  GOOD ANGEL © 2026
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 1.15,
        }}
        className="pointer-events-none absolute bottom-7 left-1/2 z-30 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
      >
        <span className="text-[8px] tracking-[0.3em] text-white/35">
          SCROLL
        </span>

        <motion.span
          animate={{
            y: [0, 6, 0],
          }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-gold/70"
        >
          ↓
        </motion.span>
      </motion.div>
    </section>
  );
}
