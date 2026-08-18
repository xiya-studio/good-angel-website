type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function PageHero({
  eyebrow,
  title,
  description,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-brand-900 pt-20 text-ivory">
      {/* Decorative Lines */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-0 h-full w-px bg-white/[0.05]" />
        <div className="absolute right-[8%] top-0 h-full w-px bg-white/[0.05]" />
      </div>

      <div className="container-shell relative py-20 md:py-24 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          {/* Eyebrow */}
          <div>
            <div className="flex items-center gap-4">
              <span className="h-px w-8 bg-gold" />

              <p className="text-xs font-medium tracking-[0.28em] text-brand-200">
                {eyebrow}
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.15] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              {title}
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/60 md:text-lg md:leading-9">
              {description}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="container-shell relative">
        <div className="h-px bg-white/10" />
      </div>
    </section>
  );
}
