import { lazy, Suspense, useEffect } from "react";
import * as flsFunctions from "./js/files/functions";
import dynamicAdaptive from "./js/libs/dynamic_adapt";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";

import { Header, Footer } from "./_containers";
import { Spinner } from "./_components";

const Page404 = lazy(() => import("./_pages/Page404")),
    Home = lazy(() => import("./_pages/Home"));

const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
        flsFunctions.menuClose();
    }, [pathname]);
    return null;
};

const App = () => {
    useEffect(() => {
        flsFunctions.menuInit();
        dynamicAdaptive();
    }, []);

    return (
        <Router>
            <ScrollToTop />
            <Header />
            <Suspense fallback={<Spinner />}>
                <Routes>
                    <Route path="/" element={<Home className="page_home" />} />
                    <Route path="*" element={<Page404 />} />
                </Routes>
            </Suspense>
            <Footer />
        </Router>
    );
};

export default App;
