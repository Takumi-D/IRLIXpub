import React, { useContext } from "react";
import "./navigation-menu.css";
import { mockContext } from "../context";

function NavigationMenu() {
    const context = useContext(mockContext);

    const initialState = [
        {keyTab: "All", itemName: "Все"},
        {keyTab: "Alcoholic", itemName: "Алкогольные"},
        {keyTab: "Non alcoholic", itemName: "Безалкогольные"},
        {keyTab: "Ordinary Drink", itemName: "Обычно берут"},
        {keyTab: "Cocktail", itemName: "Коктейли"},
        {keyTab: "Shot", itemName: "Шоты"},
        {keyTab: "Punch / Party Drink", itemName: "Пунш/напиток для вечеринки"},
        {keyTab: "Homemade Liqueur", itemName: "Домашний ликёр"},
        {keyTab: "Cocoa", itemName: "Какао"},
        {keyTab: "Shake", itemName: "Шейкеры"},
        {keyTab: "Other/Unknown", itemName: "Другое"},
    ];


    const settingActiveClass = (item) => {
        context.setCategory(item)
    }

    const renderItemList = (arrItem) => {
        return arrItem.map((item) => {
            const activeClass = item.keyTab === context.category ? "navigation-menu_selected" : "";
            return (
                <button onClick={() => settingActiveClass(item.keyTab)} className={`navigation-menu__item ${activeClass}`}
                      key={item.itemName} to={`${item.keyTab}`}>{item.itemName}</button>
            )
        })
    }

    const itemListf = renderItemList(initialState);

    return (
        <ul className="navigation-menu">
            {itemListf}
        </ul>
    )

}

export default NavigationMenu;