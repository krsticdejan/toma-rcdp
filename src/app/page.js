"use client";
import { useState } from "react";
import Container from "./components/Container";
import useFetch from "./hooks/useFetch";
import useSliderImages from "./hooks/useSliderImages";
import usePartnerLogos from "./hooks/usePartnerLogos";
import HeroSlider from "./components/home/HeroSlider";
import ReactFullpage from "@fullpage/react-fullpage";

const PAGE_SLUG = "pocetna";

const HomePage = () => {
  const { data, loading } = useFetch(`/wp-json/wp/v2/pages?slug=${PAGE_SLUG}`);
  const [heroSlider, setHeroSlider] = useState(null);

  const pageData = data?.[0];
  const sliderData = pageData?.acf?.slider || [];
  const sliderImages = useSliderImages(pageData);
  const partnerImages = usePartnerLogos(pageData);
  const onLeave = (origin, destination, direction) => {
    const targetIndex = destination.index;
    if (heroSlider && typeof heroSlider.slideTo === "function") {
      heroSlider.slideTo(targetIndex);
    }
  };


  return (
    <section id="uvod" className="hero white-section">
      <ReactFullpage
        licenseKey={"GPLv3"} // replace with your license key or 'YOUR_KEY_HERE'
        scrollingSpeed={1000}
        autoScrolling={true}
        scrollHorizontally={true}
        loopBottom={true}
        loopTop={true}
        onLeave={onLeave}
        render={() => (
          <ReactFullpage.Wrapper>
            <div className="section"></div>
            <div className="section"></div>
            <div className="section"></div>
          </ReactFullpage.Wrapper>
        )}
      />
      <Container>
        {/* <FullpageSections onLeave={(origin, destination) => {
          heroSlider?.slideTo?.(destination.index);
        }} /> */}
        <HeroSlider
          sliderData={sliderData}
          sliderImages={sliderImages}
          partnerImages={partnerImages}
          setHeroSlider={setHeroSlider}
        />
      </Container>
    </section>
  );
};

export default HomePage;
