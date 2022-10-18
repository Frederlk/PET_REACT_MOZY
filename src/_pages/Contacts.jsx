import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { data, images } from "../constants";

import { MainScreen } from "../_components";
import { Form } from "../_containers";

const Contacts = () => {
    const addressItems = data.adressItems.map(({ img, imgAlt, title, address }, i) => (
        <div key={title + i} className="places-contacts__item">
            <div className="places-contacts__top">
                <div className="places-contacts__icon">
                    <img src={img} alt={imgAlt} />
                </div>
                <h6 className="places-contacts__title">{title}</h6>
            </div>
            <div className="places-contacts__address">{address}</div>
        </div>
    ));

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
            <section className="contacts-page__info info-contacts">
                <div className="info-contacts__container">
                    <Form />
                    <div className="info-contacts__places places-contacts">{addressItems.length && addressItems}</div>
                </div>
            </section>
        </>
    );
};

export default Contacts;
