const initialStore = {
    data: null,
    loading: true,
    error: false,
    searchOptions: "",
    category: "All"
}

const reducer = (store = initialStore, actions) => {
    switch (actions.type){
        case "LOADING_COCKTAILS":
            return {
                data: actions.payload,
                loading: false,
                error: false,
                searchOptions: store.searchOptions,
                category: store.category
            }
        case "SETTING_THE_CATEGORY":
            return {
                data: store.data,
                loading: false,
                error: false,
                searchOptions: store.searchOptions,
                category: actions.category
            }
        case "SEARCH_OPTIONS":
            return {
                data: store.data,
                loading: false,
                error: false,
                searchOptions: actions.textSearch,
                category: store.category
            }
        default:
            return store
    }
}

export default reducer;