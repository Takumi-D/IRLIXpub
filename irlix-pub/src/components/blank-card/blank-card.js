import React from "react";
import img from"./пустой стакан.png";

function BlankCard() {
    return(
        <div className="card" style={{cursor: "default"}}>
            <img className="card__image" src={img} alt="Коктейль"/>
            <div className="card__wrapper-title">
                <h4 className="card__title">Ничего не найдено</h4>
            </div>
            <div className="card__description-block">
                <h4 className="card__title">Пусто</h4>
                <p className="card__paragraph">Попробуйте изменить запрос</p>
            </div>
        </div>
    )
}

export default BlankCard;