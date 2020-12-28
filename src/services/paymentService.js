import customError from "../utility/customError.js";
import User from "../models/userModel.js";
import validator from "../helper/userValidator.js";
import mongoose from "mongoose";
import otpGenerator from 'otp-generator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import _ from 'lodash';
import Email  from '../utility/mailServices.js'




class paymentService {
    async pay(req,res){
        let txt = req.query.ref;
        let verify = await axios.get('https://paystack.com/callback')
        if(verify.data.status){
        }
  return 
    }
async savePayment(){
    let userId = req.user._id
    // check from paystact if the payment was successfull 
    let Investment

}

 

}

export default new paymentService()
 