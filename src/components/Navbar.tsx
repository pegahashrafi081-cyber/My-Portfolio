"use client";

import { Moon, Sun } from "lucide-react";
import { useState } from "react";
import { useLanguage} from "@/provider/LanguageProvider";

interface Nav {
  name: string;
  href: string;
  key: string;
}
const navItems: Nav[] = [
  { name: "work", key: "nav.work", href: "#work" },
  { name: "services", key: "nav.services", href: "#services" },
  { name: "about", key: "nav.about", href: "#about" },
  { name: "blog", key: "nav.blog", href: "#blog" },
  { name: "contact", key: "nav.contact", href: "#contact" },
];
const Navbar = () => {
  const { t, setLanguage, language } = useLanguage();
  const [activeItem, setActiveItem] = useState("work");
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <header className="flex w-full justify-center p-4 ">
      <nav className="bg-white flex border rounded-3xl text-center justify-between items-center  border-white gap-5 w-300 ">
        <div className="p-3 gap-2 flex">
          <span className="border rounded-2xl p-1 flex items-center ">P</span>
          <div className="flex flex-col">
            <span>{t("nav.name")}</span>
            <span>Fronted DEVELOPER</span>
          </div>
        </div>
        {/* NavItems */}
        <div className="flex gap-5 ">
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
                  className={`absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-orange-500 origin-left transition-transform duration-300 ease-out ${
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
        <div className="flex gap-2">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="border rounded-md"
          >
            {isDarkMode ? <Sun /> : <Moon />}
          </button>
          {/* lang */}
          <select
            className="border rounded-md"
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
