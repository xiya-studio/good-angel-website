const items = ["GOOD ANGEL", "REAL ESTATE", "FINANCE", "GROWTH", "TOGETHER"];

export default function MarqueeSection() {
  return (
    <section className="overflow-hidden border-y border-brand-900/10 bg-yellow py-5">
      <div className="marquee-track flex w-max items-center">
        {[...items, ...items, ...items].map((item, index) => (
          <div key={`${item}-${index}`} className="flex shrink-0 items-center">
            <span className="px-8 text-sm font-semibold tracking-[0.3em] text-brand-900 md:px-12">
              {item}
            </span>

            <span className="text-lg text-brand-900/40">✦</span>
          </div>
        ))}
      </div>
    </section>
  );
}
