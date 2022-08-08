import React, { useContext } from "react";
import { mockContext } from "../context";
import RenderCart from "../render-cart";
import InstallationDataList from "../helpers/installation-data-list"
import { Outlet, useParams } from "react-router-dom";

function RenderList(){

    const context = useContext(mockContext);
    const { data, searchOptions} = useContext(mockContext);
    const params = useParams();

    const sortingBy = context.category === "All" ? "All" :
        (context.category === "Alcoholic" || context.category === "Non alcoholic" ? "strAlcoholic" : "strCategory");

   const finalArray = InstallationDataList(sortingBy, context.category, data.data, searchOptions);

    if(data.loading){
        return <div>Загрузка...</div>
    }

    if(data.error){
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

export default RenderList;

