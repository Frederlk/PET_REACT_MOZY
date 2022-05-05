import React from "react";
import { Link } from "react-router-dom";
import { images } from "./../constants";

const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <div className="header__logo-wrap">
                    <Link to="/" className="header__logo">
                        <img src={images.defaultImages.logo} alt="Mozy Logo" />
                    </Link>
                </div>
                <div className="header__menu menu">
                    <nav className="menu__body">
                        <ul className="menu__list">
                            <li className="menu__item">
                                <Link to="/products" className="menu__link">
                                    Products
                                </Link>
                            </li>
                            <li className="menu__item">
                                <Link to="/about" className="menu__link">
                                    About us
                                </Link>
                            </li>
                            <li className="menu__item">
                                <Link to="/contact" className="menu__link">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <Link to="/career" data-da=".menu__body, 479.98, 1" className="header__hiring button">
                    We’re hiring
                </Link>
                <button type="button" className="header__icon icon-menu">
                    <span></span>
                </button>
            </div>
        </header>
    );
};

export default Header;
