import React from "react";

const CultereBody = ({ className, data }) => {
    const cultereItems = data.map(({ title, image, text }, i) => (
        <article key={title + i} className="body-cultere__item">
            <h5 className="body-cultere__title">
                {image && (
                    <span className="body-cultere__image">
                        <img src={image} alt={title} />
                    </span>
                )}
                {title}
            </h5>
            <p className="body-cultere__text">{text}</p>
        </article>
    ));

    return <div className={`${className || ""} body-cultere`}>{cultereItems.length && cultereItems}</div>;
};

export default CultereBody;
