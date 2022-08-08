function filterIngredients(data) {
    let obj = {};
    let arr = []
    for(let i in data){
        if((i.indexOf("strIngredient") >= 0 && data[i] !== null) || (i.indexOf("strMeasure") >= 0 && data[i] !== null)){
            if(i.indexOf("strIngredient") >= 0){
                obj[i] = data[i]
            }
            if(i.indexOf("strMeasure") >= 0){
                obj[i] = data[i]
            }
        }
    }

    for(let i = 0; i < Object.keys(obj).length; i++){
        if(obj["strIngredient" + [i + 1]] !== undefined){
            arr.push({strIngredient: obj["strIngredient" + [i + 1]], strMeasure: obj["strMeasure" + [i + 1]], id: i})
        }
    }
    return arr
}

export default filterIngredients;