import React from "react";
import "./main.css";
import { All } from "../pages"
import {Outlet, useLocation, useParams} from "react-router-dom";
import Header from "../header";
import NavigationMenu from "../navigation-menu";
import Footer from "../footer";

function Main({textSearch}){
    const location = useLocation();
    const params = useParams();

    if(location.pathname === "/"){
        return (
        <React.Fragment>
            <div className="fixed-menu">
                <Header/>
                <NavigationMenu/>
            </div>
            <div className="main">
                <div className="main__cardList">
                    <All/>
                </div>
            </div>

            <Footer textSearch={textSearch}/>
        </React.Fragment>
        )
    }


    if(params.hasOwnProperty("id")){
        return (
            <div className="main__card">
                <Outlet/>
            </div>
        )
    }

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

            <Footer textSearch={textSearch}/>
        </React.Fragment>
    )
}

export default Main;