// components/PartnerLogoItem.js
import React from "react";
import Image from "next/image";

const PartnerLogoItem = ({ partner }) => {
  const logoImage = (
    <Image
      src={partner.src}
      alt={partner.alt || "Partner logo"}
      width={100}
      height={100}
    />
  );

  return <li>{logoImage}</li>;
};

export default PartnerLogoItem;
