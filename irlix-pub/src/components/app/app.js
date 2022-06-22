import React from "react";
import "./app.css";
import "../../index.css";
import Header from "../header";
import Footer from "../footer";
import Main from "../main";

function App() {
    return (
        <div className="app">
            <Header/>
            <Main/>
            <Footer/>
        </div>
    )
}

export default App;