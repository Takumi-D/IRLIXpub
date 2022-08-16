import React, { useState} from "react";
import { connect } from "react-redux";
import RenderCart from "../render-cart";
import InstallationDataList from "../helpers/installation-data-list"
import { Outlet, useParams } from "react-router-dom";
import withMookService from "../hoc";
import Spinner from "../spinner";


function RenderList({ data, loading, error, searchOptions, category, mockServices, loadingCocktails, throwError }){

    useState(() => {
        if(data === null){
            mockServices.getCocktails()
                .then((data) => {
                    loadingCocktails(data);
                })
                .catch(() => {
                    throwError()
                })
        }
    }, [])

    const params = useParams();
    const sortingBy = category === "All" ? "All" :
        (category === "Alcoholic" || category === "Non alcoholic" ? "strAlcoholic" : "strCategory");

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

    if(params.id !== undefined){
        return (
            <Outlet/>
        )
    }

    return(
        <React.Fragment>
            <RenderCart arrayCarts={InstallationDataList(sortingBy, category, data, searchOptions)}/>
        </React.Fragment>
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

