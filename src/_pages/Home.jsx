import React from "react";
import MainScreen from "../_components/MainScreen";

const Home = ({ className }) => {
    return (
        <main className={`page ${className || ""}`}>
            <MainScreen />
        </main>
    );
};

export default Home;
