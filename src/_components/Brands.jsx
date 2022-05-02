import React from "react";
import { data } from "../constants";

const Brands = ({ className }) => {
    const brandsItems = data.brandsItems.map(({ img, alt }, i) => (
        <span className="brands__item" key={alt + i}>
            <img src={img} alt={alt} />
        </span>
    ));

    return (
        <section className={`${className || ""} brands`}>
            <div className="brands__container">
                <h2 className="brands__title">
                    Over <span>1.3 million</span> users and global brands trust us
                </h2>
                <div className="brands__body">{brandsItems.length && brandsItems}</div>
            </div>
        </section>
    );
};

export default Brands;
