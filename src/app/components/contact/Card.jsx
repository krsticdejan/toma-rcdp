import Image from "next/image";

const Card = ({ title, email, phone, phoneAlt, linkedin, source, altTag }) => {
  return (
    <div className="contact__item">
      <div className="contact__item-text">
        <h4 style={{ whiteSpace: "pre-line" }}>{title}</h4>

        <ul>
          <li>
            E-mail: <a href={`mailto:${email}`}>{email}</a>
          </li>
          <li>
            Telefon: <a href={`tel:${phoneAlt}`}>{phone}</a>
          </li>
          <li>
            LinkedIN:{" "}
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              klikni za profil
            </a>
          </li>
        </ul>
      </div>

      <div className="contact__item-img">
        <Image
          src={source}
          alt={title}
          width={200}
          height={200}
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
};

export default Card;
