import React from "react";
import "./app.css";
import "../../index.css";
import Header from "../header";
import Footer from "../footer";
import Main from "../main";
import NavigationMenu from "../navigation-menu";
// import ProductDescription from "../product-description";

function App() {
    return (
        <div className="app">
                <div className="fixed-menu">
                    <Header/>
                    <NavigationMenu/>
                </div>
            <Main/>
            <Footer/>
            {/*<ProductDescription/>*/}
        </div>
    )
}

export default App;