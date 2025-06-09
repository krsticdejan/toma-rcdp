"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";

const FooterWrapper = () => {
  const pathname = usePathname();

  // Add all routes that should NOT show the footer
  const noFooterRoutes = ["/"];

  if (noFooterRoutes.includes(pathname)) {
    return null;
  }

  return <Footer />;
};

export default FooterWrapper;
