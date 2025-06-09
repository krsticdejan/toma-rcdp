import Image from "next/image";
import PartnerLogos from "./PartnerLogos";
import Button from "../Button";

const HeroSlide = ({ slide, index, image, partnerImages }) => (
  <div className="hero-slide__wrap">
    <div className="hero-slide__title is-mobile">
      {slide.title && <h2 dangerouslySetInnerHTML={{ __html: slide.title }} />}
    </div>
    <div className="hero-slide__img">
      <Image
        className="rotate-img"
        src="rcdp-logo.svg"
        alt="rcdp-rotate"
        width={417}
        height={417}
      />
      {image && (
        <Image
          src={image.url}
          alt={image.alt}
          width={649}
          height={722}
          className="main-img"
        />
      )}
      {slide.partners && (
        <PartnerLogos
          partners={slide.partners}
          images={partnerImages}
          isMobile={true}
        />
      )}
    </div>
    <div className="hero-slide__content">
      {slide.partners && (
        <PartnerLogos partners={slide.partners} images={partnerImages} />
      )}
      {slide.title && (
        <h2
          className="is-desktop"
          dangerouslySetInnerHTML={{ __html: slide.title }}
        />
      )}
      {slide.text && <p>{slide.text}</p>}

      {slide?.link && (
        <div className="hero-slide__btn">
          <Button
            link={new URL(slide.link.url).pathname}
            title={slide.link.title}
            target={slide.link.target}
          />
        </div>
      )}
    </div>
  </div>
);

export default HeroSlide;
