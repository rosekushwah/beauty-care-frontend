// useEffect inside your main Layout or App.js
import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function useLocoScroll(start) {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!start) return;

    const scrollEl = scrollRef.current;

    const locoScroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      multiplier: 1.2,
      smartphone: {
        smooth: true,
      },
      tablet: {
        smooth: true,
      },
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(scrollEl, {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: scrollEl.style.transform ? "transform" : "fixed",
    });

    const onResize = () => {
      ScrollTrigger.refresh();
    };

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    window.addEventListener("resize", onResize);

    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.removeEventListener("refresh", () => locoScroll.update());
      locoScroll.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [start]);

  return scrollRef;
}

export default useLocoScroll;
