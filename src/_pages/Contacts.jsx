import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { images } from "../constants";

import { MainScreen } from "../_components";

const Contacts = () => {
    return (
        <>
            <Helmet>
                <meta name="Contacts" content="Contacts Page" />
                <title>Contacts</title>
            </Helmet>

            <MainScreen
                className="contacts-page__main-screen"
                title="Connect with us"
                text="We’d love to hear from you. Fill out this form and we’ll get back to you. 
                    For job related queries, click on the button below."
                imgSrc={images.mainScreenImages.mainContacts}
                imgAlt="Career">
                <>
                    <Link to="/career" className="main-screen__button button button_outline">
                        Work with us
                    </Link>
                </>
            </MainScreen>
        </>
    );
};

export default Contacts;
