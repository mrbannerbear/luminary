"use client";

import Link from "next/link";
import "../../globals.css";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  let router = usePathname()
  let defaultState: string = router === "/" ? "nav1" : "nav2";
  const [navClass, setNavClass] = useState<string>(defaultState);

  useEffect(() => {
    // handleScroll function which is used in event listener & cleanup function
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (router === "/") {
        if (scrollPosition < 350) {
          setNavClass("nav1");
        } else {
          setNavClass("nav2");
        }
      } else {
        setNavClass("nav2");
      }
    };

    // Event listener to respond to scrolling
    window.addEventListener("scroll", handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [router]);

  return (
    <nav className={`z-40 ${navClass}`}>
      <div>
        <span className="text-xl">LUMINARY</span>
      </div>

      <div className="flex justify-between items-center gap-5">
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/projects"}>Projects</Link>
        <Link href={"/contact"}>Contact</Link>
        <Link href={"/blog"}>Blog</Link>
        <Link href={"/signup"}>
          <button>Join the Cause</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
