import React from "react";
import Card from "../card/card";

const RenderCart = ({arrayCarts}) => {
    return arrayCarts.map((dataCart) => {
        return (
            <React.Fragment key={dataCart.id}>
                <Card data={dataCart}/>
            </React.Fragment>
        )
    })
}

export default RenderCart;