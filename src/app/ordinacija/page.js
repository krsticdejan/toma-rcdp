"use client";

import Container from "../components/Container";
import useFetch from "../hooks/useFetch";
import Title from "../components/about/Title"
import ImageOrdination from "../components/about/Image"
import Text from "../components/about/Text"
import useImage from "../hooks/useImage";

const PAGE_SLUG = "ordinacija";

const AboutPage = () => {
  const { data, loading } = useFetch(`/wp-json/wp/v2/pages?slug=${PAGE_SLUG}`);
  const pageData = data?.[0];
  const pageDataText = pageData?.acf?.text || [];
  const pageDataImage = pageData?.acf?.image || [];
  const pageDataDescription = pageData?.acf?.description || [];
  const { mediaData, loading: imgLoading, error: imgError } = useImage(pageDataImage);

  return (
    <section className="ordination">
      <Container>
        <div className="ordination__wrap">
          <Title title={pageDataText} />
          <ImageOrdination source={mediaData.src} altTag={mediaData.alt ? mediaData.alt : 'ordinacija'} />
        </div>
        <Text text={pageDataDescription} />
      </Container>
    </section>
  );
};


export default AboutPage;
