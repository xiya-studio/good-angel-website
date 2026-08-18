import Link from "next/link";

const highlights = [
  {
    number: "01",
    label: "REAL ESTATE",
    title: "不動產實務",
  },
  {
    number: "02",
    label: "FINANCIAL LITERACY",
    title: "財商思維",
  },
  {
    number: "03",
    label: "GROWTH",
    title: "人才培育",
  },
];

export default function AboutPreview() {
  return (
    <section className="bg-ivory">
      <div className="container-shell py-20 md:py-24 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20">
          {/* Left Content */}
          <div>
            <div className="flex items-center gap-4">
              <span className="h-px w-8 bg-gold" />

              <p className="text-xs font-medium tracking-[0.25em] text-gold">
                ABOUT GOOD ANGEL
              </p>
            </div>

            <h2 className="mt-6 max-w-3xl text-3xl font-semibold leading-[1.3] tracking-[-0.03em] text-brand-900 md:text-5xl">
              不只是一起工作，
              <br />
              <span className="text-brand-600">更是一起累積專業。</span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-8 text-muted md:text-lg">
              好天使結合不動產實務、財商教育與人才培育。
              我們相信專業不是一開始就具備，而是在學習、實務與團隊交流中，
              一點一點建立起來。
            </p>

            <Link
              href="/about"
              className="group mt-9 inline-flex items-center gap-8 border-b border-brand-900 pb-2 text-sm font-semibold tracking-wide text-brand-900 transition-colors duration-300 hover:border-gold hover:text-brand-600"
            >
              <span>深入認識好天使</span>

              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>

          {/* Right Highlights */}
          <div className="border-t border-brand-900/15">
            {highlights.map((item) => (
              <div
                key={item.number}
                className="group grid grid-cols-[auto_1fr] items-center gap-6 border-b border-brand-900/15 py-6 md:py-7"
              >
                <span className="text-xs font-medium tracking-[0.2em] text-gold">
                  {item.number}
                </span>

                <div className="flex items-center justify-between gap-6">
                  <div>
                    <p className="text-[9px] font-medium tracking-[0.2em] text-muted/60">
                      {item.label}
                    </p>

                    <h3 className="mt-2 text-xl font-semibold text-brand-900 transition-colors duration-300 group-hover:text-brand-600">
                      {item.title}
                    </h3>
                  </div>

                  <span
                    aria-hidden="true"
                    className="text-muted/40 transition duration-300 group-hover:translate-x-1 group-hover:text-gold"
                  >
                    →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
