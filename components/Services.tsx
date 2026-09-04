"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const growthPoints = [
  {
    number: "01",
    eyebrow: "LEARNING",
    title: "從學習開始",
    description:
      "透過不動產、財商與市場相關知識的累積，逐步建立對產業的理解，讓專業不是背答案，而是真的知道如何判斷。",
  },
  {
    number: "02",
    eyebrow: "PRACTICE",
    title: "從實務累積經驗",
    description:
      "把學到的觀念帶進真實案例與工作情境，在一次次接觸與討論中，累積屬於自己的實務經驗。",
  },
  {
    number: "03",
    eyebrow: "TEAMWORK",
    title: "和團隊一起前進",
    description:
      "透過交流、經驗分享與彼此協作，讓遇到的問題不必只靠自己摸索，也讓不同背景的經驗能彼此成為養分。",
  },
  {
    number: "04",
    eyebrow: "GROWTH",
    title: "找到自己的發展方向",
    description:
      "在持續學習與實務累積的過程中，更了解自己的能力與興趣，逐步探索適合自己的專業與職涯方向。",
  },
];

export default function Services() {
  return (
    <section className="relative overflow-hidden bg-paper text-brand-900">
      {/* Giant Background Text */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-8 top-24 select-none text-[clamp(8rem,20vw,22rem)] font-semibold leading-none tracking-[-0.08em] text-brand-900/[0.025]"
      >
        GROW
      </div>

      <div className="container-shell relative py-24 md:py-32 lg:py-40">
        <div className="grid gap-16 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
          {/* LEFT / STICKY */}
          <div className="lg:sticky lg:top-32 lg:self-start">
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
                  transition={{ duration: 0.8 }}
                  className="h-px bg-gold"
                />

                <p className="text-[10px] font-semibold tracking-[0.3em] text-gold">
                  WHY GOOD ANGEL
                </p>
              </div>

              <h2 className="mt-7 max-w-md text-4xl font-semibold leading-[1.12] tracking-[-0.045em] md:text-5xl lg:text-6xl">
                從加入，
                <br />
                到成為
                <span className="text-brand-600"> 更好的自己。</span>
              </h2>

              <p className="mt-8 max-w-sm text-sm leading-7 text-muted md:text-base">
                Learning · Practice
                <br />
                Teamwork · Growth
              </p>

              {/* Progress */}
              <div className="mt-14 hidden lg:block">
                <div className="flex items-end gap-4">
                  <span className="font-serif text-7xl font-light leading-none text-gold">
                    04
                  </span>

                  <span className="pb-2 text-[9px] tracking-[0.28em] text-brand-900/35">
                    GROWTH STAGES
                  </span>
                </div>

                <div className="mt-8 h-px max-w-[220px] bg-brand-900/10">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.2,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="h-full bg-gold"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT */}
          <div>
            {/* Intro */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="border-t border-brand-900/15 pt-10"
            >
              <h3 className="max-w-4xl text-3xl font-semibold leading-[1.3] tracking-[-0.035em] md:text-5xl md:leading-[1.2]">
                一份工作的價值，
                <br />
                不只在今天做了什麼，
                <br />
                <span className="text-brand-600">也在明天成為什麼樣的人。</span>
              </h3>

              <p className="mt-8 max-w-2xl text-base leading-8 text-muted md:text-lg md:leading-9">
                我們重視知識的累積，也重視實務經驗與團隊交流。
                在好天使，每一次學習與參與，都能成為建立專業能力的一部分。
              </p>
            </motion.div>

            {/* Growth Timeline */}
            <div className="relative mt-20">
              {/* Timeline line */}
              <div className="absolute bottom-0 left-[27px] top-0 w-px bg-brand-900/10 md:left-[39px]">
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%" }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 1.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="w-full bg-gold"
                />
              </div>

              {growthPoints.map((item, index) => (
                <motion.article
                  key={item.number}
                  initial={{
                    opacity: 0,
                    y: 60,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.3,
                  }}
                  transition={{
                    duration: 0.85,
                    delay: index * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative grid min-h-[260px] grid-cols-[56px_1fr] border-t border-brand-900/15 py-12 md:min-h-[320px] md:grid-cols-[80px_1fr] md:py-16"
                >
                  {/* Number */}
                  <div className="relative z-10">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-brand-900/15 bg-paper transition-all duration-500 group-hover:border-gold group-hover:bg-brand-900 md:h-20 md:w-20">
                      <span className="font-serif text-xl text-gold transition-colors duration-500 group-hover:text-ivory md:text-2xl">
                        {item.number}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative pl-7 md:pl-12">
                    <p className="text-[9px] font-semibold tracking-[0.3em] text-gold">
                      {item.eyebrow}
                    </p>

                    <h3 className="mt-5 text-2xl font-semibold tracking-[-0.025em] transition-transform duration-500 group-hover:translate-x-2 md:text-4xl">
                      {item.title}
                    </h3>

                    <p className="mt-6 max-w-2xl text-sm leading-7 text-muted md:text-base md:leading-8">
                      {item.description}
                    </p>

                    <div className="mt-8 flex items-center gap-4">
                      <span className="h-px w-8 bg-gold transition-all duration-700 group-hover:w-20" />

                      <span className="translate-x-[-8px] text-[9px] tracking-[0.25em] text-brand-900/30 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">
                        KEEP GROWING
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* GROW WITH US */}
      <div className="relative overflow-hidden bg-brand-900 text-ivory">
        {/* Huge background typography */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-12 left-0 select-none whitespace-nowrap text-[clamp(7rem,18vw,18rem)] font-semibold leading-none tracking-[-0.07em] text-white/[0.025]"
        >
          JOIN US
        </div>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute left-0 top-0 h-px w-full origin-left bg-gold/60"
        />

        <div className="container-shell relative py-24 md:py-32">
          <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <p className="text-[10px] font-semibold tracking-[0.32em] text-gold">
                GROW WITH US
              </p>

              <h3 className="mt-7 max-w-4xl text-4xl font-semibold leading-[1.15] tracking-[-0.045em] md:text-6xl lg:text-7xl">
                我們尋找的，
                <br />
                不只是已經
                <span className="text-brand-200"> 準備好的人。</span>
              </h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                delay: 0.1,
              }}
            >
              <p className="max-w-xl text-base leading-8 text-white/55">
                比起一開始就什麼都會，我們更期待願意理解產業、持續學習，
                並且願意與團隊共同累積經驗的夥伴。
              </p>

              <Link
                href="/career"
                className="group mt-10 inline-flex min-w-[220px] items-center justify-between bg-yellow px-7 py-4 text-sm font-semibold tracking-wide text-brand-900 transition-colors duration-300 hover:bg-yellow-hover"
              >
                <span>加入好天使</span>

                <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  {"↗\uFE0E"}
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
