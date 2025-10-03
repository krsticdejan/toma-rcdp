import Image from "next/image";
import PartnerLogos from "./PartnerLogos";
import Button from "../Button";

const HeroSlide = ({ slide, index, image, partnerImages }) => {
  return (
    <div className="hero-slide__wrap" key={index}>
      <div className="hero-slide__title is-mobile">
        {slide.title && (
          <h2 style={{ whiteSpace: "pre-line" }}>{slide.title}</h2>
        )}
      </div>
      <div className="hero-slide__img">
        <Image
          className="rotate-img"
          src="/rcdp-logo.svg"
          alt="rcdp-rotate"
          width={417}
          height={417}
        />

        <Image
          src={slide.image}
          alt={slide.title}
          width={649}
          height={722}
          className={`main-img ${slide.class}`}
        />

        {slide.logotypes && (
          <PartnerLogos
            partners={slide.logotypes}
            images={slide.logotypes}
            isMobile
          />
        )}
      </div>
      <div className="hero-slide__content">
        {slide.logotypes && (
          <PartnerLogos partners={slide.logotypes} images={slide.logotypes} />
        )}
        {slide.title && (
          <h2 className="is-desktop" style={{ whiteSpace: "pre-line" }}>
            {slide.title}
          </h2>
        )}
        {slide.text && <p>{slide.text}</p>}
        {slide?.link && (
          <div className="hero-slide__btn">
            <Button link={slide.link} title="ISTRAŽI" target="_self" />
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSlide;
