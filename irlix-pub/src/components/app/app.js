import React from "react";
import "./app.css";
import "../../index.css";
import Main from "../main";
import { Route, Routes } from "react-router-dom";
import { RenderList } from "../pages";
import ProductDescription from "../product-description";

function App() {

    return (
            <div className="app">
                <Routes>
                    <Route path="/" element={ <Main/>}>
                        <Route index element={ <RenderList/> }/>
                        <Route path="IRLIXpub/" element={ <RenderList/> }>
                            <Route path=":id" element={ <ProductDescription/> }/>
                        </Route>
                    </Route>
                </Routes>
            </div>
    )
}

export default App;