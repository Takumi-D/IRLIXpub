import React, { useState } from "react";
import "./app.css";
import "../../index.css";
import Header from "../header";
import Footer from "../footer";
import Main from "../main";
import NavigationMenu from "../navigation-menu";
import MockServices from "../../services/mock-services";
import { mockContext } from "../context";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {PageHits, PageNovelite, PageStrong, PageSweets} from "../pages";

function App() {
    const [services, setServices] = useState({
        mockServices: new MockServices()
    });
    const [text, setText] = useState("");

    const textSearch = (text) => {
        setText(() => {
            return text
        })
    }

    return (
        <mockContext.Provider value={{
            ...services,
            text: text
        }}>
            <BrowserRouter>
                <div className="app">
                    <div className="fixed-menu">
                        <Header/>
                        <NavigationMenu/>
                    </div>
                    <Routes>
                        <Route path="/" element={<Main/>}>
                            <Route path="/novelties" element={ <PageNovelite/> }/>
                            <Route path="/sweet" element={ <PageSweets/> }/>
                            <Route path="/hit" element={ <PageHits/> }/>
                            <Route path="/strong" element={ <PageStrong/> }/>
                        </Route>
                    </Routes>
                    <Footer textSearch={textSearch}/>
                </div>
            </BrowserRouter>
        </mockContext.Provider>
    )
}

export default App;