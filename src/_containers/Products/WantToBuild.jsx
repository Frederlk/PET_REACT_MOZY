import React from "react";
import { Link } from "react-router-dom";
import { Heading } from "../../_components";

const WantToBuild = () => {
    return (
        <section className="products-page__want want-products">
            <div className="want-products__container">
                <Heading
                    className="want-products__heading"
                    label="IN THE NEWS"
                    title="Want to know how we build products for the future?"
                    text="Then be a part of our remarkable journey and let’s learn together!"
                />
                <div className="want-products__buttons">
                    <Link to="/about" className="want-products__button button">
                        About us
                    </Link>
                    <Link to="/hiring" className="want-products__button button button_outline">
                        Join the team
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default WantToBuild;
