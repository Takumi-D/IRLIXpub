import React, {useCallback, useEffect, useMemo, useState} from "react";
import "./app.css";
import "../../index.css";
import Main from "../main";
import MockServices from "../../services/mock-services";
import { mockContext } from "../context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RenderList } from "../pages";
import ProductDescription from "../product-description";

function App() {
    const initialState = useMemo(() => ({
        data: null,
        loading: true,
        error: false
    }), [])

    const [data, setData] = useState(initialState);
    const [searchOptions, setSearchOptions] = useState("");
    const [category, setCategory] = useState("All");
    const mockServices = new MockServices();

    useEffect(() => {
        mockServices.getCocktails()
                .then((request) => {
                    setData({
                        data: request,
                        loading: false,
                        error: false
                    })
                }).catch((error) => {
            setData({
                data: error,
                loading: false,
                error: true
            })
        })
    }, [])


    const textSearch = (searchOptions) => {
        setSearchOptions(() => {
            return searchOptions
        })
    }

    return (
        <mockContext.Provider value={{
            data,
            ...{ searchOptions, setSearchOptions },
            ...{ category, setCategory },
        }}>
            <BrowserRouter>
                <div className="app">
                    <Routes>
                        <Route path="/" element={ <Main textSearch={ textSearch } />}>
                            <Route index element={ <RenderList/> }/>
                            <Route path="IRLIXpub/" element={<RenderList/>}>
                                <Route path=":id" element={ <ProductDescription/> }/>
                            </Route>
                        </Route>
                    </Routes>
                </div>
            </BrowserRouter>
        </mockContext.Provider>
    )
}

export default App;