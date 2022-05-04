import React from "react";
import { data } from "../../constants";

const InfoAbout = ({ className }) => {
    const infoAboutItems = data.infoAboutItems.map(({ title, text, image }, i) => (
        <div key={text + i} className="info-about__item">
            <h4 className="info-about__title">{title}</h4>
            <div className="info-about__text">{text}</div>
            <div className="info-about__img">
                <img src={image} alt={title} />
            </div>
        </div>
    ));

    return (
        <section className={`${className || ""} info-about`}>
            <div className="info-about__container">{infoAboutItems.length && infoAboutItems}</div>
        </section>
    );
};

export default InfoAbout;
