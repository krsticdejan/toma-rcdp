"use client";

import Container from "../components/Container";
import Title from "../components/about/Title"
import ImageOrdination from "../components/about/Image"
import Text from "../components/about/Text"
import aboutData from "../data/aboutData";

const AboutPage = () => {

  return (
    <section className="ordination">
      <Container>
        <div className="ordination__wrap">
          <Title title={aboutData.title} text={aboutData.text} />
          <ImageOrdination
            source={aboutData.image}
            altTag="ordinacija"
          />

        </div>
        <Text text={aboutData.description} />
      </Container>
    </section>
  );
};


export default AboutPage;
