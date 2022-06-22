import React from "react";
import "./header.css";
import logo from "../../images/header/logo.svg";

function Header() {
    return (
        <header className="header">
            <div className="header__title-and-date">
                <h4 className="header__title">Главная</h4>
                <p className="header__date">17 июля 2021</p>
            </div>
            <img src={logo} alt="логотип" className="header__img"/>
        </header>
    )
}

export default Header;