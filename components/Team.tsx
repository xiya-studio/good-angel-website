"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { members } from "@/data/team";

export default function Team() {
  return (
    <section id="team" className="overflow-hidden bg-ivory text-brand-900">
      {/* =========================================================
          01 / CULTURE VISUAL
      ========================================================= */}
      <div className="container-shell py-24 md:py-32 lg:py-40">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="flex items-center gap-4">
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: 40 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
                className="h-px bg-gold"
              />

              <p className="text-[10px] font-semibold tracking-[0.3em] text-gold">
                OUR PEOPLE
              </p>
            </div>

            <p className="mt-6 text-sm leading-7 text-muted">
              People · Knowledge
              <br />
              Collaboration · Growth
            </p>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h2 className="max-w-5xl text-4xl font-semibold leading-[1.2] tracking-[-0.045em] md:text-6xl lg:text-7xl">
              每一份專業背後，
              <br />
              都是一群願意
              <span className="text-brand-600"> 一起前進的人。</span>
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-8 text-muted md:text-lg md:leading-9">
              好天使匯聚不同經驗與專業背景的夥伴。我們相信，好的團隊不是每個人都一樣，
              而是讓不同能力彼此交流、互相學習，一起把事情做好。
            </p>
          </motion.div>
        </div>
      </div>

      {/* =========================================================
          02 / GIANT CULTURE IMAGE
      ========================================================= */}
      <motion.div
        initial={{ clipPath: "inset(10% 8% 10% 8%)" }}
        whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{
          duration: 1.3,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative mx-auto h-[70vh] min-h-[560px] max-h-[900px] w-full overflow-hidden"
      >
        <motion.div
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute inset-0"
        >
          <Image
            src="/images/hero-team.png"
            alt="好天使團隊文化"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>

        {/* overlays */}
        <div className="absolute inset-0 bg-brand-900/20" />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-brand-900 via-brand-900/35 to-transparent" />

        {/* grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Image label */}
        <div className="container-shell absolute inset-x-0 bottom-0 z-10 pb-10 md:pb-14">
          <div className="flex flex-col justify-between gap-8 border-t border-white/25 pt-6 md:flex-row md:items-end">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <p className="text-[9px] font-semibold tracking-[0.32em] text-gold">
                TOGETHER WE GROW
              </p>

              <p className="mt-3 max-w-xl text-2xl font-medium leading-[1.4] text-white md:text-4xl">
                不只是一起工作，
                <br />
                也是一起變得更好。
              </p>
            </motion.div>

            <p className="text-[9px] tracking-[0.28em] text-white/50">
              GOOD ANGEL / TEAM CULTURE
            </p>
          </div>
        </div>
      </motion.div>

      {/* =========================================================
          03 / MEMBERS
      ========================================================= */}
      <div className="container-shell py-24 md:py-32 lg:py-40">
        <div className="mb-16 flex flex-col justify-between gap-8 border-b border-brand-900/15 pb-10 md:flex-row md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[10px] font-semibold tracking-[0.3em] text-gold">
              MEET THE PEOPLE
            </p>

            <h3 className="mt-5 text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
              認識我們的夥伴
            </h3>
          </motion.div>

          <p className="max-w-md text-sm leading-7 text-muted">
            不同背景、不同經驗，在同一個團隊裡分享彼此的專業與觀點。
          </p>
        </div>

        {/* Asymmetric Team Grid */}
        <div className="grid gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {members.map((member, index) => (
            <motion.article
              key={`${member.name}-${index}`}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.85,
                delay: (index % 3) * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group ${index % 3 === 1 ? "lg:translate-y-3" : ""}`}
            >
              {/* PHOTO */}
              <div className="relative aspect-[4/5] overflow-hidden bg-brand-100">
                {/* Temporary photo placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-[9px] font-semibold tracking-[0.3em] text-brand-600/50">
                      TEAM PORTRAIT
                    </p>

                    <p className="mt-3 font-serif text-6xl text-brand-900/10">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                  </div>
                </div>

                {/* hover tint */}
                <div className="absolute inset-0 bg-brand-900/0 transition-colors duration-700 group-hover:bg-brand-900/10" />

                {/* grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-[0.08]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(48,75,53,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(48,75,53,.5) 1px, transparent 1px)",
                    backgroundSize: "48px 48px",
                  }}
                />

                {/* number */}
                <span className="absolute left-5 top-5 text-[9px] tracking-[0.25em] text-brand-900/40">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* arrow */}
                <div className="absolute bottom-5 right-5 flex h-11 w-11 translate-y-3 items-center justify-center bg-brand-900 text-ivory opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {"↗\uFE0E"}
                </div>

                {/* gold line */}
                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gold transition-all duration-700 group-hover:w-full" />
              </div>

              {/* INFO */}
              <div className="border-b border-brand-900/15 pb-8 pt-6">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-[9px] font-semibold tracking-[0.25em] text-gold">
                      {member.role}
                    </p>

                    <h3 className="mt-3 text-2xl font-semibold tracking-tight transition-transform duration-500 group-hover:translate-x-1">
                      {member.name}
                    </h3>
                  </div>

                  <span className="text-[9px] tracking-[0.2em] text-brand-900/30">
                    GA /{String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <p className="mt-5 line-clamp-3 text-sm leading-7 text-muted">
                  {member.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* =========================================================
          04 / CULTURE STATEMENT
      ========================================================= */}
      <div className="relative overflow-hidden bg-[#c7d98f]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-10 left-0 whitespace-nowrap text-[clamp(8rem,20vw,20rem)] font-semibold leading-none tracking-[-0.07em] text-brand-900/[0.035]"
        >
          TOGETHER
        </div>

        <div className="container-shell relative py-24 md:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.55fr_1.45fr] lg:gap-20">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-[10px] font-semibold tracking-[0.3em] text-brand-900/60"
            >
              OUR CULTURE
            </motion.p>

            <div>
              <motion.h3
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="max-w-5xl text-4xl font-semibold leading-[1.2] tracking-[-0.045em] md:text-6xl"
              >
                專業不是
                <br />
                一個人的表現，
                <br />
                <span className="text-brand-700">
                  而是一群人一起累積的結果。
                </span>
              </motion.h3>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="mt-12 flex flex-col justify-between gap-8 border-t border-brand-900/20 pt-8 md:flex-row md:items-end"
              >
                <p className="max-w-2xl text-base leading-8 text-brand-900/65">
                  我們重視彼此分享經驗、交換觀點，也保留每個人發展自己專業方向的空間。
                  在這裡，學習不只是課程，而是每天與不同夥伴合作時持續發生的事情。
                </p>

                <Link
                  href="/team"
                  className="group inline-flex items-center gap-5 text-sm font-semibold tracking-wide text-brand-900"
                >
                  <span>認識團隊</span>

                  <span className="transition-transform duration-300 group-hover:translate-x-2">
                    {"→\uFE0E"}
                  </span>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
