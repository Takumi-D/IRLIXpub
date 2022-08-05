import React, { Component } from "react";

export default class mockServices extends Component{

    __url = "https://62e05a0bfa8ed271c4826b89.mockapi.io/";

     getCocktails = async () => {
         const novelites = await fetch(this.__url + "/cocktails");
         return await novelites.json();
    }

}