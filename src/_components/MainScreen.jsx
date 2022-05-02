import React from "react";

const MainScreen = ({ className, title, text, children, imgSrc, imgAlt }) => {
    return (
        <section className={`${className || ""} main-screen`}>
            <div className="main-screen__container">
                <div className="main-screen__wrapper">
                    <div className="main-screen__content">
                        <h1 className="main-screen__title">{title}</h1>
                        <p className="main-screen__text">{text}</p>
                        {children && children}
                    </div>
                    <div className="main-screen__image">
                        <img src={imgSrc} alt={imgAlt} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainScreen;
