import React, { useContext } from "react";
import { mockContext } from "../context";
import RenderCart from "../render-cart";
import InstallationDataList from "../hoc-helpers/installation-data-list"
import {Outlet, useParams} from "react-router-dom";

function RenderList({category, sortingBy}){
    const { request: data, text } = useContext(mockContext);
    const params = useParams();

   const finalArray = InstallationDataList(sortingBy,category, data, text);

    if(finalArray === null){
        return <div>Загрузка...</div>
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

