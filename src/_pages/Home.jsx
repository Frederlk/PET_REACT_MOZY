import React from "react";
import { images, data } from "../constants";

import { Brands, Heading, MainScreen, ProductCard } from "../_components";

const Home = ({ className }) => {
    const productItems = data.productItems.map((item, i) => (
        <ProductCard className="products__item" key={item.titleAlt + i} data={item} />
    ));

    return (
        <main className={`page ${className || ""}`}>
            <MainScreen
                className="home__main-screen fullscreen"
                title="We build products to simplify work for businesses"
                text="Our next-gen products empower businesses to implement agility and accelerate growth."
                imgSrc={images.mainScreenImages.mainHome}
                imgAlt="Home">
                <div className="main-screen__buttons">
                    <a href="#" className="main-screen__button button">
                        Learn more
                    </a>
                    <a href="#" className="main-screen__button button button_outline">
                        Work with us
                    </a>
                </div>
            </MainScreen>
            <Brands className="home__brands" />
            <section className="home__products products">
                <div className="products__container">
                    <Heading
                        className="products__heading"
                        title="Our line of products"
                        text="Here’s what we’re building to help businesses deliver amazing customer experiences."
                    />
                    <div className="products__body">{productItems.length && productItems}</div>
                </div>
            </section>
        </main>
    );
};

export default Home;
