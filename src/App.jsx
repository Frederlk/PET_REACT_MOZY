import { lazy, Suspense, useEffect } from "react";
import * as flsFunctions from "./js/functions";
import dynamicAdaptive from "./js/dynamic_adapt";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";

import { Header, Footer } from "./_containers";
import { Spinner } from "./_components";

const Page404 = lazy(() => import("./_pages/Page404")),
    Home = lazy(() => import("./_pages/Home")),
    About = lazy(() => import("./_pages/About")),
    Career = lazy(() => import("./_pages/Career")),
    Contacts = lazy(() => import("./_pages/Contacts")),
    Products = lazy(() => import("./_pages/Products"));

const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
        flsFunctions.menuClose();
        flsFunctions.addTouchClass();
        flsFunctions.fullVHfix();
        flsFunctions.menuInit();
        dynamicAdaptive();
    }, [pathname]);
    return null;
};

const App = () => {
    return (
        <Router>
            <ScrollToTop />
            <Header />
            <main className="page">
                <Suspense fallback={<Spinner />}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/career" element={<Career />} />
                        <Route path="/contact" element={<Contacts />} />
                        <Route path="*" element={<Page404 />} />
                    </Routes>
                </Suspense>
            </main>
            <Footer />
        </Router>
    );
};

export default App;
