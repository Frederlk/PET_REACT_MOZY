import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import { images } from "../constants";

import { MainScreen } from "../_components";
import { ProductsBlock, WantToBuild } from "../_containers";

const Products = () => {
    return (
        <>
            <Helmet>
                <meta name="Products Page" content="Products Page" />
                <title>Products</title>
            </Helmet>

            <MainScreen
                className="products-page__main-screen"
                title="Tools that transform 
                    how businesses work"
                text="We help manage businesses better with our applications, plugins, 
                        extensions and offer productive experiences for teams and customers alike."
                imgSrc={images.mainScreenImages.mainProducts}
                imgAlt="Products"></MainScreen>
            <ProductsBlock />

            <WantToBuild />
        </>
    );
};

export default Products;
