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




class paymentContrller {
    async pay(req,res){
  
    }


 

}

export default new paymentContrller()
 