"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fields = [
  {
    number: "01",
    english: "REAL ESTATE",
    title: "不動產實務",
    description:
      "從市場資訊、物件分析到實際購屋流程，在真實案例中逐步建立對不動產市場的理解與判斷能力。",
  },
  {
    number: "02",
    english: "FINANCIAL LITERACY",
    title: "財商思維",
    description:
      "理解稅務、資產配置與財務規劃的基本邏輯，把零散的知識轉化成能實際運用的專業能力。",
  },
  {
    number: "03",
    english: "PROFESSIONAL GROWTH",
    title: "專業成長",
    description:
      "透過團隊交流、經驗分享與持續學習，在累積實務經驗的同時，探索適合自己的職涯發展方向。",
  },
];

export default function About() {
  return (
    <section className="relative overflow-hidden bg-ivory text-brand-900">
      {/* Giant background word */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 top-12 select-none text-[clamp(8rem,22vw,24rem)] font-semibold leading-none tracking-[-0.08em] text-brand-900/[0.025]"
      >
        ABOUT
      </div>

      <div className="container-shell relative py-24 md:py-32 lg:py-40">
        <div className="grid gap-16 lg:grid-cols-[0.82fr_1.18fr] lg:gap-24">
          {/* Sticky left side */}
          <div className="lg:sticky lg:top-28 lg:self-start">
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
                <span className="h-px w-10 bg-gold" />

                <p className="text-[10px] font-semibold tracking-[0.3em] text-gold">
                  ABOUT GOOD ANGEL
                </p>
              </div>

              <h2 className="mt-7 max-w-md text-4xl font-semibold leading-[1.12] tracking-[-0.045em] md:text-5xl lg:text-6xl">
                不只是學習，
                <br />
                更是
                <span className="text-brand-600"> 成長系統。</span>
              </h2>

              <p className="mt-8 max-w-sm text-sm leading-7 text-muted md:text-base md:leading-8">
                不動產 × 財商 × 人才培育
              </p>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.9,
                  delay: 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative mt-12 min-h-[640px] overflow-hidden lg:min-h-[720px]"
              >
                <Image
                  src="/images/about-team.png"
                  alt="好天使團隊交流與學習"
                  fill
                  className="object-cover transition-transform duration-[1400ms] hover:scale-[1.025]"
                  sizes="(max-width: 1024px) 100vw, 36vw"
                />

                <div className="absolute inset-0 bg-brand-900/10" />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-900/60 via-brand-900/10 to-transparent px-6 pb-6 pt-20">
                  <div className="flex items-center justify-between text-ivory">
                    <p className="text-[9px] font-medium tracking-[0.24em]">
                      GOOD ANGEL · TAICHUNG
                    </p>

                    <span className="text-[10px] tracking-[0.2em] text-gold">
                      01
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* decorative index */}
              <div className="mt-6 hidden items-end gap-4 lg:flex">
                <span className="font-serif text-7xl font-light leading-none text-gold">
                  03
                </span>

                <span className="pb-2 text-[10px] tracking-[0.28em] text-brand-900/35">
                  CORE FIELDS
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right content */}
          <div>
            {/* Intro */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="border-t border-brand-900/15 pt-10"
            >
              <h3 className="max-w-4xl text-3xl font-semibold leading-[1.35] tracking-[-0.035em] md:text-5xl md:leading-[1.22]">
                我們不只分享知識，
                <br />
                更希望陪伴每一位夥伴
                <span className="text-brand-600"> 建立自己的專業。</span>
              </h3>

              <p className="mt-8 max-w-3xl text-base leading-8 text-muted md:text-lg md:leading-9">
                好天使不動產財商團隊結合不動產實務、財商教育與人才培育，
                透過學習、交流與實務經驗的累積，讓不同背景的夥伴逐步理解產業，
                建立判斷能力，也找到屬於自己的成長方向。
              </p>
            </motion.div>

            {/* Fields */}
            <div className="mt-16 border-t border-brand-900/15">
              {fields.map((item, index) => (
                <motion.article
                  key={item.number}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative border-b border-brand-900/15 py-10 md:py-14"
                >
                  {/* hover background */}
                  <div className="absolute inset-0 origin-left scale-x-0 bg-brand-900/[0.025] transition-transform duration-700 group-hover:scale-x-100" />

                  <div className="relative grid gap-6 md:grid-cols-[110px_1fr_1.2fr] md:items-center">
                    <div>
                      <p className="font-serif text-5xl font-light text-gold">
                        {item.number}
                      </p>

                      <p className="mt-3 text-[8px] tracking-[0.25em] text-brand-900/35">
                        {item.english}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-brand-600 md:text-3xl">
                        {item.title}
                      </h3>
                    </div>

                    <div className="flex items-center justify-between gap-8">
                      <p className="max-w-xl text-sm leading-7 text-muted md:text-base md:leading-8">
                        {item.description}
                      </p>

                      <span className="hidden text-2xl text-gold transition-transform duration-500 group-hover:translate-x-2 md:block">
                        →
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Closing statement */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-16 grid gap-8 border-t border-brand-900/15 pt-12 md:grid-cols-[0.35fr_1.65fr]"
            >
              <p className="text-[10px] font-semibold tracking-[0.28em] text-gold">
                OUR PURPOSE
              </p>

              <div>
                <p className="max-w-4xl text-xl font-medium leading-[1.75] md:text-3xl md:leading-[1.65]">
                  我們相信，一個人的起點不代表終點。
                  <span className="text-brand-600">
                    {" "}
                    願意學習、願意累積、願意與團隊一起前進，
                  </span>
                  就有機會走出自己的專業道路。
                </p>

                <div className="mt-10 h-px w-full overflow-hidden bg-brand-900/10">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.4,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="h-full bg-gold"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
