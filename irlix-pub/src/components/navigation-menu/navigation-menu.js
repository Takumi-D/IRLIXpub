import React, {useMemo, useState} from "react";
import "./navigation-menu.css";
import { Link, useLocation } from "react-router-dom";

function NavigationMenu() {

    const location = useLocation();

    const initialState = useMemo(() => ([
        {keyTab: "all", itemName: "Все"},
        {keyTab: "alcoholic", itemName: "Алкогольные"},
        {keyTab: "NonAlcoholic", itemName: "Безалкогольные"},
        {keyTab: "OrdinaryDrink", itemName: "Обычно берут"},
        {keyTab: "Cocktail", itemName: "Коктейли"},
        {keyTab: "Shot", itemName: "Шоты"},
        {keyTab: "Punch/PartyDrink", itemName: "Пунш/напиток для вечеринки"},
        {keyTab: "HomemadeLiqueur", itemName: "Домашний ликёр"},
        {keyTab: "Cocoa", itemName: "Какао"},
        {keyTab: "Shake", itemName: "Шейкеры"},
        {keyTab: "Unknown", itemName: "Другое"},
    ]), [])

    const [itemList, setItemList] = useState({
        itemList: initialState,
        key: location.pathname === "/" ? "all" : location.pathname.split("/")[1]
    })


    const settingActiveClass = (item) => {
        setItemList({
            itemList: initialState,
            key: item
        })
    }

    const renderItemList = (arrItem) => {
        return arrItem.map((item) => {
            const activeClass = item.keyTab === itemList.key ? "navigation-menu_selected" : "";
            return (
                <Link onClick={() => settingActiveClass(item.keyTab)} className={`navigation-menu__item ${activeClass}`}
                      key={item.itemName} to={`${item.keyTab}`}>{item.itemName}</Link>
            )
        })
    }

    const itemListf = renderItemList(itemList.itemList);

    return (
        <ul className="navigation-menu">
            {itemListf}
        </ul>
    )

}

export default NavigationMenu;