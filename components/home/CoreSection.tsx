"use client";

import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    english: "REAL ESTATE",
    title: "不動產實務",
    description:
      "從市場判讀、物件理解到實際交易情境，建立能真正應用於市場的專業能力。",
  },
  {
    number: "02",
    english: "FINANCIAL EDUCATION",
    title: "財商教育",
    description:
      "從資產配置、財務觀念與風險理解出發，培養做出長期選擇的思考能力。",
  },
  {
    number: "03",
    english: "TALENT GROWTH",
    title: "人才培育",
    description:
      "我們不只提供知識，更透過團隊、制度與實戰，陪伴每一位夥伴持續成長。",
  },
];

export default function CoreSection() {
  return (
    <section className="relative overflow-hidden bg-brand-900 py-24 text-ivory md:py-36">
      {/* giant background number */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 top-10 select-none text-[22rem] font-semibold leading-none text-white/[0.015]"
      >
        03
      </div>

      <div className="container-shell relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 flex flex-col justify-between gap-8 md:flex-row md:items-end"
        >
          <div>
            <p className="text-[10px] tracking-[0.32em] text-gold">
              WHAT WE DO
            </p>

            <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
              三個核心，
              <br />
              <span className="text-brand-200">一個成長方向。</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-white/50">
            從專業知識到實際應用，好天使希望建立的不只是能力，
            而是一套能持續累積的成長方式。
          </p>
        </motion.div>

        <div className="border-t border-white/15">
          {services.map((service, index) => (
            <motion.article
              key={service.number}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 0.8,
                delay: index * 0.08,
              }}
              className="group relative grid gap-6 border-b border-white/15 py-10 transition-colors duration-500 md:grid-cols-[120px_1fr_1fr] md:items-center md:py-14"
            >
              <div className="absolute inset-0 origin-left scale-x-0 bg-white/[0.035] transition-transform duration-700 group-hover:scale-x-100" />

              <p className="relative font-serif text-5xl text-gold">
                {service.number}
              </p>

              <div className="relative">
                <p className="text-[9px] tracking-[0.3em] text-white/35">
                  {service.english}
                </p>

                <h3 className="mt-3 text-2xl font-semibold md:text-3xl">
                  {service.title}
                </h3>
              </div>

              <div className="relative flex items-center justify-between gap-8">
                <p className="max-w-md text-sm leading-7 text-white/50">
                  {service.description}
                </p>

                <span className="text-2xl text-gold transition-transform duration-500 group-hover:translate-x-2">
                  →
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
