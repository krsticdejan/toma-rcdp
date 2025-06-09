"use client";

import React, { useRef } from 'react';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP, ScrollTrigger);

import useFetch from "../hooks/useFetch";
import useImage from "../hooks/useImage";

import Container from "../components/Container";
import Title from "../components/team/Title";
import Text from "../components/team/Text";
import ImageTeam from "../components/team/Image";
import BiographyContent from '../components/team/BiographyContent';
const PAGE_SLUG = "branka-stamatovic-gajic";

const BranaPage = () => {
    const mainRef = useRef();

    // Fetch data
    const { data } = useFetch(`/wp-json/wp/v2/pages?slug=${PAGE_SLUG}`);
    const pageData = data?.[0];
    const {
        acf: {
            text: pageTitle = "",
            about: pageShotBio = "",
            image: pageDataImage = [],
            next_img: pageDataImageNext = [],
            bio_repeater: pageDataRepeater = [],
            next_link: pageDataLinkNext = null,
        } = {},
    } = pageData || {};

    // Image hooks
    const { mediaData: mainImage = {} } = useImage(pageDataImage);
    const { mediaData: nextImage = {} } = useImage(pageDataImageNext);

    // GSAP animation setup
    useGSAP(() => {

        const isMobile = window.innerWidth <= 575;
        const imageWidth = isMobile ? `${window.innerWidth - 40}px` : "50vh";

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".biography",
                start: "top top",
                end: "bottom bottom",
                scrub: true,
                pin: ".biography__banner",
            },
        });

        tl.to(".biography__banner-text", { opacity: 0, duration: 0.2 })
            .to(".biography__banner-image", {
                left: "50%",
                top: "50%",
                xPercent: -50,
                yPercent: -50,
                width: imageWidth,
                duration: 1,
            })
            .to(".biography__logo", {
                top: '15%',
                right: "0%",
                bottom: "0%",
                width: "100%",
                maxWidth: "100%",
                duration: 1,
            }, "<")
            .to(".biography__portret", {
                borderRadius: "50%",
                maxWidth: "60%",
                top: "-30%",
                duration: 1,
            }, "<")
            .to(".biography__logo", { rotate: 180, duration: 1 })
            .to(".biography__text", { opacity: 1, duration: 1 }, "<");




        // Clean up triggers
        return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    }, { scope: mainRef });

    return (
        <div className="biography-wrapper" ref={mainRef}>
            <section id="biography" className="biography white-section">
                <Container>
                    <div className="biography__banner-wrapper">
                        <div className="biography__banner">
                            <Title text={pageTitle} />
                            <ImageTeam source={mainImage.src} altTag={mainImage.alt ? mainImage.alt : 'Branka Gajic'} />
                            <Text text={pageShotBio} />
                        </div>
                    </div>
                </Container>
            </section>

            <BiographyContent
                pageDataRepeater={pageDataRepeater}
                pageDataLinkNext={pageDataLinkNext}
                nextImage={nextImage}
            />


        </div>
    );
};

export default BranaPage;
