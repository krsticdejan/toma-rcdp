// "use client";
// import Link, { LinkProps } from "next/link";
// import React from "react";
// import { useRouter } from "next/navigation";

// interface TransitionLinkProps extends LinkProps {
//   children: React.ReactNode;
//   href: string;
// }

// function sleep(ms: number): Promise<void> {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// export const TransitionLink: React.FC<TransitionLinkProps> = ({
//   children,
//   href,
//   ...props
// }) => {
//   const router = useRouter();

//   const handleTransition = async (
//     e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
//   ) => {
//     e.preventDefault();
//     // const body = document.querySelector("page-transition--after");

//     // body?.classList.add("page-transition--after");
//     console.log("before");
//     // await sleep(800);
//     router.push(href);
//     // await sleep(800);
//     console.log("after");
//     // body?.classList.remove("page-transition--after");
//   };

//   return (
//     <Link {...props} href={href} onClick={handleTransition}>
//       {children}
//     </Link>
//   );
// };

import gsap from "gsap";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const animatePageIn = () => {
  const loaderAfter = document.getElementById("page-transition--after");

  const tlLoader = gsap.timeline();

  tlLoader
    .set(loaderAfter, {
      scale: 2.5,
      borderBottomLeftRadius: "100%",
      borderBottomRightRadius: "100%",
      height: "100vh",
      width: "100vw",
      scaleY: 1,
      position: "fixed",
      top: 0,
      left: 0,
      backgroundColor: "#d81525",
      zIndex: 9999,
    })
    .to(loaderAfter, {
      yPercent: -150,
      duration: 1.2,
      ease: "power2.inOut",
      borderRadius: "50%",
    })
    .to(loaderAfter, {
      scale: 1,
      borderRadius: "0%",
      duration: 0.6,
      ease: "power2.inOut",
      onComplete: () => loaderAfter.remove(), // Remove the loader from DOM
    });
};

export const animatePageOut = (href: string, router: AppRouterInstance) => {
  const loaderBefore = document.getElementById("page-transition");

  if (loaderBefore) {
    const tlLoaderBefore = gsap.timeline();
    tlLoaderBefore
      .set(loaderBefore, {
        scale: 2.5,
        borderTopLeftRadius: "100%",
        borderTopRightRadius: "100%",
        height: "100vh",
        width: "100vw",
        scaleY: 1,
        position: "fixed",
        left: 0,
        opacity: 1,
        top: "150vh",
        backgroundColor: "#d81525", // Or any color you want
        zIndex: 9999,
      })
      .to(loaderBefore, {
        top: "100vh",
        scale: 2.5,
        scaleY: 1,
        opacity: 1,
        ease: "power2.inOut",
        borderTopLeftRadius: "50%",
        borderTopRightRadius: "50%",
      })
      .to(loaderBefore, {
        scale: 1,
        borderRadius: "0%",
        duration: 0.6,
        top: 0,
        ease: "power2.inOut",
        onComplete: () => {
          router.push(href);
        },
      });
  }
};
