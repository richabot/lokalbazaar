import { GET_CATEGORY, GET_DETAILS } from "./action.types"
import axios from "axios"
export const getcatgories=()=>(dispatch)=>{
  
     axios.get("https://fakestoreapi.com/products/categories")
     .then((r)=>
     dispatch({type:GET_CATEGORY,payload:r.data}))
}



export const catdetails=(cat)=>(dispatch)=>{

    axios.get(`https://fakestoreapi.com/products/category/${cat}`)
    .then((r)=>
    dispatch({type:GET_DETAILS,payload:r.data}))
}