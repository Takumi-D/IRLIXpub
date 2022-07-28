import React from "react";
import "./card.css";
import Discount from "../discount";

function Card({ data }) {
    return (
        <div className="card">
            <img className="card__image" src={`${data.drinkImage}`} alt="Коктейль"/>
            <div className="card__wrapper-discount">
                <div className="discount">
                    <Discount/>
                </div>
            </div>
            <div className="card__description-block">
                <h4 className="card__title">{data.name}</h4>
                <p className="card__paragraph">{data.type}</p>
            </div>
        </div>
    )
}

export default Card;