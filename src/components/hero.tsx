import React from "react";
import { ArrowUpRight, Calendar, ChevronDown, Download } from "lucide-react";
import Image from "next/image";
const Hero = () => {
  return (
    <section className="relative min-h-screen bg-[#f3ede8] overflow-hidden">
      <div className="pointer-events-none absolute -bottom-24 -left-24 w-[420px] h-[420px] rounded-full border border-orange-300/40" />
      <div className="pointer-events-none absolute -bottom-10 left-10 w-[220px] h-[220px] rounded-full border border-orange-300/30" />

      <div className="mx-auto max-w-7xl px-6 pt-16 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="flex items-center gap-3 p-3 font-mono text-xs">
            <span className="relative flex size-3 items-center justify-center">
              {/*هاله پشتد */}
              <span className="absolute inline-flex size-3 animate-pulse rounded-full bg-emerald-400/40" />
              {/* نقطه مرکزی */}
              <span className=" inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-600 dark:text-neutral-300">
              Available for work
            </span>
          </div>
          <h1 className="mt-6 text-6xl md:text-7xl font-bold leading-[1.05] tracking-tight">
            <p className="text-neutral-900">I build systems</p>
            <p className="text-orange-600">people remember.</p>
          </h1>

          <p className="mt-10 font-semibold text-neutral-900">
            Web · Mobile · AI · Product thinking
          </p>
          <p className="mt-3 max-w-md text-neutral-600 leading-relaxed">
            Turning ideas into useful products with clean code, great design,
            and
          </p>
          <p>a focus on real impact.</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="group flex items-center gap-2 rounded-full bg-orange-600 px-6 py-3 text-white font-semibold hover:bg-orange-700 transition"
            >
              Book a call <Calendar className="size-4" />
              <span className="text-orange-300 group-hover:translate-x-0.5 transition">
                ›
              </span>
            </a>
            <a
              href="#projects"
              className="flex items-center gap-2 rounded-full bg-neutral-200/70 px-6 py-3 font-semibold hover:bg-neutral-300/70 transition"
            >
              View Projects <ArrowUpRight className="size-4" />
            </a>
            <a
              href="/cv.pdf"
              className="flex items-center gap-2 rounded-full bg-neutral-200/70 px-6 py-3 font-semibold hover:bg-neutral-300/70 transition"
            >
              Download CV <Download className="size-4" />
            </a>
          </div>

          <div className="mt-10 flex items-center gap-4 text-neutral-400">
            <span className="font-mono text-[10px] tracking-[0.25em] uppercase">
              Trusted by
            </span>
            <span className="h-px w-10 bg-neutral-300"></span>
            <div className="flex items-center gap-4 opacity-60">
              <img
                src="/react-original.svg"
                alt="REACT ICON"
                className="w-[26PX] h-[26px] grayscale transition-all duration-300  hover:grayscale-0 hover:scale-105"
              />

              <img
                src="/javascript-original.svg"
                alt="Js ICON"
                className="w-[26PX] h-[26px] grayscale transition-all duration-300  hover:grayscale-0 hover:scale-105 "
              />
              <img
                src="/typescript-original.svg"
                alt="Ts ICON"
                className="w-[26PX] h-[26px] grayscale transition-all duration-300  hover:grayscale-0 hover:scale-105 "
              />
              <img
                src="/nodejs-original.svg"
                alt="Nodjs ICON"
                className="w-[26PX] h-[26px] grayscale transition-all duration-300  hover:grayscale-0 hover:scale-105"
              />
            </div>
          </div>
        </div>
        {/* ---right  section--- */}
        <div className="relative justify-self-center lg:justify-self-end">
          <div className="relative  rounded-3xl overflow-hidden shadow-xl bg-neutral-800">
            {/* <img src="f2YU5Sp.jpg" alt="" className="object-cover" /> */}
            <Image
              src={"/f2YU5Sp.jpg"}
              alt="portrait"
              width={300}
              height={300}
              className="aspect-3/4"
            />
          </div>
          <div className="absolute -left-6 top-7 border rounded-2xl w-12 h-12 grid place-items-center bg-amber-50 shadow-lg animate-float ">
            <div className="text-orange-600 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-code-xml"
                aria-hidden="true"
              >
                <path d="m18 16 4-4-4-4"></path>
                <path d="m6 8-4 4 4 4"></path>
                <path d="m14.5 4-5 16"></path>
              </svg>
            </div>
          </div>
          <div className="absolute -right-6 top-60 border rounded-2xl w-12 h-12 grid place-items-center bg-amber-50 shadow-lg animate-float">
            <div className="text-orange-600 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-rocket"
                aria-hidden="true"
              >
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-3">
        <span className="bg-neutral-300 h-px w-10  "></span>
        <a href="#Work" className="border rounded-full ">
          <ChevronDown />
        </a>
        <span className="bg-neutral-300 h-px w-10  "></span>
      </div>
    </section>
  );
};

export default Hero;
