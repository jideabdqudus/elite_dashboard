import customError from "../utility/customError.js";
import User from "../models/userModel.js";
import Product from "../models/productModel.js";
import validator from "../helper/userValidator.js";
import mongoose from "mongoose";
import otpGenerator from 'otp-generator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import _ from 'lodash';
import Email  from '../utility/mailServices.js'

const  {userExist,eachUser,validateId,
    allUser} = validator;



class adminService {
    async getALLUsers(req,res){
    let ALLUSER =await allUser(User)
    if(ALLUSER.status===false) throw new customError("no user on your platform")
    return ALLUSER
    }

    async getEachUsers(req,res){
        let validId=await validateId(req.params.userId)
        if(validId==false) throw new customError("invalid user id")
        let EachUser = eachUser(User,req.params.userId)
        if(EachUser.length===0) throw new customError("no user found")
        return EachUser
        }

    async adminDashboard(req,res){
        let allProduct = await Product.find();
        let activeUser = await User.find({},{password:0});
        return  {all_product:allProduct,active_user:activeUser}


    }

}

export default new adminService()
 