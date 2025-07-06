"use client";

import { animatePageIn } from "./components/utils/animations";
import { useEffect } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    animatePageIn();
  }, []);
  return (
    <div>
      <div id="page-transition" className="page-transition"></div>
      <div id="page-transition--after" className="page-transition--after"></div>

      {children}
    </div>
  );
}
