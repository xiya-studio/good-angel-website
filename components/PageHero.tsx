"use client";

import { motion } from "framer-motion";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  number?: string;
  backgroundText?: string;
};

export default function PageHero({
  eyebrow,
  title,
  description,
  number = "01",
  backgroundText = "GOOD ANGEL",
}: PageHeroProps) {
  return (
    <section className="relative min-h-[72vh] overflow-hidden bg-brand-900 pt-20 text-ivory">
      {/* Background Typography */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute bottom-[-2vw] left-1/2 -translate-x-1/2 whitespace-nowrap text-[clamp(5rem,15vw,14rem)] font-semibold leading-none tracking-[-0.06em] text-white/[0.035]"
        >
          {backgroundText}
        </motion.p>

        <div className="absolute left-[8%] top-0 h-full w-px bg-white/[0.05]" />
        <div className="absolute right-[8%] top-0 h-full w-px bg-white/[0.05]" />
        <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-white/[0.03] lg:block" />
      </div>

      <div className="container-shell relative flex min-h-[calc(72vh-5rem)] flex-col justify-between py-16 md:py-20 lg:py-24">
        {/* Top */}
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="flex items-center gap-4">
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: 32 }}
                transition={{
                  duration: 0.8,
                  delay: 0.25,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="h-px bg-gold"
              />

              <p className="text-xs font-medium tracking-[0.28em] text-brand-200">
                {eyebrow}
              </p>
            </div>
          </motion.div>

          {/* Content */}
          <div>
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-white sm:text-5xl lg:text-7xl"
              >
                {title}
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.85,
                delay: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-8 max-w-2xl text-base leading-8 text-white/55 md:text-lg md:leading-9"
            >
              {description}
            </motion.p>
          </div>
        </div>

        {/* Bottom Meta */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="mt-16 flex items-end justify-between border-t border-white/10 pt-5"
        >
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-medium tracking-[0.24em] text-white/40">
              GOOD ANGEL
            </span>

            <span className="h-px w-8 bg-gold/60" />

            <span className="text-[10px] font-medium tracking-[0.24em] text-white/40">
              TAICHUNG · TAIWAN
            </span>
          </div>

          <span className="text-sm font-medium tracking-[0.2em] text-gold">
            {number}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
