import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { images } from "../constants";

import { MainScreen } from "../_components";
import OfferCareer from "../_containers/Career/OfferCareer";

const Career = () => {
    return (
        <>
            <Helmet>
                <meta name="Career" content="Career Page" />
                <title>Career</title>
            </Helmet>

            <MainScreen
                className="career-page__main-screen"
                title="Hey, we're looking for"
                imgSrc={images.mainScreenImages.mainHiring}
                imgAlt="Career">
                <>
                    <div className="main-screen__selected">Dreamers</div>
                    <Link to="#" className="main-screen__button button button_outline">
                        View open roles
                    </Link>
                </>
            </MainScreen>
            <OfferCareer />
        </>
    );
};

export default Career;
