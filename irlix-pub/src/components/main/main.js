import React from "react";
import "./main.css";
import {Outlet} from "react-router-dom";
import Header from "../header";
import NavigationMenu from "../navigation-menu";
import Footer from "../footer";

function Main(){
    return (
        <React.Fragment>
            <div className="fixed-menu">
                <Header/>
                <NavigationMenu/>
            </div>

            <div className="main">
                <div className="main__cardList">
                    <Outlet/>
                </div>
            </div>

            <Footer/>
        </React.Fragment>
    )
}

export default Main;