import { GET_CATEGORY, GET_DETAILS } from "./action.types"

const initialstate={
    cat:[],
    details:[]
}
export const categoryReducer=(state=initialstate,{type,payload})=>{
switch(type){
    case GET_CATEGORY:{

        return {
            ...state,
            cat:payload
        }
    }
    case GET_DETAILS:{
        console.log(payload,"law of")
        return {
            ...state,
            details:payload
        }
    }
    default:{
        return state
    }
}
}