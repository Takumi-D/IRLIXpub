import React, { useContext } from "react";
import { mockContext } from "../context";
import RenderCart from "../render-cart";

function All(){
    const {request: data, text} = useContext(mockContext);

    const filter = (data) => {
        return data.filter((el) => {
            return el.name.toLowerCase().indexOf(text.toLowerCase()) > -1
        })
    }

    const newArr = text !== "" ? filter(data) : data;

    if(newArr === undefined){
        return <div>Загрузка...</div>
    }

    return(
        <React.Fragment>
            <RenderCart arrayCarts={newArr}/>
        </React.Fragment>
    )
}

export default All;

