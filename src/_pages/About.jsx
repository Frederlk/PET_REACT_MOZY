import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { images, data } from "../constants";
import { AboutBlock, Brands, MainScreen } from "../_components";
import { CultereCode, InfoAbout } from "../_containers";
import WeAreHiring from "../_containers/About/WeAreHiring";

const About = () => {
    return (
        <>
            <Helmet>
                <meta name="About Page" content="About Page" />
                <title>About</title>
            </Helmet>

            <MainScreen
                className="about-page__main-screen "
                title="About Mozi"
                text="Mozi is a technology company that builds products to simplify work. 1.3 million businesses of every size — from startups to global brands, use our tools to work better."
                imgSrc={images.mainScreenImages.mainAbout}
                imgAlt="About"
            />
            <Brands className="about-page__brands" />
            <InfoAbout className="about-page__info" />
            <CultereCode />
            <section className="about-page__what what-about">
                <div className="what-about__container">
                    <AboutBlock className="what-about__about" data={data.aboutBlockItems[1]} />
                </div>
            </section>
            <WeAreHiring className="about-page__hiring" />
        </>
    );
};

export default About;
