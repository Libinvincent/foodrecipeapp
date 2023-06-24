import axios from "axios";
const foodDataFeching = async () => {
    try {
        let respons = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
        return respons.data
    } catch (error) {
        console.log(error)
    }
}


const foodDataFilter = async () => {
    try {
        let respons = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        return respons.data
    } catch (error) {
        console.log(error)
    }
}


const foodDataSerch = async ({search}) => {
    try {
        let respons = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${search}`)
        return respons.data
    } catch (error) {
        console.log(error)
    }
}


const foodDataDetealdView = async ({idMeal}) => {
    try {
        let respons = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
        return respons.data
        
    } catch (error) {
        console.log(error)
    }
}


export   { foodDataFeching,foodDataFilter,foodDataSerch ,foodDataDetealdView} 