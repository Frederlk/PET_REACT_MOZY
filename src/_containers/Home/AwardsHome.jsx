import React from "react";
import { images } from "../../constants";
import { Heading } from "../../_components";

const AwardsHome = () => {
    return (
        <section className="home-page__awards awards-home">
            <div className="awards-home__container">
                <Heading
                    className="awards-home__heading"
                    label="Awards & Recognition"
                    title="Creators of award-winning products"
                    text="Our products are loved by customers and recommended by leading industry experts."
                />
                <div className="awards-home__body">
                    <div className="awards-home__images">
                        <div className="awards-home__column">
                            <div className="awards-home__item">
                                <img src={images.awardsImages.award01} alt="High Performer - Winter 2022" />
                            </div>
                            <div className="awards-home__item">
                                <img src={images.awardsImages.award03} alt="Easiest To Do Business With - Winter 2022" />
                            </div>
                        </div>
                        <div className="awards-home__column">
                            <div className="awards-home__item">
                                <img src={images.awardsImages.award02} alt="Eest Support - Winter 2022" />
                            </div>
                            <div className="awards-home__item">
                                <img src={images.awardsImages.award04} alt="NASSCOM InnoTrek 2018" />
                            </div>
                        </div>
                    </div>
                    <div className="awards-home__bg">
                        <img src={images.awardsImages.awardBg} alt="Vector Background" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AwardsHome;
