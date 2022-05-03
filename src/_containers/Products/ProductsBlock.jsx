import React from "react";
import parse from "html-react-parser";
import { data } from "./../../constants";

const ProductsBlock = () => {
    const productItems = data.productItems.map(({ title, titleAlt, visitLink, imgBig, imgAlt, description }, i) => (
        <div key={titleAlt + i} className="products-block__item">
            <div className="products-block__content">
                <div className="products-block__logo">
                    <img src={title} alt={titleAlt} />
                </div>
                <div className="products-block__text">{parse(description)}</div>
                <a href={visitLink} className="products-block__button button button_outline">
                    Visit {titleAlt}
                </a>
            </div>
            <div className="products-block__image">
                <img src={imgBig} alt={imgAlt} />
            </div>
        </div>
    ));

    return (
        <section className="products-page__products products-block">
            <div className="products-block__container">{productItems}</div>
        </section>
    );
};

export default ProductsBlock;
