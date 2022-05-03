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
                                <a href="" className="menu__link">
                                    Products
                                </a>
                            </li>
                            <li className="menu__item">
                                <a href="" className="menu__link">
                                    About us
                                </a>
                            </li>
                            <li className="menu__item">
                                <a href="" className="menu__link">
                                    Career
                                </a>
                            </li>
                            <li className="menu__item">
                                <a href="" className="menu__link">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <a data-da=".menu__body, 479.98, 1" href="#" className="header__hiring button">
                    We’re hiring
                </a>
                <button type="button" className="header__icon icon-menu">
                    <span></span>
                </button>
            </div>
        </header>
    );
};

export default Header;
