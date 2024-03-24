"use client";

import Link from "next/link";
import "../../globals.css";
import { useEffect, useState } from "react";

const Navbar = () => {
  let defaultState: string = window.location.pathname === "/" ? "nav1" : "nav2";
  const [navClass, setNavClass] = useState<string>(defaultState);

  useEffect(() => {
    // handleScroll function which is used in event listener & cleanup function
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (window.location.pathname === "/") {
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
  }, []);

  return (
    <nav className={`z-50 ${navClass}`}>
      <div>
        <span className="text-xl">LUMINARY</span>
      </div>

      <div className="flex justify-between items-center gap-5">
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/about"}>Projects</Link>
        <Link href={"/about"}>Contact</Link>
        <Link href={"/about"}>
          <button>Join the Cause</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
