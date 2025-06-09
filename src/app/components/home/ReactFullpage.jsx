"use client";
import ReactFullpage from "@fullpage/react-fullpage";

const MyFullpage = () => {
  return (
    <ReactFullpage
      render={() => (
        <div id="fullpage">
          <div className="section">Section 1</div>
          <div className="section">Section 2</div>
          <div className="section">Section 3</div>
        </div>
      )}
    />
  );
};

export default MyFullpage;
