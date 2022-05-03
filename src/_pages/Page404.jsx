import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Heading } from "../_components";

const Page404 = () => {
    return (
        <>
            <Helmet>
                <meta name="404" content="Error 404" />
                <title>Error 404</title>
            </Helmet>

            <section className="page404">
                <div className="page404__container">
                    <Heading className="page404__heading" title="Error 404" label="Are you lost?" />
                    <Link to="/" className="page404__button button button_outline">
                        To Homepage
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Page404;
