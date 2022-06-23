import React, {Component} from "react";
import "./navigation-menu.css";

export default class NavigationMenu extends Component{
    state = {
        itemList: [
            {keyTab: "Новинки", itemName: "Новинки"},
            {keyTab: "Сладкое", itemName: "Сладкое"},
            {keyTab: "Хит", itemName: "Хит"},
            {keyTab: "Крепкое", itemName: "Крепкое"},
        ],
        key: "Сладкое"
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
                <li onClick={() => this.settingActiveClass(item)} className={`navigation-menu__item ${activeClass}`} key={item.itemName}>{item.itemName}</li>
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