"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import TransitionLink from "../TransitionLink";

const NextImage = ({ source, altTag, title, link }) => {
  const pathname = usePathname();
  const [customLink, setCustomLink] = useState(link);
  const [customTitle, setCustomTitle] = useState(title);
  const [customImage, setCustomImage] = useState(source);

  useEffect(() => {
    const visitedBranka = localStorage.getItem("visitedBranka");
    const visitedToma = localStorage.getItem("visitedToma");

    // Set flags based on the current path
    if (pathname === "/branka-stamatovic-gajic") {
      localStorage.setItem("visitedBranka", "true");
    }

    if (pathname === "/tomislav-gajic") {
      localStorage.setItem("visitedToma", "true");
    }

    // If both have been visited, change the link and title
    if (visitedBranka === "true" && visitedToma === "true") {
      setCustomLink("/ordinacija");
      setCustomTitle("Ordinacija");
      setCustomImage("ordination.svg");
    }
  }, [pathname]);

  return (
    <div className="biography-content__next">
      <TransitionLink href={customLink} target="_self" className="next-link">
        <Image
          src={customImage}
          alt={altTag}
          width={120}
          height={120}
          style={{ objectFit: "contain" }}
        />
        <span className="next-link-text">{customTitle} &gt;</span>
      </TransitionLink>
    </div>
  );
};

export default NextImage;
