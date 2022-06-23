import React from "react";
import "./product-description.css";
import Rectangle from "../../images/product-description/Rectangle.jpg";
import Vector from "../../images/product-description/Vector.svg";

function ProductDescription() {
    return (
        <React.Fragment>
            <header className="header-descriptions">
                <img src={Rectangle} alt="Картинка продукта" className="header-descriptions__image"/>
                <div className="exit-from-description">
                    <img src={Vector} alt="Стрелка назад" className="exit-from-description__image"/>
                </div>
            </header>

            <main className="main-descriptions">
                <div className="container">
                    <div className="main-descriptions__wrapper-content">
                        <h4 className="main-descriptions__title">Blackberry</h4>
                        <p className="main-descriptions__paragraph">Освежающий напиток</p>
                    </div>

                    <div className="main-descriptions__wrapper-content">
                        <h6 className="main-descriptions__title-content">Ингредиенты</h6>
                        <div className="main-descriptions__block-content">
                            <p className="main-descriptions__text">Джин</p>
                            <div className="main-descriptions__points"></div>
                            <p className="main-descriptions__text">40&nbsp;мл</p>
                        </div>
                        <div className="main-descriptions__block-content">
                            <p className="main-descriptions__text">Шнапс&nbsp;яблоко</p>
                            <div className="main-descriptions__points"></div>
                            <p className="main-descriptions__text">10&nbsp;мл</p>
                        </div>
                        <div className="main-descriptions__block-content">
                            <p className="main-descriptions__text">Ликёр&nbsp;кассис</p>
                            <div className="main-descriptions__points"></div>
                            <p className="main-descriptions__text">25&nbsp;мл</p>
                        </div>
                        <div className="main-descriptions__block-content">
                            <p className="main-descriptions__text">Сок&nbsp;лимона</p>
                            <div className="main-descriptions__points"></div>
                            <p className="main-descriptions__text">25&nbsp;мл</p>
                        </div>
                        <div className="main-descriptions__block-content">
                            <p className="main-descriptions__text">Жасмин&nbsp;лемонграсс</p>
                            <div className="main-descriptions__points"></div>
                            <p className="main-descriptions__text">15&nbsp;мл</p>
                        </div>
                        <div className="main-descriptions__block-content">
                            <p className="main-descriptions__text">Ежевика&nbsp;свежая</p>
                            <div className="main-descriptions__points"></div>
                            <p className="main-descriptions__text">2&nbsp;шт</p>
                        </div>
                        <div className="main-descriptions__block-content">
                            <p className="main-descriptions__text">Белок</p>
                            <div className="main-descriptions__points"></div>
                            <p className="main-descriptions__text">20&nbsp;мл</p>
                        </div>
                    </div>

                    <div className="main-descriptions__wrapper-content">
                        <h6 className="main-descriptions__title-content">Как готовить</h6>
                        <p className="main-descriptions__text">
                            Ежевику (одну штуку) размять в шейкере, засыпать лёд на 2/3 шейкера.<br/>
                            Добавить джин, шнапс, ликёр, сок, жасмин лемонграсс и белок.
                            Тщательно взбить и процедить в бокал.<br/>
                            Украсить ежевикой.<br/>
                            Ежевику (одну штуку) размять в шейкере, засыпать лёд на 2/3 шейкера.<br/>
                            Добавить джин, шнапс, ликёр, сок, жасмин лемонграсс и белок.
                            Тщательно взбить и процедить в бокал.<br/>
                            Украсить ежевикой.<br/>
                            Ежевику (одну штуку) размять в шейкере, засыпать лёд на 2/3 шейкера.<br/>
                            Добавить джин, шнапс
                        </p>
                    </div>

                </div>
            </main>

        </React.Fragment>
    )
}

export default ProductDescription;