import React from "react";
import Card from "../card/card";
import BlankCard from "../blank-card";

const RenderCart = ({arrayCarts}) => {

    if(arrayCarts.length === 0){
        return <BlankCard/>
    }

    return arrayCarts.map((dataCart) => {
        return (
            <React.Fragment key={dataCart.idDrink}>
                <Card data={dataCart}/>
            </React.Fragment>
        )
    })
}

export default RenderCart;