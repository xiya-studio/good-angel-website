import Link from "next/link";
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
        {/* Page Hero */}
        <PageHero
          eyebrow="JOIN GOOD ANGEL"
          title="加入好天使"
          description="我們正在尋找願意學習、願意交流，也願意和團隊一起成長的夥伴。你的起點不必相同，但我們可以朝同一個方向前進。"
        />

        {/* Who We Are Looking For */}
        <section className="bg-ivory">
          <div className="container-shell section-space">
            <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              <div>
                <div className="flex items-center gap-4">
                  <span className="h-px w-8 bg-gold" />

                  <p className="text-xs font-medium tracking-[0.25em] text-gold">
                    WHO WE ARE LOOKING FOR
                  </p>
                </div>
              </div>

              <div>
                <h2 className="max-w-4xl text-3xl font-semibold leading-[1.35] tracking-[-0.03em] text-brand-900 md:text-5xl">
                  我們在找的，
                  <br />
                  <span className="text-brand-600">不只是漂亮的履歷。</span>
                </h2>

                <p className="mt-7 max-w-3xl text-base leading-8 text-muted md:text-lg">
                  經驗與專業可以持續累積。
                  比起一開始就什麼都會，我們更在意一個人面對新事物的態度，
                  以及是否願意與團隊共同前進。
                </p>
              </div>
            </div>

            <div className="mt-16 grid border-t border-brand-900/15 md:grid-cols-3">
              {qualities.map((item) => (
                <article
                  key={item.number}
                  className="group border-b border-brand-900/15 py-9 md:border-r md:px-8 md:py-12 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
                >
                  <span className="text-xs font-medium tracking-[0.2em] text-gold">
                    {item.number}
                  </span>

                  <h3 className="mt-8 text-2xl font-semibold tracking-tight text-brand-900">
                    {item.title}
                  </h3>

                  <p className="mt-5 leading-8 text-muted">
                    {item.description}
                  </p>

                  <div className="mt-8 h-px w-8 bg-gold transition-all duration-500 group-hover:w-16" />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* What You Will Explore */}
        <section className="bg-paper">
          <div className="container-shell section-space">
            <div className="grid gap-14 lg:grid-cols-2 lg:gap-24">
              <div>
                <div className="flex items-center gap-4">
                  <span className="h-px w-8 bg-gold" />

                  <p className="text-xs font-medium tracking-[0.25em] text-gold">
                    WHAT YOU WILL EXPLORE
                  </p>
                </div>

                <h2 className="mt-6 max-w-2xl text-3xl font-semibold leading-[1.35] tracking-[-0.03em] text-brand-900 md:text-5xl">
                  在這裡，
                  <br />
                  <span className="text-brand-600">專業從實際參與開始。</span>
                </h2>

                <p className="mt-7 max-w-xl leading-8 text-muted">
                  好天使結合不動產實務、財商教育與人才培育。
                  在參與團隊的過程中，你會逐步接觸不同領域的知識與經驗。
                </p>
              </div>

              <div className="border-t border-brand-900/15">
                {areas.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-6 border-b border-brand-900/15 py-7"
                  >
                    <span className="text-xs tracking-[0.2em] text-gold">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="text-lg font-medium text-brand-900 md:text-xl">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Recruitment CTA */}
        <section className="bg-brand-900 text-ivory">
          <div className="container-shell py-20 md:py-24">
            <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <p className="text-xs font-medium tracking-[0.25em] text-gold">
                  START YOUR NEXT CHAPTER
                </p>

                <h2 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.2] tracking-[-0.04em] md:text-6xl">
                  如果你也想看看，
                  <br />
                  <span className="text-brand-200">自己還能走到哪裡。</span>
                </h2>
              </div>

              <div>
                <p className="max-w-xl leading-8 text-white/60">
                  想進一步了解團隊、工作機會或加入方式， 歡迎直接與好天使聯絡。
                </p>

                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-12 bg-[#c7d98f] px-7 py-4 text-sm font-semibold text-[#1f3326] transition duration-300 hover:bg-brand-200"
                >
                  <span>與我們聯絡</span>
                  <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
