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
    <section className="bg-ivory">
      <div className="container-shell section-space">
        {/* Intro */}
        <div className="grid gap-10 border-b border-brand-900/15 pb-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <div className="flex items-center gap-4">
              <span className="h-px w-8 bg-gold" />

              <p className="text-xs font-medium tracking-[0.25em] text-gold">
                ABOUT GOOD ANGEL
              </p>
            </div>

            <p className="mt-6 text-sm leading-7 text-muted">
              不動產 × 財商 × 人才培育
            </p>
          </div>

          <div>
            <h2 className="max-w-4xl text-3xl font-semibold leading-[1.35] tracking-[-0.03em] text-brand-900 md:text-5xl md:leading-[1.25]">
              我們不只分享知識，
              <br />
              更希望陪伴每一位夥伴
              <span className="text-brand-600"> 建立自己的專業。</span>
            </h2>

            <p className="mt-8 max-w-3xl text-base leading-8 text-muted md:text-lg md:leading-9">
              好天使不動產財商團隊結合不動產實務、財商教育與人才培育，
              透過學習、交流與實務經驗的累積，讓不同背景的夥伴逐步理解產業，
              建立判斷能力，也找到屬於自己的成長方向。
            </p>
          </div>
        </div>

        {/* Fields */}
        <div className="grid md:grid-cols-3">
          {fields.map((item) => (
            <article
              key={item.number}
              className="group border-b border-brand-900/15 py-10 md:border-b-0 md:border-r md:px-8 md:py-14 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium tracking-[0.2em] text-gold">
                  {item.number}
                </span>

                <span className="text-[10px] tracking-[0.18em] text-muted/70">
                  {item.english}
                </span>
              </div>

              <h3 className="mt-10 text-2xl font-semibold tracking-tight text-brand-900 transition-colors duration-300 group-hover:text-brand-600">
                {item.title}
              </h3>

              <p className="mt-5 leading-8 text-muted">{item.description}</p>

              <div className="mt-10 h-px w-8 bg-gold transition-all duration-500 group-hover:w-16" />
            </article>
          ))}
        </div>

        {/* Closing Statement */}
        <div className="mt-8 grid gap-8 border-t border-brand-900/15 pt-12 md:mt-0 md:grid-cols-[0.7fr_1.3fr] md:pt-16">
          <p className="text-xs font-medium tracking-[0.22em] text-gold">
            OUR PURPOSE
          </p>

          <p className="max-w-4xl text-xl font-medium leading-[1.8] text-brand-900 md:text-2xl">
            我們相信，一個人的起點不代表終點。
            <span className="text-brand-600">
              {" "}
              願意學習、願意累積、願意與團隊一起前進，
            </span>
            就有機會走出自己的專業道路。
          </p>
        </div>
      </div>
    </section>
  );
}
