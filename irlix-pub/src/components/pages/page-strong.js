import React, {useCallback, useContext, useEffect, useState} from "react";
import { mockContext } from "../context";
import RenderCart from "../render-cart";

function PageHits(){
    const { mockServices: { getStrongs }, text } = useContext(mockContext);
    const [stateHits, setHits] = useState(null);
    const request = useCallback(() => getStrongs(), [ getStrongs ]);

    useEffect(() => {
        if(stateHits === null){
            request()
                .then((response) => {
                    setHits(response)
                })
        }

    }, [ request, text, stateHits ]);


    const filter = (data) => {
        return data.filter((el) => {
            return el.name.toLowerCase().indexOf(text.toLowerCase()) > -1
        })
    }

    const newArr = text !== "" ? filter(stateHits) : stateHits;

    if(newArr === null){
        return <div>Загрузка...</div>
    }

    return(
        <React.Fragment>
            <RenderCart arrayCarts={newArr}/>
        </React.Fragment>
    )
}

export default PageHits;

