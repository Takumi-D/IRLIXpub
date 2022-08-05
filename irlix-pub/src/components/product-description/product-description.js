import React, {useContext} from "react";
import "./product-description.css";
import Vector from "../../images/product-description/Vector.svg";
import { mockContext } from "../context";
import { useParams, useNavigate } from "react-router-dom";

function ProductDescription() {
    const {request: data} = useContext(mockContext);
    const params = useParams();
    const navigate = useNavigate();

    const filterCard = (data) => {
        return data.filter((el) => {
            return el.idDrink === params.id;
        })
    }

    const filterIngredients = (data) => {
        let obj = {};
        let arr = []
        for(let i in data){
            if((i.indexOf("strIngredient") >= 0 && data[i] !== null) || (i.indexOf("strMeasure") >= 0 && data[i] !== null)){
                if(i.indexOf("strIngredient") >= 0){
                    obj[i] = data[i]
                }
                if(i.indexOf("strMeasure") >= 0){
                    obj[i] = data[i]
                }
            }
        }

       for(let i = 0; i < Object.keys(obj).length; i++){
           if(obj["strIngredient" + [i + 1]] !== undefined){
               arr.push({strIngredient: obj["strIngredient" + [i + 1]], strMeasure: obj["strMeasure" + [i + 1]], id: i})
           }
       }
        return arr
    }

    const daraCard = data !== undefined ? filterCard(data) : null;
    const finalObject = daraCard[0];
    const filnalFilter = finalObject !== null ? filterIngredients(finalObject) : null;

    const finalArrayIngredients = filnalFilter.map((el) => {
        return (
            <div key={el.id} className="main-descriptions__block-content">
                <p className="main-descriptions__ingredients">{el.strIngredient}</p>
                <div className={el.strMeasure === undefined ? null : "main-descriptions__points"}></div>
                <p className="main-descriptions__ingredients">{el.strMeasure === undefined ? null : el.strMeasure}</p>
            </div>
        )
    })

    if(daraCard === null){
        return (
            <div>
                <p>Загрузка...</p>
            </div>
        )
    }




    return (
        <React.Fragment>
            <header className="header-descriptions">
                <img src={finalObject.strDrinkThumb} alt="Картинка продукта" className="header-descriptions__image"/>
                <div className="exit-from-description" onClick={() => navigate(-1)}>
                    <img src={Vector} alt="Стрелка назад" className="exit-from-description__image"/>
                </div>
            </header>

            <main className="main-descriptions">
                <div className="container">
                    <div className="main-descriptions__wrapper-content">
                        <h4 className="main-descriptions__title">{finalObject.strDrink}</h4>
                        <p className="main-descriptions__paragraph">{finalObject.strCategory}</p>
                    </div>

                    <div className="main-descriptions__wrapper-content">
                        <h6 className="main-descriptions__title-content">Ингредиенты</h6>
                        {finalArrayIngredients}
                    </div>

                    <div className="main-descriptions__wrapper-content">
                        <h6 className="main-descriptions__title-content">Как готовить</h6>
                        <p className="main-descriptions__text">
                            {finalObject.strInstructions}
                        </p>
                    </div>

                </div>
            </main>

        </React.Fragment>
    )
}

export default ProductDescription;