"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Next from "./Next";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const BiographyContent = ({
  pageDataRepeater,
  pageDataLinkNext,
  nextImage,
  linkNextTitle,
}) => {
  const mainRef = useRef();

  // GSAP animation setup
  useGSAP(
    () => {
      if (!pageDataRepeater.length) return;

      const q = gsap.utils.selector(mainRef);
      const items = q(".biography-content__item");
      const totalElement = q(".hero-pagination__total");
      const line = document.querySelector(".biography-content__line-before");

      ScrollTrigger.create({
        trigger: q(".biography-content__items"),
        start: "top center",
        end: "bottom center",
        scrub: true,
        onUpdate: (self) => {
          const scrollPercent = self.progress * 100;
          line.style.height = `${scrollPercent}%`;
        },
        onEnter: () => {
          document
            .querySelector(".hero-pagination.is--biography")
            ?.classList.add("is--active");
        },
        onEnterBack: () => {
          document
            .querySelector(".hero-pagination.is--biography")
            ?.classList.add("is--active");
        },
        onLeaveBack: () => {
          document
            .querySelector(".hero-pagination.is--biography")
            ?.classList.remove("is--active");
        },
        onLeave: () => {
          document
            .querySelector(".hero-pagination.is--biography")
            ?.classList.remove("is--active");
        },
      });

      items.forEach((item, index) => {
        const activeIndex = index + 1;
        ScrollTrigger.create({
          trigger: item,
          start: "top center",
          end: "bottom center",
          scrub: true,
          onUpdate: () => {
            const current = q(".hero-pagination__current");
            if (current) {
              current[0].textContent = String(activeIndex).padStart(2, "0");
            }
          },
          onEnter: () => item.classList.add("is--active"),
          onLeaveBack: () => item.classList.remove("is--active"),
        });
      });

      if (totalElement) {
        totalElement.textContent = String(items.length).padStart(2, "0");
      }

      return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    },
    { scope: mainRef, dependencies: [pageDataRepeater] }
  );

  return (
    <section className="biography-content" ref={mainRef}>
      <div className="container">
        <div className="biography-content__wrap">
          <div className="biography-content__line">
            <div className="biography-content__line-before" />
          </div>

          <div className="biography-content__items">
            {pageDataRepeater.map((item, index) => (
              <div
                key={index}
                className="biography-content__item"
                dangerouslySetInnerHTML={{ __html: item?.text }}
              />
            ))}
          </div>
        </div>

        <Next
          source={nextImage}
          altTag="Tomislav Gajic"
          title={linkNextTitle}
          link={pageDataLinkNext}
        />
      </div>
      <div className="hero-pagination is--biography">
        <div className="hero-pagination__item hero-pagination__current">01</div>
        <div className="hero-pagination__item hero-pagination__total">
          0{pageDataRepeater.length}
        </div>
      </div>
    </section>
  );
};

export default BiographyContent;
