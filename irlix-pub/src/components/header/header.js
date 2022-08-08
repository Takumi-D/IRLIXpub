import React from "react";
import "./header.css";
import logo from "../../images/header/logo.svg";

function Header() {
    const date = new Date();

    let options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };

    return (
        <header className="header">
            <div className="header__title-and-date">
                <h4 className="header__title">Главная</h4>
                <p className="header__date">{date.toLocaleString("ru", options)}</p>
            </div>
            <img src={logo} alt="логотип" className="header__img"/>
        </header>
    )
}

export default Header;