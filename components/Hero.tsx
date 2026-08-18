import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-brand-900 pt-20 text-ivory"
    >
      {/* Decorative Lines */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-0 h-full w-px bg-white/[0.05]" />
        <div className="absolute right-[8%] top-0 h-full w-px bg-white/[0.05]" />
      </div>

      {/* Hero Content */}
      <div className="container-shell relative flex min-h-[760px] items-center py-12 md:min-h-[820px] md:py-16 lg:min-h-[700px] lg:py-20">
        <div className="grid w-full gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-20">
          {/* Left Content */}
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-gold" />

              <p className="text-xs font-medium tracking-[0.28em] text-brand-200">
                JOIN GOOD ANGEL
              </p>
            </div>

            {/* Title */}
            <h1 className="mt-6 max-w-4xl text-[clamp(2.5rem,4.5vw,4.75rem)] font-semibold leading-[1.08] tracking-[-0.04em]">
              和一群對的人，
              <br />
              <span className="text-brand-200">做值得成長的事。</span>
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-2xl text-base leading-8 text-white/65 md:text-lg md:leading-9">
              好天使不動產財商團隊結合不動產實務、財商教育與人才培育，
              透過專業學習與團隊陪伴，讓不同背景的夥伴建立自己的專業能力與職涯方向。
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              {/* Primary */}
              <Link
                href="/career"
                className="inline-flex items-center justify-between gap-10 bg-[#c7d98f] px-7 py-4 text-sm font-semibold tracking-wide text-[#1f3326] transition duration-300 hover:bg-[#dbe8b4]"
              >
                <span>加入好天使</span>

                <span aria-hidden="true">↗</span>
              </Link>

              {/* Secondary */}
              <Link
                href="/about"
                className="inline-flex items-center justify-between gap-10 border border-white/25 bg-transparent px-7 py-4 text-sm font-medium tracking-wide text-white/90 transition duration-300 hover:border-brand-200 hover:bg-brand-200 hover:text-brand-900"
              >
                <span>認識我們</span>

                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          {/* Right Statement */}
          <div className="border-t border-white/15 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <p className="text-xs font-medium tracking-[0.25em] text-gold">
              WHAT WE BELIEVE
            </p>

            <p className="mt-5 max-w-md text-xl font-medium leading-[1.55] tracking-tight text-white md:text-2xl lg:text-3xl">
              專業可以學習，
              <br />
              經驗可以累積，
              <br />
              而成長需要一群
              <span className="text-brand-200"> 願意同行的人。</span>
            </p>

            {/* Keywords */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <span className="text-xs tracking-[0.2em] text-white/40">
                REAL ESTATE
              </span>

              <span className="h-px w-6 bg-white/20" />

              <span className="text-xs tracking-[0.2em] text-white/40">
                FINANCE
              </span>

              <span className="h-px w-6 bg-white/20" />

              <span className="text-xs tracking-[0.2em] text-white/40">
                GROWTH
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[10px] tracking-[0.25em] text-white/35 md:flex">
        <span>SCROLL TO DISCOVER</span>

        <span aria-hidden="true">↓</span>
      </div>
    </section>
  );
}
