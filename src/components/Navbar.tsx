"use client";

import { Moon, Sun } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/provider/LanguageProvider";

interface Nav {
  name: string;
  href: string;
  key: string;
}
const navItems: Nav[] = [
  { name: "work", key: "nav.work", href: "#Work" },
  { name: "services", key: "nav.services", href: "#Services" },
  { name: "about", key: "nav.about", href: "#About" },
  { name: "blog", key: "nav.blog", href: "#Blog" },
  { name: "contact", key: "nav.contact", href: "#Contact" },
];
const Navbar = () => {
  const { t, setLanguage, language } = useLanguage();
  const [activeItem, setActiveItem] = useState("work");
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <header className="fixed mt-6 z-50 flex w-full justify-center px-4    ">
      <nav className="flex items-center justify-between gap-6 rounded-full border border-neutral-200/80 bg-white/80 px-4 py-2.5 shadow-sm backdrop-blur-md transition-all md:gap-10 ">
        {/* Profile / Brand Info */}
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-neutral-50 text-sm font-semibold text-neutral-800 shadow-inner ">
            P
          </span>
          <div className="hidden flex-col sm:flex">
            <span className="text-xs font-bold tracking-tight text-neutral-900">
              {t("nav.name")}
            </span>
            <span className="text-[10px] font-medium tracking-wider text-neutral-400 uppercase">
              Fronted DEVELOPER
            </span>
          </div>
        </div>
        {/* NavItems */}
        <div className="flex items-center gap-1 sm:gap-2 ">
          {navItems.map((item) => {
            const isActive = activeItem === item.name;
            return (
              <a
                href={item.href}
                key={item.name}
                onClick={() => setActiveItem(item.name)}
                className={`relative inline-flex group text-xs font-medium transition-colors py-2 duration-200 sm:text-sm ${
                  isActive
                    ? "text-neutral-900 font-semibold"
                    : "text-neutral-500 hover:text-neutral-900   "
                }`}
              >
                {t(item.key)}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-orange-500 origin-left transition-transform duration-300 ease-out ${
                    isActive
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </a>
            );
          })}
        </div>
        {/* theme & lang */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            aria-label="Toggle Theme"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200/80 bg-neutral-50/50 text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900"
          >
            {isDarkMode ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          {/* lang */}
          <select
            className="flex h-9 items-center gap-1 rounded-full border border-neutral-200/80 bg-neutral-50/50 px-2.5 text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900"
            name="language"
            id="language"
            onChange={(event) => setLanguage(event.target.value as "fa" | "en")}
          >
            <option value="en">English</option>
            <option value="fa">فارسی</option>
          </select>
          <a href="/resume.pdf" download>
            My Resume
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
