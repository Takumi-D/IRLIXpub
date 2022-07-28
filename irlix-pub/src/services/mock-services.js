import React, { Component } from "react";

export default class mockServices extends Component{

    __url = "https://62e05a0bfa8ed271c4826b89.mockapi.io/";

     getNovelites = async () => {
         const novelites = await fetch(this.__url + "/novelties")
         return await novelites.json();
    }

    getNovelite = async (id) => {
        const novelites = await fetch(this.__url + "/novelties/" + id)
        return await novelites.json();
    }

    getSweets = async () => {
        const sweet = await fetch(this.__url + "/sweet")
        return await sweet.json();
    }

    getSweet = async (id) => {
        const sweet = await fetch(this.__url + "/sweet/" + id)
        return await sweet.json();
    }

    getHits = async () => {
        const hit = await fetch(this.__url + "/hit")
        return await hit.json();
    }

    getHit = async (id) => {
        const hit = await fetch(this.__url + "/hit/" + id)
        return await hit.json();
    }

    getStrongs = async () => {
        const strong = await fetch(this.__url + "/strong")
        return await strong.json();
    }

    getStrong = async (id) => {
        const strong = await fetch(this.__url + "/strong/" + id)
        return await strong.json();
    }
}