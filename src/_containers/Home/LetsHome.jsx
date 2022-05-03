import React from "react";
import { images } from "../../constants";
import { Heading } from "../../_components";

const LetsHome = () => {
    return (
        <section className="home-page__lets lets-home">
            <div className="lets-home__container">
                <div className="lets-home__content">
                    <Heading
                        className="lets-home__heading"
                        label="AT MOZILOR"
                        title="Let's build the next big thing!"
                        text="Looking to achieve great things? You’ve come to the right place."
                    />
                    <a href="#Join" className="lets-home__button button button_outline">
                        Join the team
                    </a>
                </div>
                <div className="lets-home__image">
                    <img src={images.mainScreenImages.mainBuild} alt="happy vector people" />
                </div>
            </div>
        </section>
    );
};

export default LetsHome;
