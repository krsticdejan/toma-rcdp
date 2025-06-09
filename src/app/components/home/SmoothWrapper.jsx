"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import { usePathname } from "next/navigation";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function SmoothWrapper({ children }) {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);
  const pathname = usePathname(); // track route changes

  useEffect(() => {
    let smoother;

    if (typeof window !== "undefined") {
      // Kill all existing smoothers (in case it's not properly destroyed)

      smoother = ScrollSmoother.create({
        wrapper: wrapperRef.current,
        content: contentRef.current,
        smooth: 1.2,
        normalizeScroll: true,
        ignoreMobileResize: true,
        preventDefault: true,
      });
    }

    return () => {
      if (smoother) smoother.kill();
    };
  }, [pathname]); // re-run on route change

  return (
    <div id="smooth-wrapper" ref={wrapperRef}>
      <div id="smooth-content" ref={contentRef}>
        {children}
      </div>
    </div>
  );
}
