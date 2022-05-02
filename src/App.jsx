import { useEffect } from "react";
import * as flsFunctions from "./js/files/functions";
import dynamicAdaptive from "./js/libs/dynamic_adapt";

import { Header, Footer } from "./_containers";
import { Home } from "./_pages";

const App = () => {
    useEffect(() => {
        flsFunctions.menuInit();
        dynamicAdaptive();
    }, []);

    return (
        <>
            <Header />
            <Home className="page_home" />
            <Footer />
        </>
    );
};

export default App;
