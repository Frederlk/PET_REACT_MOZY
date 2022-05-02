import React from "react";

const ProductCard = ({ data, className }) => {
    const { title, titleAlt, text, link, img, imgAlt } = data;

    return (
        <article className={`${className || ""} item-product`}>
            <div className="item-product__content">
                <a href={link} className="item-product__title">
                    <img src={title} alt={titleAlt} />
                </a>
                <p className="item-product__text">{text}</p>
                <a href={link} className="item-product__button button button_arrow button_outline">
                    <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.39375 13.0125L12.9049 7.50002L7.39235 1.98752M1.09375 7.50002H12.9063H1.09375Z"
                            stroke="#BF0830"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    Learn more
                </a>
            </div>
            <div className="item-product__image">
                <img src={img} alt={imgAlt} />
            </div>
        </article>
    );
};

export default ProductCard;
