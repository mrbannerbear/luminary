"use client"

import { useEffect, useRef, useState } from "react";

const Impact_Counter = () => {
    const [numbers, setNumbers] = useState<number>(0);

    // 1. Get the target DOM element
    const counterRef = useRef<HTMLInputElement>(null);
  
    // 2. Using effect hook as DOM manipulation like using event handlers are side effects
    useEffect(() => {
      // 3. A function that returns a value if the viewport is in counterRef's position
      const scrollTrigger = () => {
        // Without the line below, we encounter a TypeScript error saying counterRef.element could be 'null'
        const element = counterRef.current as HTMLInputElement;
  
        // 4. Figuring out the exact position the user should be to trigger the function
        if (element.getBoundingClientRect().top < window.innerHeight / 2 + 10) {
          if (numbers < 150000) {
            // Start interval to increment numbers
            const interval = setInterval(() => {
              setNumbers(prevNumbers => {
                if (prevNumbers >= 150000) {
                  clearInterval(interval);
                  return prevNumbers; // No change needed
                }
                return prevNumbers + 2000; // Increment numbers
              });
            }, 70);
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
        <span ref={counterRef}>
            {numbers}
        </span>
    );
};

export default Impact_Counter;