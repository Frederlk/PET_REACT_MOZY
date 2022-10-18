import React from "react";
import { Link } from "react-router-dom";
import { images } from "../../constants";
import { Heading } from "../../_components";

const WeAreHiring = ({ className }) => {
    return (
        <section className={`${className || ""} are-hiring`}>
            <div className="are-hiring__container">
                <div className="are-hiring__content">
                    <Heading
                        className="are-hiring__heading"
                        title="We are hiring!"
                        text="Help us build tools for the future. We’re looking for curious and smart people to join forces with us and grow together."
                    />
                    <Link to="/career" className="are-hiring__button button button_outline">
                        Join the squad
                    </Link>
                    <div className="are-hiring__label">
                        <img src={images.defaultImages.beTheNext} alt="Be the next" />
                    </div>
                </div>
                <div className="are-hiring__image">
                    <img src={images.infoAboutImages.infoAbout06} alt="puzzle" />
                </div>
            </div>
        </section>
    );
};

export default WeAreHiring;
