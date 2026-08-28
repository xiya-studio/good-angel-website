"use client";

import { motion } from "framer-motion";

const words = [
  "真正的專業，",
  "不只是知道答案，",
  "而是知道如何",
  "做出判斷。",
];

export default function BrandQuote() {
  return (
    <section className="relative overflow-hidden bg-ivory text-brand-900">
      {/* background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 top-1/2 -translate-y-1/2 select-none text-[clamp(10rem,28vw,30rem)] font-semibold leading-none text-brand-900/[0.018]"
      >
        GA
      </div>

      <div className="container-shell relative py-28 md:py-40 lg:py-52">
        {/* top */}
        <div className="flex items-center justify-between border-t border-brand-900/15 pt-6">
          <div className="flex items-center gap-4">
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-px bg-gold"
            />

            <p className="text-[9px] font-semibold tracking-[0.32em] text-gold">
              OUR BELIEF
            </p>
          </div>

          <p className="hidden text-[8px] tracking-[0.28em] text-brand-900/30 sm:block">
            GOOD ANGEL © 2026
          </p>
        </div>

        {/* Quote */}
        <div className="mx-auto mt-20 max-w-6xl md:mt-28">
          {words.map((word, index) => (
            <div key={word} className="overflow-hidden">
              <motion.p
                initial={{
                  y: "110%",
                  opacity: 0,
                }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.6,
                }}
                transition={{
                  duration: 0.9,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`text-[clamp(2.5rem,6.5vw,6.5rem)] font-semibold leading-[1.08] tracking-[-0.055em] ${
                  index >= 2 ? "text-brand-600" : "text-brand-900"
                }`}
              >
                {word}
              </motion.p>
            </div>
          ))}
        </div>

        {/* bottom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          className="mt-20 flex flex-col justify-between gap-8 border-t border-brand-900/15 pt-7 md:mt-28 md:flex-row md:items-start"
        >
          <p className="max-w-lg text-sm leading-7 text-muted">
            從知識到實務，從個人成長到團隊合作，
            我們希望每一次累積，都能讓下一次選擇更加清楚。
          </p>

          <div className="flex items-center gap-4">
            <span className="font-serif text-4xl text-gold">∞</span>

            <p className="text-[8px] leading-5 tracking-[0.25em] text-brand-900/35">
              KEEP LEARNING
              <br />
              KEEP GROWING
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
