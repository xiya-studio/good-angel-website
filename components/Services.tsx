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
    <section className="bg-paper">
      <div className="container-shell section-space">
        {/* Heading */}
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <div className="flex items-center gap-4">
              <span className="h-px w-8 bg-gold" />

              <p className="text-xs font-medium tracking-[0.25em] text-gold">
                WHY GOOD ANGEL
              </p>
            </div>

            <p className="mt-6 text-sm leading-7 text-muted">
              Learning · Practice · Teamwork · Growth
            </p>
          </div>

          <div>
            <h2 className="max-w-4xl text-3xl font-semibold leading-[1.35] tracking-[-0.03em] text-brand-900 md:text-5xl md:leading-[1.25]">
              一份工作的價值，
              <br />
              不只在今天做了什麼，
              <br />
              <span className="text-brand-600">也在明天成為什麼樣的人。</span>
            </h2>

            <p className="mt-8 max-w-3xl text-base leading-8 text-muted md:text-lg">
              我們重視知識的累積，也重視實務經驗與團隊交流。
              在好天使，每一次學習與參與，都能成為建立專業能力的一部分。
            </p>
          </div>
        </div>

        {/* Growth Points */}
        <div className="mt-16 border-t border-brand-900/15 md:mt-20">
          {growthPoints.map((item) => (
            <article
              key={item.number}
              className="group grid gap-6 border-b border-brand-900/15 py-9 transition-colors duration-300 hover:bg-brand-100/40 md:grid-cols-[0.15fr_0.25fr_0.6fr] md:items-start md:px-5 md:py-12"
            >
              <span className="text-xs font-medium tracking-[0.2em] text-gold">
                {item.number}
              </span>

              <div>
                <p className="text-[10px] font-medium tracking-[0.2em] text-muted">
                  {item.eyebrow}
                </p>

                <h3 className="mt-3 text-xl font-semibold tracking-tight text-brand-900 md:text-2xl">
                  {item.title}
                </h3>
              </div>

              <div className="flex items-start justify-between gap-8">
                <p className="max-w-2xl leading-8 text-muted">
                  {item.description}
                </p>

                <span
                  aria-hidden="true"
                  className="hidden text-xl text-gold transition-transform duration-300 group-hover:translate-x-1 md:block"
                >
                  →
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Statement */}
        <div className="mt-20 bg-brand-900 px-7 py-12 text-ivory md:px-12 md:py-16 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <p className="text-xs font-medium tracking-[0.25em] text-gold">
                GROW WITH US
              </p>

              <h3 className="mt-6 max-w-3xl text-3xl font-semibold leading-[1.35] tracking-[-0.03em] md:text-5xl">
                我們尋找的，
                <br />
                不只是已經準備好的人。
              </h3>
            </div>

            <div>
              <p className="max-w-xl leading-8 text-white/65">
                比起一開始就什麼都會，我們更期待願意理解產業、持續學習，
                並且願意與團隊共同累積經驗的夥伴。
              </p>

              <div className="mt-8 h-px w-16 bg-gold" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
