import React from "react";
import { Link } from "react-router-dom";
import { Heading } from "../../_components";

const WriteToUs = ({ className }) => {
    return (
        <section className={`${className || ""} write-to-us`}>
            <div className="write-to-us__container">
                <Heading
                    className="write-to-us__heading"
                    label="Find US"
                    title="Didn’t find what you’re looking for?"
                    text="We are always on the lookout for great people. Tell us why you want to join us."
                />
                <div className="write-to-us__button-wrap">
                    <Link to="/contact" className="write-to-us__button button">
                        Write to us
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default WriteToUs;
