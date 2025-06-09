import Image from "next/image";

const TeamImage = ({ source, altTag }) => {
  return (
    <div className="biography__banner-image">
      <Image
        className="biography__portret"
        src={source}
        alt={altTag}
        width={680}
        height={800}
        style={{ objectFit: "contain" }}
      />
      <Image
        className="biography__logo"
        src="rcdp-icon.svg"
        alt="rcdp-icon"
        width={571}
        height={571}
        style={{ objectFit: "contain" }}
      />
    </div>
  );
};

export default TeamImage;
