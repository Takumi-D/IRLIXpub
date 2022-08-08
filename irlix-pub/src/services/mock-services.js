import { Component } from "react";

export default class mockServices extends Component{
    __url = "https://62e05a0bfa8ed271c4826b89.mockapi.io/";

     getCocktails = async () => {
         try {
             const novelites = await fetch(this.__url + "/cocktails");

             if(!novelites.ok){
                 throw new Error("Что-то пошло не так! " + novelites.status);
             }

             return await novelites.json();
         } catch (error){
             throw new Error("Что-то пошло не так! " + error);
         }
    }

}