"use client";
import Title from '../components/contact/Title';
import Card from '../components/contact/Card';
import contactData from "../data/contactData";

const ContactPage = () => {
  return (
    <section id="kontakt" className="contact white-section">
      <div className="container">
        <Title title={contactData.title} />
        <div className="contact__wrap">
          {contactData.cards.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              email={card.email}
              phone={card.phone}
              phoneAlt={card.phone_alt}
              linkedin={card.linkedin}
              source={card.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
