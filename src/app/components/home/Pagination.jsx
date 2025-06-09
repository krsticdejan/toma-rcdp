import React from "react";

const Pagination = ({ current = 1, totalSlides }) => {
  const formatNumber = (num) => (num < 10 ? `0${num}` : `${num}`);

  return (
    <div className="hero-pagination">
      <div className="hero-pagination__item hero-pagination__current">
        {formatNumber(current)}
      </div>
      <div className="hero-pagination__item hero-pagination__total">
        {formatNumber(totalSlides)}
      </div>
    </div>
  );
};

export default Pagination;
