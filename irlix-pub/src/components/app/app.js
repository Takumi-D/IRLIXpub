import React, {useEffect, useState} from "react";
import "./app.css";
import "../../index.css";
import Main from "../main";
import MockServices from "../../services/mock-services";
import { mockContext } from "../context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { All, RenderList } from "../pages";
import ProductDescription from "../product-description"

function App() {
    const [data, setData] = useState(null);
    const [text, setText] = useState("");
    const mockServices = new MockServices();

    useEffect(() => {
        mockServices.getCocktails()
                .then((request) => {
                    setData({
                        request
                    })
                })
    }, [])


    const textSearch = (text) => {
        setText(() => {
            return text
        })
    }

    return (
        <mockContext.Provider value={{
            ...data,
            text: text
        }}>
            <BrowserRouter>
                <div className="app">
                    <Routes>
                        <Route path="/" element={ <Main textSearch={textSearch} />}>
                            <Route path="/IRLIXpub" element={ <All /> }/>
                            <Route path="/all" element={ <All /> }/>
                            <Route path="/alcoholic" element={ <RenderList category="Alcoholic" sortingBy="strAlcoholic" /> }>
                                <Route path="/alcoholic/:id" element={ <ProductDescription /> }/>
                            </Route>
                            <Route path="/NonAlcoholic" element={ <RenderList category="Non alcoholic" sortingBy="strAlcoholic" /> }/>
                            <Route path="/OrdinaryDrink" element={ <RenderList category="Ordinary Drink" sortingBy="strCategory" /> }/>
                            <Route path="/Cocktail" element={ <RenderList category="Cocktail" sortingBy="strCategory" /> }/>
                            <Route path="/Shot" element={ <RenderList category="Shot" sortingBy="strCategory" /> }/>
                            <Route path="/Punch/PartyDrink" element={ <RenderList category="Punch / Party Drink" sortingBy="strCategory" /> }/>
                            <Route path="/HomemadeLiqueur" element={ <RenderList category="Homemade Liqueur" sortingBy="strCategory" /> }/>
                            <Route path="/Cocoa" element={ <RenderList category="Cocoa" sortingBy="strCategory" /> }/>
                            <Route path="/Shake" element={ <RenderList category="Shake" sortingBy="strCategory" /> }/>
                            <Route path="/Unknown" element={ <RenderList category="Other/Unknown" sortingBy="strCategory" /> }/>
                        </Route>
                    </Routes>
                </div>
            </BrowserRouter>
        </mockContext.Provider>
    )
}

export default App;