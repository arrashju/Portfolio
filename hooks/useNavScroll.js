import { useState, useEffect } from "react";

function useNavScroll() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [navScroll, setNavScroll] = useState('scroll-down');

  useEffect(() => {
    let previousScrollPosition = 0;

    // Handler to call on nav scroll
    function handleNavScroll() {
        let currentScrolledPosition = window.scrollY || window.pageYOffset;
        let scrollingDown;
        
        if (currentScrolledPosition > previousScrollPosition) {
            setNavScroll('scroll-down')
        } else {
            setNavScroll('scroll-up')
        }

        previousScrollPosition = currentScrolledPosition;
        return scrollingDown;
    };

    var throttleWait;

    const throttle = (callback, time) => {
      // if the variable is true, don't run the function
      if (throttleWait) return;

      // set the wait variable to true to pause the function
      throttleWait = true;

      // use setTimeout to run the function within the specified time
      setTimeout(() => {
        callback();

        // set throttleWait to false once the timer is up to restart the throttle function
        throttleWait = false;
      }, time);
    }
    
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    // Add event listener
    window.addEventListener('scroll', (event) => {
      if (mediaQuery && !mediaQuery.matches) {
        throttle(handleNavScroll, 250)
      }
    });

    // Call handler right away so state gets updated with initial nav scroll
    handleNavScroll();

    // Remove event listener on cleanup
    return () => window.addEventListener('scroll', (event) => {
      if (mediaQuery && !mediaQuery.matches) {
        throttle(handleNavScroll, 250)
      }
    });
  }, []); // Empty array ensures that effect is only run on mount

  return navScroll;
}

export default useNavScroll;
