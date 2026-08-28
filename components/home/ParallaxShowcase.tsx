"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ParallaxShowcase() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["30px", "-30px"]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-brand-900 py-8 md:py-12"
    >
      <div className="container-shell">
        <motion.div
          initial={{
            clipPath: "inset(8% 6% 8% 6%)",
          }}
          whileInView={{
            clipPath: "inset(0% 0% 0% 0%)",
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 1.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative h-[75vh] min-h-[620px] overflow-hidden"
        >
          {/* Parallax Image */}
          <motion.div
            style={{
              y: imageY,
            }}
            className="absolute -inset-y-[12%] inset-x-0"
          >
            <Image
              src="/images/hero-team.png"
              alt="好天使團隊共同學習與交流"
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>

          {/* overlays */}
          <div className="absolute inset-0 bg-brand-900/20" />

          <div className="absolute inset-x-0 bottom-0 h-[70%] bg-gradient-to-t from-brand-900 via-brand-900/50 to-transparent" />

          <div className="absolute inset-y-0 left-0 w-[55%] bg-gradient-to-r from-brand-900/70 to-transparent" />

          {/* grid */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.35) 1px, transparent 1px)",
              backgroundSize: "72px 72px",
            }}
          />

          {/* Number */}
          <div className="absolute right-7 top-7 z-10 md:right-10 md:top-10">
            <p className="font-serif text-5xl font-light text-gold md:text-7xl">
              01
            </p>

            <p className="mt-2 text-right text-[8px] tracking-[0.3em] text-white/40">
              VISION
            </p>
          </div>

          {/* Main content */}
          <motion.div
            style={{
              y: textY,
            }}
            className="absolute bottom-10 left-7 right-7 z-10 md:bottom-14 md:left-12 md:right-12 lg:bottom-16 lg:left-16"
          >
            <div className="max-w-5xl">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                }}
                className="flex items-center gap-4"
              >
                <span className="h-px w-10 bg-gold" />

                <p className="text-[9px] font-semibold tracking-[0.32em] text-gold">
                  BUILD YOUR FUTURE
                </p>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.9,
                  delay: 0.25,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-7 max-w-5xl text-4xl font-semibold leading-[1.12] tracking-[-0.045em] text-white md:text-6xl lg:text-7xl"
              >
                不只是看見機會，
                <br />
                <span className="text-brand-200">更要有能力走向它。</span>
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.35,
                }}
                className="mt-9 flex flex-col justify-between gap-8 border-t border-white/20 pt-6 md:flex-row md:items-end"
              >
                <p className="max-w-xl text-sm leading-7 text-white/55 md:text-base md:leading-8">
                  專業來自持續理解市場、累積經驗，
                  也來自一群願意分享知識、彼此成就的夥伴。
                </p>

                <p className="text-[8px] tracking-[0.28em] text-white/35">
                  GOOD ANGEL / TAICHUNG
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
