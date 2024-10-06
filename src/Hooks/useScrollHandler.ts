import { useState, useEffect, useRef } from "react";

function useScrollHandler() {
  const [scroll, setScroll] = useState(false);
  const prevScrollRef = useRef(scroll);

  useEffect(() => {
    function onScroll() {
      const scrollCheck = window.scrollY > window.innerHeight / 100;

      if (scrollCheck !== prevScrollRef.current) {
        setScroll(scrollCheck);
        prevScrollRef.current = scrollCheck;
      }
    }

    document.addEventListener("scroll", onScroll);

    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  return scroll;
}

export default useScrollHandler;
