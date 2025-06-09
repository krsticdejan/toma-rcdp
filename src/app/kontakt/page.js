"use client";

import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import Title from '../components/contact/Title';
import Card from '../components/contact/Card';
import useImages from "../hooks/useImages";

const PAGE_SLUG = "kontakt";

const ContactPage = () => {
  const { data, loading } = useFetch(`/wp-json/wp/v2/pages?slug=${PAGE_SLUG}`);
  const pageData = data?.[0];
  const pageCards = pageData?.acf?.info_repeater || [];

  // collect all unique image IDs from cards
  const mediaIds = pageCards.map(card => card.image).filter(Boolean);

  // use your new hook with array of IDs
  const { mediaDataMap, loading: imagesLoading, error: imagesError } = useImages(mediaIds);


  return (
    <section id="kontakt" className="contact white-section">
      <div className="container">
        <Title title={pageData?.title?.rendered} />
        <div className="contact__wrap">
          {pageCards.map((card, index) => {
            const media = mediaDataMap[card?.image] || { src: "", alt: "" };

            return (
              <Card
                key={index}
                textCard={card?.text}
                source={media?.src || ""}
                altTag={media?.alt || ""}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
