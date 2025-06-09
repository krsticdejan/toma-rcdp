"use client";

import Container from "./Container";
import Image from "next/image";
const Footer = () => {
  return (
    <footer id="colophon" className="site-footer dark-section">
      <Container>
        <div className="site-footer__wrap container-fluid">
          <div className="site__footer-widget-1">
            <div className="site__footer-logo">
              <Image
                src="logo-footer.svg"
                alt="footer-logo"
                width={320}
                height={125}
              />
            </div>
            <p>
              TOMISLAV GAJIĆ PR, SPECIJALISTIČKA LEKARSKA ORDINACIJA IZ OBLASTI
              PSIHIJATRIJE I PSIHOTERAPIJE REGIONALNI CENTAR ZA DINAMIČKU
              PSIHIJATRIJU VALJEVO
            </p>
          </div>
          <div className="site__footer-widget-2">
            <p>
              Pravna forma: Preduzetnik
              <br />
              Matični broj: 62605316
              <br />
              Datum osnivanja: 19.09.2011.
              <br />
              Adresa: Pop Lukina 34, 14000 Valjevo, Srbija
              <br />
              Šifra delatnosti: 8622
              <br />
              Opis delatnosti: Specijalistička medicinska praksa
              <br />
              Poreski identifikacioni broj PIB: 107262602
              <br />
              Broj tekućeg računa: 160-0000000360372-25
            </p>
          </div>
        </div>
        <div className="site-footer__copyright container-fluid">
          <div className="m-copyright">
            <p>
              Design &amp; Developed
              <br />
              <span>
                by <a href="https://monochrome.rs">Monochrome</a>
              </span>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
