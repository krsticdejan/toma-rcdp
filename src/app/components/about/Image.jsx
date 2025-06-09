import Image from "next/image";

const OrdinationImage = ({ source, altTag }) => (
  <div className="ordination__image">
    <Image
      src={source}
      alt={altTag}
      width={600}
      height={400}
      style={{ objectFit: "cover" }}
    />
  </div>
);

export default OrdinationImage;
