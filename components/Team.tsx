import { members } from "@/data/team";

export default function Team() {
  return (
    <section id="team" className="bg-ivory">
      <div className="container-shell section-space">
        {/* Heading */}
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <div className="flex items-center gap-4">
              <span className="h-px w-8 bg-gold" />

              <p className="text-xs font-medium tracking-[0.25em] text-gold">
                OUR PEOPLE
              </p>
            </div>

            <p className="mt-6 text-sm leading-7 text-muted">
              People · Knowledge · Collaboration
            </p>
          </div>

          <div>
            <h2 className="max-w-4xl text-3xl font-semibold leading-[1.35] tracking-[-0.03em] text-brand-900 md:text-5xl md:leading-[1.25]">
              每一份專業背後，
              <br />
              都是一群願意
              <span className="text-brand-600"> 分享與同行的人。</span>
            </h2>

            <p className="mt-8 max-w-3xl text-base leading-8 text-muted md:text-lg">
              好天使匯聚不同經驗與專業背景的夥伴。
              我們相信，好的團隊不是每個人都一樣，
              而是能讓不同能力彼此交流、互相學習，一起把事情做好。
            </p>
          </div>
        </div>

        {/* Team Grid */}
        <div className="mt-16 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {members.map((member, index) => (
            <article key={`${member.name}-${index}`} className="group">
              {/* Photo */}
              <div className="relative aspect-[4/5] overflow-hidden bg-brand-100">
                {/* 之後有照片時，把這裡換成 next/image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-medium tracking-[0.2em] text-brand-600/50">
                    TEAM PHOTO
                  </span>
                </div>

                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-brand-900/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center border border-white/40 bg-white/10 text-sm text-white opacity-0 backdrop-blur-sm transition duration-300 group-hover:opacity-100">
                  ↗
                </div>
              </div>

              {/* Information */}
              <div className="border-b border-brand-900/15 pb-7 pt-6">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-[10px] font-medium tracking-[0.2em] text-gold">
                      {member.role}
                    </p>

                    <h3 className="mt-3 text-2xl font-semibold tracking-tight text-brand-900">
                      {member.name}
                    </h3>
                  </div>

                  <span className="pt-1 text-[10px] tracking-[0.18em] text-muted/50">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <p className="mt-4 line-clamp-3 leading-7 text-muted">
                  {member.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Culture Statement */}
        <div className="mt-24 border-t border-brand-900/15 pt-14 md:mt-32 md:pt-20">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <p className="text-xs font-medium tracking-[0.25em] text-gold">
                OUR CULTURE
              </p>
            </div>

            <div>
              <h3 className="max-w-4xl text-3xl font-semibold leading-[1.4] tracking-[-0.03em] text-brand-900 md:text-4xl">
                專業不是一個人的表現，
                <br />
                <span className="text-brand-600">
                  而是一群人願意一起累積的結果。
                </span>
              </h3>

              <p className="mt-8 max-w-3xl leading-8 text-muted">
                我們重視彼此分享經驗、交換觀點，也保留每個人發展自己專業方向的空間。
                在這裡，學習不只是課程，而是每天與不同夥伴合作時持續發生的事情。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
