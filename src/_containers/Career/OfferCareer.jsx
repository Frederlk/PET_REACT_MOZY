import React from "react";
import { data } from "../../constants";
import { CultereBody, Heading } from "../../_components";

const OfferCareer = ({ className }) => {
    return (
        <section className={`${className || ""} offer-career`}>
            <div className="offer-career__container">
                <Heading
                    className="offer-career__heading"
                    label="THE BEST"
                    title="We offer nothing but the best"
                    text="We put our people first and have built a culture that brings the best out of everyone."
                />
                <CultereBody className="offer-career__body" data={data.bestOffer} />
            </div>
        </section>
    );
};

export default OfferCareer;
