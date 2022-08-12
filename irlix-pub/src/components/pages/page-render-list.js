import React, {useState} from "react";
import { connect } from "react-redux";
import RenderCart from "../render-cart";
import InstallationDataList from "../helpers/installation-data-list"
import { Outlet, useParams } from "react-router-dom";
import withMookService from "../hoc";

function RenderList({ data, loading, error, searchOptions, category, mockServices, loadingСocktails }){

    useState(() => {
        mockServices.getCocktails()
            .then((data) => {
                loadingСocktails(data);
            })
    }, [])

    const params = useParams();

    const sortingBy = category === "All" ? "All" :
        (category === "Alcoholic" || category === "Non alcoholic" ? "strAlcoholic" : "strCategory");


   const finalArray = InstallationDataList(sortingBy, category, data, searchOptions);

    if(loading){
        return <div>Загрузка...</div>
    }

    if(error){
        return (
            <div>Ошибка</div>
        )
    }


    if(params.id !== undefined){
        return (
            <Outlet/>
        )
    }


    return(
        <React.Fragment>
            <RenderCart arrayCarts={finalArray}/>
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
         loadingСocktails: (newCoctails) => {
             dispatch({
                 type: "LOADING_COCKTAILS",
                 payload: newCoctails
             })
         }
     }

}

export default withMookService()(connect(mapStateToProps, mapDispatchToProps)(RenderList));

