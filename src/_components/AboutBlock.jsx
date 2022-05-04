import React from "react";
import parse from "html-react-parser";

const AboutBlock = ({ className, data }) => {
    const { title, description, img } = data;
    return (
        <div className={`${className || ""} about-block`}>
            <div className="about-block__content">
                <h4 className="about-block__title">{title}</h4>
                <div className="about-block__text">{parse(description)}</div>
            </div>
            <div className="about-block__image">
                <img src={img} alt={title} />
            </div>
        </div>
    );
};

export default AboutBlock;
