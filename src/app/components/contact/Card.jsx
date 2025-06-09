import Image from "next/image";

const Card = ({ textCard, source, altTag }) => {
  return (
    <div className="contact__item">
      <div
        className="contact__item-text"
        dangerouslySetInnerHTML={{ __html: textCard }}
      />
      <div className="contact__item-img">
        <Image
          src={source}
          alt={altTag}
          width={200}
          height={200}
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
};

export default Card;
