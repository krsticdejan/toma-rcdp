import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";

const FullpageWrapper = () => {
  const onLeave = (origin, destination, direction) => {
    const targetIndex = destination.index;
    if (heroSlider && typeof heroSlider.slideTo === "function") {
      heroSlider.slideTo(targetIndex);
    }
  };

  return (
    <ReactFullpage
      licenseKey={"GPLv3"} // replace with your license key or 'YOUR_KEY_HERE'
      scrollingSpeed={1000}
      autoScrolling={true}
      scrollHorizontally={true}
      loopBottom={true}
      loopTop={true}
      onLeave={onLeave}
      render={({ state, fullpageApi }) => (
        <ReactFullpage.Wrapper>
          <div className="section"></div>
          <div className="section"></div>
          <div className="section"></div>
        </ReactFullpage.Wrapper>
      )}
    />
  );
};

export default FullpageWrapper;
