"use client";
import React, { useState } from "react";
interface Nav {
  name: string;
  href: string;
}
const navItems: Nav[] = [
  { name: "Work", href: "#Work" },
  { name: "Services", href: "#Services" },
  { name: "About", href: "#About" },
  { name: "Blog", href: "#Blog" },
  { name: "Contact Me", href: "#Contact" },
];
const Navbar = () => {
    const [activeItem, setActiveItem] = useState<string>('Work');
    // const handleScroll = (e:React.MouseEvent<HTMLAnchorElement>,
    //     item : Nav) => {
    //     e.preventDefault();
    //     setActiveItem(item.name);
    // }
    // const isActive = activeItem === (item.name);
  return (
    <header className="p-5 ">
      <nav className="bg-white flex text-center items-center border rounded-3xl border-white gap-5">
        <div className="p-3 gap-2 flex">
          <span className="border rounded-2xl p-1 flex items-center ">P</span>
          <div className="flex flex-col">
            <span>Pegah Ashrafi</span>
            <span>Fronted DEVELOPER</span>
          </div>
        </div>
        {/* NavItems */}

        <div className="flex gap-5">
          {navItems.map((item) => {
             const isActive = activeItem === item.name;
            return (
            <a
              href={item.href}
              key={item.name}
            //   onClick={(e) => handleScroll(e, item)}
            //   className={`relative px-3 py-1.5 text-xs font-medium transition-colors duration-200 sm:text-sm $`}
            >
              {item.name}
            </a>
            );
})}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
