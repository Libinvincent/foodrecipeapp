import axios from "axios";
const foodDataFeching = async () => {
    try {
        let respons = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=c')
        return respons.data
    } catch (error) {
        console.log(error)
        
    }
}


const foodDataFilter = async (name) => {
  try {
    // console.log("my", name);
    let response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`);
    // console.log(response.data);
    
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};


const AllFooditems=async()=>{
    try{
        let respons=await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
        return respons.data
    }catch(error){
        console(error)
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
        return respons 
        
    } catch (error) {
        console.log(error)
    }
}


export   { foodDataFeching,foodDataFilter,foodDataSerch ,foodDataDetealdView,AllFooditems} 