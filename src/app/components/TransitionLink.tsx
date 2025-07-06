"use client";
import { usePathname, useRouter } from "next/navigation";
import { animatePageOut } from "./utils/animations";
import React from "react";

interface Props {
  href: string;
  label?: string;
  children: React.ReactNode;
  className?: string; // add className prop here
}

const TransitionLink = ({ href, children, className }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (pathname !== href) {
      animatePageOut(href, router);
    }
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

export default TransitionLink;
