import React from "react";

const MainScreen = ({ className }) => {
    return (
        <section className={`${className || ""} main-screen`}>
            <div className="main-screen__container"></div>
        </section>
    );
};

export default MainScreen;
