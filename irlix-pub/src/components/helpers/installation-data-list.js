function InstallationDataList(sortingBy, category, data, text) {
    const searchFilter = (data) => {
        return data.filter((el) => {
            return el.strDrink.toLowerCase().indexOf(text.toLowerCase()) > -1
        })
    }

    const filterByCategory = (data) => {
        if(sortingBy === "All"){
            return data
        }

        return data.filter((el) => {
            return el[sortingBy] === category
        })
    }

    const categoryArray = data !== undefined ? filterByCategory(data): null
    return text !== "" ? searchFilter(categoryArray) : categoryArray;
}

export default InstallationDataList