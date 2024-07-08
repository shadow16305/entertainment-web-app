"use client";

import { SearchContext, useSearch } from "@/store/SearchContext";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChangeEvent } from "react";
import { useContext } from "react";

const navLinks = [
  {
    id: "n1",
    iconSrc: "/images/window.svg",
    path: "/",
    alt: "Home Page",
  },
  {
    id: "n2",
    iconSrc: "/images/Shape.svg",
    path: "/movies",
    alt: "Movies Page",
  },
  {
    id: "n3",
    iconSrc: "/images/tv.svg",
    path: "/tv",
    alt: "TV series page",
  },
];

const MainNavigation = () => {
  const searchCtx = useContext(SearchContext);

  const pathname = usePathname();

  const searchValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
    searchCtx?.setSearchValue(event.target.value);
  };

  return (
    <nav
      className={`flex justify-between items-center lg:gap-x-20 fixed top-0 lg:top-14 lg:-translate-y-1/2 lg:left-1/2 lg:-translate-x-1/2 py-9 px-7 lg:py-4 text-white bg-white bg-opacity-5 backdrop-blur-2xl min-w-full lg:min-w-0 lg:rounded-[50px] z-50`}>
      <div className="flex gap-x-6 md:gap-x-8">
        {navLinks.map((link) => (
          <Link
            key={link.id}
            href={link.path}
            className={`${link.path === pathname ? "contrast-200 saturate-0 brightness-200" : ""}`}>
            <Image
              src={link.iconSrc}
              alt={link.alt}
              width={0}
              height={0}
              className="w-5 h-5 hover:hue-rotate-[120deg] hover:saturate-200 hover:contrast-125 transition-all duration-300"
            />
          </Link>
        ))}
      </div>
      <input
        onChange={searchValueHandler}
        type="text"
        placeholder="Search for titles..."
        className="bg-transparent focus:outline-none text-end"
      />
    </nav>
  );
};

export default MainNavigation;
