import adminServ from "../services/adminService.js";
import response from "../utility/response.js";

class adminCntroller{
    async getALLUsers(req,res){
        let data = await adminServ.getALLUsers(req,res);
       res.status(200).json(response(true,'all user data fetched',data)) 
    }
    async getEachUsers(req,res){
        let data = await adminServ.getEachUsers(req,res);
       res.status(200).json(response(true,'each user data fetched',data)) 
    }
    async  adminDashboard(req,res){
        let data = await adminServ.adminDashboard(req,res);
       res.status(200).json(response(true,'admin dashboard fetch',data)) 
    }
    
}
export default new adminCntroller()