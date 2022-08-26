import React, {useEffect} from "react";
import { connect } from "react-redux";
import RenderCart from "../render-cart";
import InstallationDataList from "../helpers/installation-data-list"
import withMookService from "../hoc";
import Spinner from "../spinner";


function RenderList({ data, loading, error, searchOptions, category, mockServices, loadingCocktails, throwError }){
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

    let SortingBy = "";

    if(category === "All"){
        SortingBy = "All";
    } else if(category === "Alcoholic" || category === "Non alcoholic"){
        SortingBy = "strAlcoholic";
    }
    else {
        SortingBy = "strCategory";
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

    return(
        <RenderCart arrayCarts={InstallationDataList(SortingBy, category, data, searchOptions)}/>
    )
}

const mapStateToProps = ({ data, loading, error, searchOptions, category }) => {
    return {
        data,
        loading,
        error,
        searchOptions,
        category
    }
}

const mapDispatchToProps = (dispatch) => {
     return {
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

export default withMookService()(connect(mapStateToProps, mapDispatchToProps)(RenderList));

