import response from "../utility/response.js";
import mongoose from "mongoose";
import customError from "../utility/customError.js";
import validator from "validator";
const  { isEmpty, isEmail, isLength } = validator;

class Validator{
    async eachProduct(Model,id){
        let product = await Model.findById(id)
        if(!product)
        return {product:null,status:false}
        return {product,status:true}
    }
    async productValidate(data){
        if(!data.description) 
        throw new customError("please provide discription for this description")
        if(!data.product_name) 
        throw new customError("please provide discription for this product_name")
        if(!data.intrest || isNaN(data.intrest)) 
        throw new customError("please provide discription for this intrest")
        if(!data.color) 
        throw new customError("please provide discription for this color")
        if(!data.duration) 
        throw new customError("please provide discription for this duration")
    }
}
export default new Validator()