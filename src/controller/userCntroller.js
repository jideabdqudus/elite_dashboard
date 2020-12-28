import userServ from "../services/userService.js";
import response from "../utility/response.js";

class userCntroller{
    async register(req,res){
        let data = await userServ.register(req,res);
       res.status(200).json(response(true,'`an otp was sent to your email and it will expire with in five minutes, use the otp to activate your account`',data)) 
    }
    async login(req,res){
        let data = await userServ.login(req,res);
       res.status(200).json(response(true,'logged in',data)) 
    }
    
    async verify_otp(req,res){
        let data = await userServ.verify_otp(req,res);
       res.status(200).json(response(true,'account has been activated please proceed to log in',data)) 
    }
    
    async resend_otp(req,res){
        let data = await userServ.resend_otp(req,res);
       res.status(200).json(response(true,'otp resent',data)) 
    }

    async getProfile(req,res){
        let data = await userServ.getProfile(req,res);
       res.status(200).json(response(true,'user details fetch',data)) 
    }
}
export default new userCntroller()