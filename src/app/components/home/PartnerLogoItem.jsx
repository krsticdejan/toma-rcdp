// components/PartnerLogoItem.js
import React from "react";
import useImage from "../../hooks/useImage";
import Image from "next/image";

const PartnerLogoItem = ({ partner }) => {
  const { mediaData, loading, error } = useImage(partner.logo);

  if (loading || error || !mediaData?.src) return null;

  const logoImage = (
    <Image
      src={mediaData.src}
      alt={mediaData.alt || "Partner logo"}
      width={100}
      height={100}
    />
  );

  return (
    <li>
      {partner.link ? (
        <a
          href={partner.link.url}
          target={partner.link.target || "_self"}
          rel={
            partner.link.target === "_blank" ? "noopener noreferrer" : undefined
          }
        >
          {logoImage}
        </a>
      ) : (
        logoImage
      )}
    </li>
  );
};

export default PartnerLogoItem;
