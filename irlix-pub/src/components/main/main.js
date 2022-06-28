import React from "react";
import "./main.css";
import Card from "../card/card";

function Main(){
    return (
        <div className="main">
            <div className="main__wrapper-card">
                <Card/>
            </div>
            <div className="main__wrapper-card">
                <Card/>
            </div>
            <div className="main__wrapper-card">
                <Card/>
            </div>
            <div className="main__wrapper-card">
                <Card/>
            </div>
            <div className="main__wrapper-card">
                <Card/>
            </div>
        </div>
    )
}

export default Main;