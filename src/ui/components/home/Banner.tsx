"use client"

import Link from "next/link";
import { useEffect, useState } from "react";

const Banner = () => {

  interface bannerType {
    url: string;
    caption: string;
    subcaption: string
    link: string
  }

  let bannerArray: bannerType[] = [
    {
      url: "https://images.unsplash.com/photo-1502637098811-fa9526d2b659?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "Renewable Energy, One City at a Time",
      subcaption: `We're teaming up with local governments globally to transform entire cities into renewable energy hubs for sustainable urban living.`,
      link: "/projects/renewable-energy-01"
    },
    {
        url: "https://images.unsplash.com/photo-1521802077481-0d9be31078ba?q=80&w=1896&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "Our Efforts to Save Marine Life",
        subcaption: `Learn how we collaborate with top marine biologists, environmentalists & use state-of-the-art 
        methods to tackle ocean pollution & help conserve marine life.
        `,
        link: "/projects/marine-conservation_01"
    },
    {
        url: "https://images.unsplash.com/photo-1582481960493-26179ea458e0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "The Fight For Wildlife Conservation",
        subcaption: `How we're 
        tackling illegal deforestation, poaching, and supporting endangered
         species.`,
        link: "/projects/wildlife-conservation_01"
    }
  ];

  const [bannerContent, setBannerContent] = useState<bannerType>(bannerArray[0])

  // Using useEffect for cleanup function as React doesn't directly handle setInterval 
  useEffect(() => {
    let currentIndex = 0;

    const intervalId = setInterval(() => {
        setBannerContent(bannerArray[currentIndex]);
        currentIndex = (currentIndex + 1) % bannerArray.length; // Using modulus creates an infinite loop
    }, 4000);

    return () => clearInterval(intervalId); // Cleanup function to stop banner slide when component unmounts
// eslint-disable-next-line react-hooks/exhaustive-deps
}, []);


  return (
    <div className="min-h-screen">
    <div
      style={{
        backgroundImage: `url(${
          bannerContent.url})`,
      }}
      className="min-h-screen  bg-cover bg-center -mt-32 lg:-mt-20 z-40 flex justify-left items-center"
    >
      <div className="absolute w-full h-full bg-gradient-to-r from-black/60 via-transparent to-transparent"></div>
      <div className="text-purple-50 z-50 px-24 max-w-[650px]">
      <h2 className="text-4xl font-medium my-3">{
      bannerContent.caption}</h2>
      <p>{
      bannerContent.subcaption}</p>
      <p className="my-3">
        <Link href={
          bannerContent.url}>
          <button>
          Learn More
          </button>
        </Link>
      </p>
      </div>
    </div>
    </div>
  );
};

export default Banner;
