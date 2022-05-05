import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import { images } from "../constants";

import { Brands, MainScreen } from "../_components";
import { AwardsHome, InnovationHome, LetsHome, ProductsHome } from "../_containers";

const Home = () => {
    return (
        <>
            <Helmet>
                <meta name="Homepage" content="Homepage" />
                <title>Mozy</title>
            </Helmet>

            <MainScreen
                className="home__main-screen fullscreen"
                title="We build products to simplify work for businesses"
                text="Our next-gen products empower businesses to implement agility and accelerate growth."
                imgSrc={images.mainScreenImages.mainHome}
                imgAlt="Home">
                <div className="main-screen__buttons">
                    <Link to="/about" className="main-screen__button button">
                        Learn more
                    </Link>
                    <Link to="/career" className="main-screen__button button button_outline">
                        Work with us
                    </Link>
                </div>
            </MainScreen>
            <Brands className="home__brands" />
            <ProductsHome />
            <AwardsHome />
            <InnovationHome />
            <LetsHome />
        </>
    );
};

export default Home;
