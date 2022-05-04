import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { images } from "../constants";
import { Brands, MainScreen } from "../_components";
import { InfoAbout } from "../_containers";

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
        </>
    );
};

export default About;
