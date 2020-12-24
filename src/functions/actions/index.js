import { type } from "./type";

export const add = (Number=1)=>{
    return {
        type : type.add,
        payLoad :Number
    }   
}

export const dec = (minus=-1)=>{
    return {
        type : type.dec,
        payLoad : minus
    }   
}