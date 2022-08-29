import React, {useEffect} from "react";
import "./product-description.css";
import Vector from "../../images/product-description/Vector.svg";
import { connect } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import filterIngredients from "../helpers/filterIngredients"
import withMookService from "../hoc";
import Spinner from "../spinner";

function ProductDescription({ data, loading, error, searchOptions, mockServices, loadingCocktails, throwError }) {
    const params = useParams();
    const navigate = useNavigate();


    useEffect(() => {
        if(data === null){
            mockServices.getCocktails()
                .then((data) => {
                    loadingCocktails(data);
                })
                .catch(() => {
                    throwError()
                })
        }
    }, [ data, loadingCocktails, throwError, mockServices ]);

    const filterCard = (data) => {
        return data.filter((el) => {
            return el.idDrink === params.id;
        })
    }

    if(loading){
        return (
            <div className="main">
                <div className="main__cardList">
                    <Spinner/>
                </div>
            </div>
        )
    }

    if(error){
        return (
            <div className="main">
                <div className="main__cardList">
                    <h1>Ошибка</h1>
                </div>
            </div>
        )
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

    const clearSearchAndGoBackToList = () => {
        searchOptions("");
        navigate(-1);
    }



    return (
        <div className="main__card">
            <header className="header-descriptions">
                <img src={finalObject.strDrinkThumb} alt="Картинка продукта" className="header-descriptions__image"/>
                <div className="exit-from-description" onClick={() => clearSearchAndGoBackToList()}>
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

        </div>
    )
}

const mapStateToProps = ({ data, loading, error}) => {
    return {
        data,
        loading,
        error,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchOptions: (textSearch) => {
            dispatch({
                type: "SEARCH_OPTIONS",
                textSearch: textSearch
            })
        },
        loadingCocktails: (newCoctails) => {
            dispatch({
                type: "LOADING_COCKTAILS",
                payload: newCoctails
            })
        },
        throwError: () => {
            dispatch({
                type: "THROW_ERROR"
            })
        }
    }

}

export default withMookService()(connect(mapStateToProps,mapDispatchToProps)(ProductDescription));