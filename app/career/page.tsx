"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";

const qualities = [
  {
    number: "01",
    title: "願意學習",
    description:
      "不需要一開始就熟悉所有不動產與財商知識，我們更重視你是否願意理解產業、主動學習並持續累積。",
  },
  {
    number: "02",
    title: "願意交流",
    description:
      "我們相信好的團隊來自彼此分享觀點與經驗，願意溝通、傾聽與合作，是一起前進的重要基礎。",
  },
  {
    number: "03",
    title: "願意成長",
    description:
      "每個人的起點與專長都不同，重要的是願意從實務中累積經驗，逐步建立自己的專業方向。",
  },
];

const areas = [
  "不動產市場與實務",
  "財商觀念與資產思維",
  "案例討論與經驗交流",
  "團隊合作與專業成長",
];

export default function CareerPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* =====================================================
            PAGE HERO
        ===================================================== */}
        <PageHero
          eyebrow="JOIN GOOD ANGEL"
          title="加入好天使"
          description="我們正在尋找願意學習、願意交流，也願意和團隊一起成長的夥伴。你的起點不必相同，但我們可以朝同一個方向前進。"
        />

        {/* =====================================================
            WHO WE ARE LOOKING FOR
        ===================================================== */}
        <section className="relative overflow-hidden bg-ivory text-brand-900">
          {/* Background word */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 top-10 select-none text-[clamp(7rem,18vw,18rem)] font-semibold leading-none tracking-[-0.07em] text-brand-900/[0.025]"
          >
            PEOPLE
          </div>

          <div className="container-shell relative py-24 md:py-32 lg:py-36">
            <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
              {/* LEFT */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex items-center gap-4"
                >
                  <span className="h-px w-8 bg-gold" />

                  <p className="text-[10px] font-semibold tracking-[0.28em] text-gold">
                    WHO WE ARE LOOKING FOR
                  </p>
                </motion.div>

                {/* Career Image */}
                <motion.div
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.9,
                    delay: 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative mt-10 aspect-[4/5] w-full overflow-hidden bg-brand-900/5"
                >
                  <Image
                    src="/images/career-team.png"
                    alt="好天使團隊交流與職涯成長"
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover object-center transition-transform duration-[1400ms] hover:scale-[1.025]"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-brand-900/10" />

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-900/75 via-brand-900/15 to-transparent px-6 pb-6 pt-24">
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-[9px] font-medium tracking-[0.28em] text-gold">
                          PEOPLE · LEARNING · GROWTH
                        </p>

                        <p className="mt-2 text-sm text-white/70">
                          GOOD ANGEL · TAICHUNG
                        </p>
                      </div>

                      <span className="text-[10px] tracking-[0.2em] text-white/60">
                        01
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* RIGHT */}
              <div className="lg:pt-16">
                <motion.div
                  initial={{ opacity: 0, y: 45 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.9,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <h2 className="max-w-4xl text-3xl font-semibold leading-[1.28] tracking-[-0.035em] md:text-5xl lg:text-6xl">
                    我們在找的，
                    <br />
                    <span className="text-brand-600">不只是漂亮的履歷。</span>
                  </h2>

                  <p className="mt-8 max-w-3xl text-base leading-8 text-muted md:text-lg md:leading-9">
                    經驗與專業可以持續累積。
                    比起一開始就什麼都會，我們更在意一個人面對新事物的態度，
                    以及是否願意與團隊共同前進。
                  </p>
                </motion.div>

                <div className="mt-14 border-t border-brand-900/15">
                  {qualities.map((item, index) => (
                    <motion.article
                      key={item.number}
                      initial={{ opacity: 0, y: 35 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{
                        duration: 0.75,
                        delay: index * 0.08,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="group relative border-b border-brand-900/15 py-9"
                    >
                      <div className="absolute inset-0 origin-left scale-x-0 bg-brand-900/[0.025] transition-transform duration-700 group-hover:scale-x-100" />

                      <div className="relative grid gap-5 md:grid-cols-[80px_0.75fr_1.25fr] md:items-start">
                        <span className="font-serif text-4xl font-light text-gold">
                          {item.number}
                        </span>

                        <h3 className="text-2xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-brand-600">
                          {item.title}
                        </h3>

                        <p className="leading-8 text-muted">
                          {item.description}
                        </p>
                      </div>

                      <span className="absolute bottom-0 left-0 h-px w-0 bg-gold transition-all duration-700 group-hover:w-full" />
                    </motion.article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            WHAT YOU WILL EXPLORE
        ===================================================== */}
        <section className="relative overflow-hidden bg-paper text-brand-900">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-6 bottom-[-3rem] select-none text-[clamp(7rem,20vw,20rem)] font-semibold leading-none tracking-[-0.07em] text-brand-900/[0.02]"
          >
            GROW
          </div>

          <div className="container-shell relative py-24 md:py-32 lg:py-36">
            <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="flex items-center gap-4">
                  <span className="h-px w-8 bg-gold" />

                  <p className="text-[10px] font-semibold tracking-[0.28em] text-gold">
                    WHAT YOU WILL EXPLORE
                  </p>
                </div>

                <h2 className="mt-7 max-w-2xl text-3xl font-semibold leading-[1.3] tracking-[-0.035em] md:text-5xl">
                  在這裡，
                  <br />
                  <span className="text-brand-600">專業從實際參與開始。</span>
                </h2>

                <p className="mt-8 max-w-xl text-base leading-8 text-muted md:text-lg md:leading-9">
                  好天使結合不動產實務、財商教育與人才培育。
                  在參與團隊的過程中，你會逐步接觸不同領域的知識與經驗。
                </p>
              </motion.div>

              <div className="border-t border-brand-900/15">
                {areas.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 35 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="group relative flex items-center justify-between gap-6 border-b border-brand-900/15 py-8"
                  >
                    <div className="flex items-center gap-6">
                      <span className="font-serif text-3xl font-light text-gold">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <p className="text-lg font-medium transition-colors duration-300 group-hover:text-brand-600 md:text-xl">
                        {item}
                      </p>
                    </div>

                    <span className="text-xl text-gold transition-transform duration-300 group-hover:translate-x-2">
                      →
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            RECRUITMENT CTA
        ===================================================== */}
        <section className="relative overflow-hidden bg-brand-900 text-ivory">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-[-2vw] left-1/2 -translate-x-1/2 select-none whitespace-nowrap text-[clamp(5rem,14vw,14rem)] font-semibold leading-none tracking-[-0.06em] text-white/[0.025]"
          >
            JOIN US
          </div>

          <div className="container-shell relative py-24 md:py-28 lg:py-32">
            <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-24">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <p className="text-[10px] font-semibold tracking-[0.28em] text-gold">
                  START YOUR NEXT CHAPTER
                </p>

                <h2 className="mt-7 max-w-4xl text-4xl font-semibold leading-[1.18] tracking-[-0.045em] md:text-6xl">
                  如果你也想看看，
                  <br />
                  <span className="text-brand-200">自己還能走到哪裡。</span>
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <p className="max-w-xl text-base leading-8 text-white/60">
                  想進一步了解團隊、工作機會或加入方式，歡迎直接與好天使聯絡。
                </p>

                <Link
                  href="/contact"
                  className="group mt-9 inline-flex min-w-[210px] items-center justify-between bg-yellow] px-7 py-4 text-sm font-semibold tracking-wide text-[#1f3326] transition-all duration-300 hover:bg-yellow-hover"
                >
                  <span>與我們聯絡</span>

                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  >
                    {"↗\uFE0E"}
                  </span>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
