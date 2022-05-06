import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { images } from "../constants";

import { MainScreen } from "../_components";
import { Join, LifeMozy, OfferCareer, WriteToUs } from "../_containers";

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
                    <a href="#" className="main-screen__button button button_outline">
                        View open roles
                    </a>
                </>
            </MainScreen>
            <OfferCareer className="career-page__offer" />
            <LifeMozy className="career-page__life" />
            <Join className="career-page__join" />
            <WriteToUs className="career-page__write" />
        </>
    );
};

export default Career;
