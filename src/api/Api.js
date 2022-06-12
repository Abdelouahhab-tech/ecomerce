import axios from 'axios'
const ApiKey = "https://fakestoreapi.com/products"

export const getAllCategories = async ()=>{
    const {data} = await axios.get(`${ApiKey}/categories`)
    return data
}

export const getProducts = async ()=>{
    const {data} = await axios.get(ApiKey)
    return data
}

export const filterProductsWithCategory = async (cat)=>{
    if(cat === "All"){
        const {data} = await axios.get(ApiKey)
        return data
    }else{
        const {data} = await axios.get(`${ApiKey}/category/${cat}`)
        return data
    }
}

export const fetchSingleProduct = async(id) =>{
    const {data} = await axios.get(`${ApiKey}/${id}`)
    if(data !== null)
    return data
    else
    return {message:"This Product Not Exist"}
}

export const fetchCountries = async()=>{
    const {data} = await axios.get("https://restcountries.com/v3.1/all");
    return data
}