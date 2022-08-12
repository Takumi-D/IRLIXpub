import React from "react";
import "./navigation-menu.css";
import { connect } from "react-redux";

function NavigationMenu({ category, categorySetting }) {

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
        categorySetting(item)
    }

    const renderItemList = (arrItem) => {
        return arrItem.map((item) => {
            const activeClass = item.keyTab === category ? "navigation-menu_selected" : "";
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

const mapStateToProps = ({ category }) => {
    return {
        category
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        categorySetting: (category) => {
            dispatch({
                type: "SETTING_THE_CATEGORY",
                category: category
            })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NavigationMenu);