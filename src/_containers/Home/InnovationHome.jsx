import React from "react";
import { Heading } from "../../_components";

import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { data } from "../../constants";

const InnovationHome = () => {
    const slides = data.innpvationItems.map(({ img, alt }, i) => (
        <SwiperSlide className="innovation-home__slide" key={alt + i}>
            <img src={img} alt={alt} />
        </SwiperSlide>
    ));
    return (
        <section className="home-page__innovation innovation-home">
            <div className="innovation-home__container">
                <Heading
                    className="innovation-home__heading"
                    label="IN THE NEWS"
                    title="Making waves with innovation"
                    text="We are in the news for being market leaders who deliver exceptional products."
                />
                <div className="innovation-home__slider">
                    <Swiper
                        className="innovation-home__swiper"
                        modules={[Navigation]}
                        speed={1000}
                        observer={true}
                        observeParents={true}
                        slidesPerView={4}
                        spaceBetween={30}
                        grabCursor
                        navigation={{
                            prevEl: ".innovation-home__nav-item_prev",
                            nextEl: ".innovation-home__nav-item_next",
                        }}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 15,
                            },
                            479.98: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            767.98: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            1110: {
                                slidesPerView: 4,
                                spaceBetween: 30,
                            },
                        }}>
                        {slides}
                    </Swiper>
                    <div className="innovation-home__navigation">
                        <button type="button" className="innovation-home__nav-item innovation-home__nav-item_prev">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="#C2D1D9" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M8.70531 15.2947C8.31578 15.6842 7.68422 15.6842 7.29468 15.2947C6.9054 14.9054 6.90511 14.2743 7.29405 13.8847L12.17 9L0.999998 9C0.447714 9 -6.511e-07 8.55228 -6.99382e-07 8C-7.47665e-07 7.44771 0.447714 7 0.999999 7L12.17 7L7.29405 2.11531C6.90511 1.72568 6.90539 1.0946 7.29468 0.705315C7.68422 0.31578 8.31578 0.31578 8.70531 0.705315L16 8L8.70531 15.2947Z"
                                />
                            </svg>
                        </button>
                        <button type="button" className="innovation-home__nav-item innovation-home__nav-item_next">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="#C2D1D9" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M8.70531 15.2947C8.31578 15.6842 7.68422 15.6842 7.29468 15.2947C6.9054 14.9054 6.90511 14.2743 7.29405 13.8847L12.17 9L0.999998 9C0.447714 9 -6.511e-07 8.55228 -6.99382e-07 8C-7.47665e-07 7.44771 0.447714 7 0.999999 7L12.17 7L7.29405 2.11531C6.90511 1.72568 6.90539 1.0946 7.29468 0.705315C7.68422 0.31578 8.31578 0.31578 8.70531 0.705315L16 8L8.70531 15.2947Z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InnovationHome;
