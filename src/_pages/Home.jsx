import React from "react";
import { images } from "../constants";
import MainScreen from "../_components/MainScreen";

const Home = ({ className }) => {
    return (
        <main className={`page ${className || ""}`}>
            <MainScreen
                className="home__main-screen fullscreen"
                title="We build products to simplify work for businesses"
                text="Our next-gen products empower businesses to implement agility and accelerate growth."
                imgSrc={images.mainScreenImages.mainHome}
                imgAlt="Home">
                <div className="main-screen__buttons">
                    <a href="#" className="main-screen__button button">
                        Learn more
                    </a>
                    <a href="#" className="main-screen__button button button_outline">
                        Work with us
                    </a>
                </div>
            </MainScreen>
        </main>
    );
};

export default Home;
