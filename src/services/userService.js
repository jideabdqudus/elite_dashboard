import customError from "../utility/customError.js";
import User from "../models/userModel.js";
import validator from "../helper/userValidator.js";
import otpGenerator from 'otp-generator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import _ from 'lodash';
import Email  from '../utility/mailServices.js'

const  {registerValidator,loginValidator,userExist,otpValidator,saveData,updateData} = validator;



class userService {
    async register(req,res){
        let data =req.body
        let otp = otpGenerator.generate(6, { upperCase: true, specialChars: false })
        await registerValidator(data)
        let UserExist =await userExist(User,data.email)
        if(UserExist.status) throw new customError('email already exist')
        let saveUser={
            email:data.email,password:data.password,otp:otp,otpExp:Date.now()+3000000,
            firstName:data.firstName,lastName:data.lastName,
        }
        let isSaved =await saveData(User,saveUser)
        if(isSaved.status)
        // console.log(isSaved)
        await new Email(req.body, otp).send_otp();
        return  `an otp was sent to your email and it will expire with in five minutes, use the otp to activate your account`
    // }
    }

    async login(req,res){
        let data =req.body
        await loginValidator(data)
        let UserExist =await userExist(User,data.email)
        if(!UserExist.status) throw new customError('no user found')
        if(!UserExist.user.isEmailVerified) 
        throw new customError('account not activated enter the otp sent to your email or resend an otp')
        let passCorrect = await bcrypt.compare(data.password,UserExist.user.password)
        if(!passCorrect) throw new customError('password incorrect')
        let user=_.pick(UserExist.user,["_id","isEmailVerified","email","lastName","userType","firstName"])
        let accessToken =await jwt.sign(user,process.env.jwtSecret,{expiresIn:`${process.env.accessTokenExpiresIn}`})
        return {user,token:`Bearer ${accessToken}`}
    }

    async getProfile(req,res){
        let UserExist =await userExist(User,req.user.email)
       let userProfile=_.pick(UserExist.user,["email","firstName","lastName","_id","userType"])
        return userProfile
    }

    async verify_otp(req,res){
        let data=req.body
        // await  otpValidator(data)
        let UserExist =await userExist(User,data.email)
        if(!UserExist.status) 
        throw new customError('no user found')   
        if(UserExist.user.isEmailVerified)
        throw new customError('account has previously been verified')
        if(UserExist.user.otp!==data.Otp) 
        throw new customError('please input the otp you recieved')   
        if(Date.now()>UserExist.user.otpExp)
        throw new customError('otp expired, please resend otp')
        const oldDetails = { email: data.email };
        const updateDetails = { isEmailVerified:true };
        let isUpdated = await updateData(User,oldDetails, updateDetails)
        return 
    }
    async resend_otp(req,res){
        let data=req.body
        let UserExist =await userExist(User,data.email)
        if(!UserExist.status) 
        throw new customError('no user found')
        if(UserExist.user.isEmailVerified)
        throw new customError('account has previously been verified, no need for otp')
        let otp = otpGenerator.generate(6, { upperCase: true, specialChars: false })
        let otpexp=Date.now()+300000
        const oldDetails = { email: data.email };
        let updateDetails = {otp: otp,otpExp:otpexp};
        let isUpdated = await updateData(User,oldDetails, updateDetails)
        await new Email(req.body, otp).resend_otp();
        return
    }

}

export default new userService()
 