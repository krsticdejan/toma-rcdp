import React from "react";
import useImage from "../../hooks/useImage";
import Image from "next/image";

// Utility hook to preload all images
const usePartnerImages = (partners) => {
  return partners.map((partner) => {
    const { mediaData, loading, error } = useImage(partner.logo);
    return { ...partner, mediaData, loading, error };
  });
};

const PartnerLogos = ({ partners = [], isMobile = false }) => {
  if (!partners.length) return null;

  const partnersWithImages = usePartnerImages(partners); // ✅ Called only once

  return (
    <ul
      className={`hero-slider__partners ${
        isMobile ? "is-mobile" : "is-desktop"
      }`}
    >
      {partnersWithImages.map((partner, index) => {
        if (partner.loading || partner.error || !partner.mediaData?.src)
          return null;

        const logoImage = (
          <Image
            src={partner.mediaData.src}
            alt={partner.mediaData.alt || "Partner logo"}
            width={100}
            height={100}
          />
        );

        return (
          <li key={index}>
            {partner.link ? (
              <a
                href={partner.link.url}
                target={partner.link.target || "_self"}
                rel={
                  partner.link.target === "_blank"
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                {logoImage}
              </a>
            ) : (
              logoImage
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default PartnerLogos;
