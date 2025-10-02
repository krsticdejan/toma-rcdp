"use client";
import { useState } from "react";
import Container from "./components/Container";
import HeroSlider from "./components/home/HeroSlider";
import ReactFullpage from "@fullpage/react-fullpage";

import homeData from "./data/homeData";

const HomePage = () => {
  const [heroSlider, setHeroSlider] = useState(null);
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

        <HeroSlider
          sliderData={homeData.slide}
          sliderImages={homeData.slide}
          partnerImages={homeData.slide}
          setHeroSlider={setHeroSlider}
        />
      </Container>
    </section>
  );
};

export default HomePage;
