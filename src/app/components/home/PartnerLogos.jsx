// components/PartnerLogos.js
import React from "react";
import PartnerLogoItem from "./PartnerLogoItem";

const PartnerLogos = ({ partners = [], isMobile = false }) => {
  if (!partners.length) return null;

  return (
    <ul
      className={`hero-slider__partners ${
        isMobile ? "is-mobile" : "is-desktop"
      }`}
    >
      {partners.map((partner, index) => (
        <PartnerLogoItem key={index} partner={partner} />
      ))}
    </ul>
  );
};

export default PartnerLogos;
