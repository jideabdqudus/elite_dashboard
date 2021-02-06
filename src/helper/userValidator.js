import response from "../utility/response.js";
import mongoose from "mongoose";
import customError from "../utility/customError.js";
import validator from "validator";
const  { isEmpty, isEmail, isLength } = validator;

class Validator{
    async registerValidator(data){
    if(!data.firstName ||  (!isLength(data.firstName, { min: 3 }))) 
    throw new customError("please provide a valid first name ",400)
    if((!data.lastName) || (!isLength(data.lastName, { min: 3 }))) 
    throw new customError("please provide a valid last name ",400)
    if((!data.email) || !isEmail(data.email)) 
    throw new customError("please provide a valid email",400)
    // this.verifyEmail(data)
    if((!data.password) ) 
    throw new customError("please provide a valid password ",400)
   
    if(data.confirm_password!== data.password)
    throw new customError("password does not match ",400)
    }
    async loginValidator(data){
    if(!data.password) throw new customError("provide your password ",400)
    if(!data.email) throw new customError("provide your email ",400)
    }
    async userExist(User,email){
        let userExist = await User.findOne({email:email})
        console.log('object')
        if(!userExist)  return {user:null,status:false}
        return {user:userExist,status:true}
    }
    async allUser(User){
        let allUser = await User.find({},{password:0,otp:0,otpExp:0})
        if(!allUser)  return {user:null,status:false}
        return {user:allUser,status:true}
    }
    async eachUser(Model,id){
        let eachUser = await Model.findById(id,{password:0,otp:0,otpExp:0})
        console.log(eachUser)
        if(!eachUser)
        return {user:null,status:false}
        return {user:eachUser,status:true}

    }
    async saveData(Model,userDetails){
        let saveUser = await new Model(userDetails).save()
        if(!saveUser)
        return {user:null,status:false}
        return {user:saveUser,status:true}
    }
    async updateData(Model,filter, update){
        let Update = await Model.findOneAndUpdate(filter, update);
        if(!Update)
        return {user:null,status:false}
        return {user:Update,status:true}
    }
    async verifyEmail(data){
        if(!data.email || (!isLength(data.email, { min: 3 })))
     throw new customError("provide your email please",400)
    }
        async validateId(id){
            let isvalid = mongoose.isValidObjectId(id)
            if(isvalid===false){
     throw new customError("invalid id",400)
            }
            return isvalid

        }
            async otpValidator(data){
            this.verifyEmail(data)
        
    }
}
export default new Validator()

