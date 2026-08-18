import Link from "next/link";

const footerLinks = [
  { label: "首頁", href: "/" },
  { label: "認識好天使", href: "/about" },
  { label: "加入好天使", href: "/career" },
  { label: "團隊文化", href: "/team" },
  { label: "聯絡我們", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-brand-900 text-ivory">
      <div className="container-shell">
        {/* Main */}
        <div className="grid gap-12 py-14 md:grid-cols-[1fr_auto] md:items-start md:py-16">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block">
              <p className="text-xl font-semibold tracking-[0.06em] text-white">
                好天使
              </p>

              <p className="mt-2 text-[10px] font-medium tracking-[0.25em] text-white/40">
                GOOD ANGEL
              </p>
            </Link>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/50">
              結合不動產實務、財商教育與人才培育，
              與願意學習、願意成長的夥伴一起累積專業。
            </p>
          </div>

          {/* Navigation */}
          <nav className="grid grid-cols-2 gap-x-10 gap-y-4 sm:grid-cols-3 md:text-right">
            {footerLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-white/55 transition-colors duration-300 hover:text-brand-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-[11px] text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 好天使不動產財商團隊</p>

          <p className="tracking-[0.16em]">REAL ESTATE · FINANCE · GROWTH</p>
        </div>
      </div>
    </footer>
  );
}
