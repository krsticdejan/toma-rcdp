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
  // const { mediaData, loading: imgLoading, error: imgError } = useImage(pageDataImage);

  // Ensure it's a number or string (ID), not an array
  const imageId = Array.isArray(pageData?.acf?.image) ? pageData.acf.image[0] : pageData?.acf?.image;

  const { mediaData, loading: imgLoading, error: imgError } = useImage(imageId);


  return (
    <section className="ordination">
      <Container>
        <div className="ordination__wrap">
          <Title title={pageDataText} />
          {imgLoading ? (
            <div>Loading image…</div>
          ) : mediaData.src ? (
            <ImageOrdination
              source={mediaData.src}
              altTag={mediaData.alt || "ordinacija"}
            />
          ) : (
            <div></div>
          )}
        </div>
        <Text text={pageDataDescription} />
      </Container>
    </section>
  );
};


export default AboutPage;
