import React from "react";
import "./card.css";
import Discount from "../discount";
import {useNavigate} from "react-router-dom";

function Card({ data }) {

    const navigate = useNavigate();

    return (
        <div className="card" onClick={() => navigate(data.idDrink)}>
            <img className="card__image" src={`${data.strDrinkThumb}`} alt="Коктейль"/>
            <div className="card__wrapper-discount">
                <div className="discount">
                    <Discount/>
                </div>
            </div>
            <div className="card__description-block">
                <h4 className="card__title">{data.strDrink}</h4>
            </div>
        </div>
    )
}

export default Card;