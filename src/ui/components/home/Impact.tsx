"use client";
import Section from "@/ui/shared/Section";
import { useEffect, useRef, useState } from "react";

const Impact = () => {
  let [numbers, setNumbers] = useState<number>(0);

  // Get the target DOM element
  const counterRef = useRef<HTMLInputElement>(null);

  // A function that returns a value if the viewport is in counterRef's position
  const scrollTrigger = () => {
    // Without the line below, we encounter a TypeScript error saying counterRef.element could be 'null'
    const element = counterRef.current as HTMLInputElement;

    if (element.getBoundingClientRect().top < window.innerHeight / 2 + 10) {
      alert(element.getBoundingClientRect());
    }
  };

  // Using effect hook as DOM manipulation like using event handlers are side effects
  useEffect(() => {
    // Adding event handler to trigger the function above when scrolled. We add the handler to window & not
    // the target element as the window is being scrolled not the element i.e. counterRef
    window.addEventListener("scroll", scrollTrigger);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", scrollTrigger);
    };
  }, []);

  return (
    <Section>
      <div className="min-h-[200vh]" ref={counterRef}>
        {numbers}
      </div>
    </Section>
  );
};

export default Impact;