"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { RxAvatar } from "react-icons/rx";

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
  {
    id: "n4",
    iconSrc: "/images/Bookmark.svg",
    path: "/bookmarks",
    alt: "Bookmarks page",
  },
];

const MainNavigation = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <nav className="flex lg:flex-col justify-between items-center fixed top-0 lg:top-1/2 lg:-translate-y-1/2 lg:h-[90vh] py-9 px-7 text-white bg-dark-blue min-w-full lg:min-w-0 lg:rounded-3xl lg:ms-8 z-50">
      <Image src="/images/Movie.svg" alt="logo" width={0} height={0} className="h-auto w-6 md:w-8" />
      <div className="flex lg:flex-col gap-y-10 gap-x-6 md:gap-x-8">
        {navLinks.map(link => (
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
      <div className="flex flex-col items-center gap-y-8">
        <RxAvatar className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
      </div>
    </nav>
  );
};

export default MainNavigation;
