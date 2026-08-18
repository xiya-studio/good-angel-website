import Link from "next/link";

const contactItems = [
  {
    label: "PHONE",
    title: "04-2299-1391",
    description: "歡迎於服務時間來電與我們聯繫",
    href: "tel:0422991391",
  },
  {
    label: "EMAIL",
    title: "Goodangel1013@gmail.com",
    description: "求職、合作或其他問題皆可來信",
    href: "mailto:Goodangel1013@gmail.com",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-brand-900 text-ivory">
      <div className="container-shell section-space">
        {/* Heading */}
        <div className="grid gap-12 border-b border-white/15 pb-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <div className="flex items-center gap-4">
              <span className="h-px w-8 bg-gold" />

              <p className="text-xs font-medium tracking-[0.25em] text-gold">
                JOIN OUR TEAM
              </p>
            </div>

            <p className="mt-6 text-sm leading-7 text-white/50">
              Taichung · Taiwan
            </p>
          </div>

          <div>
            <h2 className="max-w-4xl text-4xl font-semibold leading-[1.2] tracking-[-0.04em] md:text-6xl">
              下一段職涯，
              <br />
              <span className="text-brand-200">也許可以從這裡開始。</span>
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/60 md:text-lg">
              如果你對不動產、財商領域或好天使的團隊文化感興趣，
              歡迎進一步認識我們，也歡迎直接與團隊聯絡。
            </p>

            <div className="mt-10">
              <Link
                href="/career"
                className="inline-flex items-center justify-between gap-16 bg-brand-200 px-7 py-4 text-sm font-semibold tracking-wide text-brand-900 transition duration-300 hover:bg-ivory"
              >
                <span>了解加入方式</span>
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid md:grid-cols-2">
          {contactItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group border-b border-white/15 py-10 md:border-r md:px-8 md:py-12 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
            >
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-medium tracking-[0.22em] text-gold">
                  {item.label}
                </p>

                <span
                  aria-hidden="true"
                  className="text-white/40 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brand-200"
                >
                  ↗
                </span>
              </div>

              <p className="mt-6 break-all text-xl font-medium text-white md:text-2xl">
                {item.title}
              </p>

              <p className="mt-3 text-sm leading-7 text-white/45">
                {item.description}
              </p>
            </a>
          ))}
        </div>

        {/* Address */}
        <div className="grid gap-8 border-b border-white/15 py-12 md:grid-cols-[0.35fr_0.65fr] md:py-16">
          <p className="text-[10px] font-medium tracking-[0.22em] text-gold">
            OFFICE
          </p>

          <div>
            <p className="text-xl font-medium leading-8 text-white md:text-2xl">
              臺中市北屯區文心路四段 61 號
            </p>

            <p className="mt-3 text-sm text-white/45">Taichung City, Taiwan</p>
          </div>
        </div>

        {/* Footer-style closing */}
        <div className="flex flex-col gap-8 pt-12 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-2xl font-semibold tracking-[0.05em] text-white">
              好天使
            </p>

            <p className="mt-2 text-[10px] tracking-[0.25em] text-white/40">
              GOOD ANGEL
            </p>
          </div>

          <p className="max-w-md text-sm leading-7 text-white/40 md:text-right">
            不動產 × 財商 × 人才培育
            <br />
            與願意成長的人，一起走得更遠。
          </p>
        </div>
      </div>
    </section>
  );
}
