import Link from "next/link";

const growthPoints = [
  {
    number: "01",
    label: "LEARNING",
    title: "持續學習",
    description: "從不動產與財商知識開始，逐步建立對產業與市場的理解。",
  },
  {
    number: "02",
    label: "PRACTICE",
    title: "實務累積",
    description: "把知識帶進真實工作情境，在一次次經驗中建立自己的判斷能力。",
  },
  {
    number: "03",
    label: "TEAMWORK",
    title: "團隊同行",
    description: "透過交流、協作與經驗分享，讓成長不必只靠一個人摸索。",
  },
  {
    number: "04",
    label: "GROWTH",
    title: "探索發展",
    description: "在學習與實務累積的過程中，逐步找到適合自己的專業方向。",
  },
];

export default function ServicesPreview() {
  return (
    <section className="bg-paper">
      <div className="container-shell py-20 md:py-24 lg:py-28">
        {/* Heading */}
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <div className="flex items-center gap-4">
              <span className="h-px w-8 bg-gold" />

              <p className="text-xs font-medium tracking-[0.25em] text-gold">
                GROW WITH GOOD ANGEL
              </p>
            </div>

            <h2 className="mt-6 max-w-3xl text-3xl font-semibold leading-[1.3] tracking-[-0.03em] text-brand-900 md:text-5xl">
              在這裡，
              <br />
              <span className="text-brand-600">成長不只有一種方式。</span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-8 text-muted md:text-lg">
              從知識學習到實務經驗，從個人成長到團隊協作，
              我們希望讓每一段累積，都能成為下一步的基礎。
            </p>
          </div>

          <Link
            href="/career"
            className="group inline-flex w-fit items-center gap-8 border-b border-brand-900 pb-2 text-sm font-semibold tracking-wide text-brand-900 transition-colors duration-300 hover:border-gold hover:text-brand-600"
          >
            <span>了解加入方式</span>

            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>

        {/* Growth Grid */}
        <div className="mt-14 grid border-t border-brand-900/15 md:grid-cols-2 lg:grid-cols-4">
          {growthPoints.map((item) => (
            <article
              key={item.number}
              className="group border-b border-brand-900/15 py-8 md:px-7 lg:border-r lg:py-10 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs font-medium tracking-[0.2em] text-gold">
                  {item.number}
                </span>

                <span className="text-[9px] font-medium tracking-[0.18em] text-muted/50">
                  {item.label}
                </span>
              </div>

              <h3 className="mt-8 text-xl font-semibold tracking-tight text-brand-900 transition-colors duration-300 group-hover:text-brand-600">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-muted">{item.description}</p>

              <div className="mt-8 h-px w-8 bg-gold transition-all duration-500 group-hover:w-14" />
            </article>
          ))}
        </div>

        {/* Recruitment CTA */}
        <div className="mt-16 bg-brand-900 px-7 py-10 text-ivory md:px-10 md:py-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-[10px] font-medium tracking-[0.25em] text-gold">
                JOIN OUR TEAM
              </p>

              <h3 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
                下一個加入好天使的人，也許就是你。
              </h3>
            </div>

            <Link
              href="/career"
              className="inline-flex w-fit items-center gap-10 bg-brand-200 px-6 py-4 text-sm font-semibold text-brand-900 transition duration-300 hover:bg-ivory"
            >
              <span>加入我們</span>
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
