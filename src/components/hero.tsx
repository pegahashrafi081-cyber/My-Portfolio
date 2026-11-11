import React from "react";
import { ChevronDown } from "lucide-react";
const Hero = () => {
  return (
    <section>
      <div className="flex justify-between w-full p-20">
        <div>
          <div className="flex items-center gap-2 p-3">
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
          <h1>
            <p>I build systems</p>
            <p>people remember.</p>
          </h1>
          <p>Web · Mobile · AI · Product thinking</p>
          <p>
            Turning ideas into useful products with clean code, great design,
            and
          </p>
          <p>a focus on real impact.</p>
          <div>
            <button>Book a Call</button>
            <button>View Projects</button>
            <button>Download CV</button>
          </div>
          <div className="flex items-center gap-1">
            <span className="tracking-[0.25em]">Trusted by</span>
            <span className=" w-10 h-px bg-neutral-300 mt-2"></span>
            <div className="flex gap-5 ">
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
        <div className="relative">
          <img
            src="f2YU5Sp.jpg"
            alt="cover"
            className="w-70 h-75 rounded-2xl"
          />
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
