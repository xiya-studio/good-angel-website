"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "01",
    title: "不動產實務",
    description: "從市場理解到實務應用，建立真正能帶走的專業能力。",
  },
  {
    number: "02",
    title: "財商教育",
    description: "理解資產、風險與選擇，建立更完整的財務思維。",
  },
  {
    number: "03",
    title: "人才培育",
    description: "透過學習、陪伴與實戰，讓每一位夥伴找到成長方向。",
  },
  {
    number: "04",
    title: "團隊共好",
    description: "我們相信長期價值，來自一群願意彼此成就的人。",
  },
];

export default function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-paper py-24 text-brand-900 md:py-32">
      <div className="container-shell">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[10px] font-semibold tracking-[0.32em] text-gold">
              OUR FOUNDATION
            </p>

            <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-6xl">
              成長不是一句
              <br />
              <span className="text-brand-500">口號。</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2">
            {stats.map((stat, index) => (
              <motion.article
                key={stat.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                className="group border-t border-brand-900/15 py-8 sm:px-8 sm:odd:border-r"
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif text-4xl text-gold">
                    {stat.number}
                  </span>

                  <span className="translate-x-2 text-brand-900/20 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                    {"↗\uFE0E"}
                  </span>
                </div>

                <h3 className="mt-8 text-xl font-semibold">{stat.title}</h3>

                <p className="mt-4 max-w-sm text-sm leading-7 text-muted">
                  {stat.description}
                </p>

                <div className="mt-8 h-px w-0 bg-gold transition-all duration-700 group-hover:w-full" />
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
