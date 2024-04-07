"use client";
import Section from "@/ui/shared/Section";
import { useEffect, useRef, useState } from "react";

const Impact = () => {
  let [numbers, setNumbers] = useState<number>(0);

  // Get the target DOM element
  const counterRef = useRef<HTMLInputElement>(null);

  // Using effect hook as DOM manipulation like using event handlers are side effects
  useEffect(() => {
    // A function that returns a value if the viewport is in counterRef's position
    const scrollTrigger = () => {
      // Without the line below, we encounter a TypeScript error saying counterRef.element could be 'null'
      const element = counterRef.current as HTMLInputElement;

      if (element.getBoundingClientRect().top < window.innerHeight / 2 + 10) {
       if (numbers < 100000) {
          // Start interval to increment numbers
          const interval = setInterval(() => {
            setNumbers(prev => prev + 2500);
          }, 40);

          // Clear interval when numbers exceed 100,000
          if (numbers >= 100000) {
            clearInterval(interval);
          }
        }
      }
    };

    // Adding event handler to trigger the function above when scrolled. We add the handler to window & not
    // the target element as the window is being scrolled not the element i.e. counterRef
    window.addEventListener("scroll", scrollTrigger);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", scrollTrigger);
    };
  }, [numbers]);

  return (
    <Section>
      <div ref={counterRef}>
        {/* {numbers} */}

        <div className="text-center">
          <h1 className="text-3xl"><span>100000+</span> people involved</h1>
        </div>

      </div>
    </Section>
  );
};

export default Impact;
