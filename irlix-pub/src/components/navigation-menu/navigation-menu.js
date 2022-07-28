import React, {Component} from "react";
import "./navigation-menu.css";
import {Link} from "react-router-dom";

export default class NavigationMenu extends Component{
    state = {
        itemList: [
            {keyTab: "novelties", itemName: "Новинки"},
            {keyTab: "sweet", itemName: "Сладкое"},
            {keyTab: "hit", itemName: "Хит"},
            {keyTab: "strong", itemName: "Крепкое"},
        ],
        key: "sweet"
    }

    settingActiveClass = (item) => {
        this.setState({
            key: item.keyTab
        })
    }

    renderItemList = (arrItem) => {
        return arrItem.map((item) => {
            const activeClass = item.keyTab === this.state.key ? "navigation-menu_selected" : "";
            return (
                <Link onClick={() => this.settingActiveClass(item)} className={`navigation-menu__item ${activeClass}`} key={item.itemName} to={`${item.keyTab}`}>{item.itemName}</Link>
            )
        })
    }

    render(){

        const itemList = this.renderItemList(this.state.itemList);

        return (
            <ul className="navigation-menu">
                {itemList}
            </ul>
        )
    }
}