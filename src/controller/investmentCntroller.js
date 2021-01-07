import invServ from "../services/investmentService.js";
import response from "../utility/response.js";

class investmentCntroller{
    async createInvestment(req,res){
        let data = await invServ.createInvestment(req,res);
       res.status(200).json(response(true,'product added successfully',data)) 
    }
    async editProduct(req,res){
        let data = await invServ.editProduct(req,res);
       res.status(200).json(response(true,'product edited',data)) 
    }
    async deleteEachProduct(req,res){
        let data = await invServ.deleteEachProduct(req,res);
       res.status(200).json(response(true,'product deleted',data)) 
    }
    
    async viewEachProduct(req,res){
        let data = await invServ.viewEachProduct(req,res);
       res.status(200).json(response(true,'each product fetched',data)) 
    }
    
    async viewAllProduct(req,res){
        let data = await invServ.viewAllProduct(req,res);
       res.status(200).json(response(true,'each product fetched',data)) 
    }
    
    async moment(req,res){
        let data = await invServ.moment(req,res);
       res.status(200).json(response(true,'each product fetched',data)) 
    }
    
    async fetch__investment(req,res){
        let data = await invServ.fetch__investment(req,res);
       res.status(200).json(response(true,'ivestment fetched',data)) 
    }
    
}
export default new investmentCntroller()
