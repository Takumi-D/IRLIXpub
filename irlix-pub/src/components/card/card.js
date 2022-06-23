import React from "react";
import "./card.css";
import product from "../../images/card/Rectangle 7.jpg";
import Discount from "../discount";

function Card() {
    return (
        <div className="card">
            <img className="card__image" src={product} alt="Продукт"/>
            <div className="card__wrapper-discount">
                <div className="discount">
                    <Discount/>
                </div>
            </div>
            <div className="card__description-block">
                <h4 className="card__title">Blackberry</h4>
                <p className="card__paragraph">Освежающий напиток</p>
            </div>
        </div>
    )
}

export default Card;