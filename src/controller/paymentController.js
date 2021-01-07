import customError from "../utility/customError.js";
import User from "../models/userModel.js";
import validator from "../helper/userValidator.js";
import mongoose from "mongoose";
import otpGenerator from 'otp-generator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import _ from 'lodash';
import Email  from '../utility/mailServices.js'
import payServ  from '../services/paymentService.js'
import response from "../utility/response.js";




class paymentContrller {
    async callback(req,res){
        let data = await payServ.pay(req,res);
        res.status(200).json(response(true,'paid',data)) 
    }


 

}

export default new paymentContrller()
 