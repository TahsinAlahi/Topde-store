import { useState, useEffect, useRef } from "react";

function useScrollHandler(vhAmount: number = 100) {
  const [scroll, setScroll] = useState(false);
  const prevScrollRef = useRef(scroll);

  useEffect(() => {
    function onScroll() {
      // 1vh is equivalent to (window.innerHeight * vhAmount) / 100
      const scrollCheck =
        window.scrollY > (window.innerHeight * vhAmount) / 100;

      if (scrollCheck !== prevScrollRef.current) {
        setScroll(scrollCheck);
        prevScrollRef.current = scrollCheck;
      }
    }

    document.addEventListener("scroll", onScroll);

    return () => document.removeEventListener("scroll", onScroll);
  }, [vhAmount]);

  return scroll;
}

export default useScrollHandler;
