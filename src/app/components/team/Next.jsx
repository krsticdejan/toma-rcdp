import Image from "next/image";
import Link from "next/link";
const NextImage = ({ source, altTag, title, link }) => {
  return (
    <div className="biography-content__next">
      <Link href={link} target="_self" className="next-link">
        <Image
          src={source}
          alt={altTag}
          width={120}
          height={120}
          style={{ objectFit: "contain" }}
        />
        <span className="next-link-text">{title} &gt;</span>
      </Link>
    </div>
  );
};

export default NextImage;
