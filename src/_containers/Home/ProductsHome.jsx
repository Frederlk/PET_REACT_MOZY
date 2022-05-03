import React from "react";
import { data } from "../../constants";
import { Heading, ProductCard } from "../../_components";

const ProductsHome = () => {
    const productItems = data.productItems.map((item, i) => (
        <ProductCard className="products__item" key={item.titleAlt + i} data={item} />
    ));

    return (
        <section className="home__products products">
            <div className="products__container">
                <Heading
                    className="products__heading"
                    label="Products"
                    title="Our line of products"
                    text="Here’s what we’re building to help businesses deliver amazing customer experiences."
                />
                <div className="products__body">{productItems.length && productItems}</div>
            </div>
        </section>
    );
};
export default ProductsHome;
