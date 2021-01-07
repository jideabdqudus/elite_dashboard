import customError from "../utility/customError.js";
import User from "../models/userModel.js";
import Product from "../models/productModel.js";
import validator from "../helper/userValidator.js";
import productValidator from "../helper/productValidator.js";
import mongoose from "mongoose";
import otpGenerator from 'otp-generator';
import bcrypt from 'bcryptjs';
import moment from 'moment';
import jwt from 'jsonwebtoken';
import Email  from '../utility/mailServices.js'
import Investment from "../models/investment.js";


const  {userExist,eachUser,validateId,
    allUser} = validator;
const {eachProduct,productValidate} = productValidator 



class adminService {
    async createInvestment(req,res){

        let {product_name,intrest,price,MaturityDate} =req.body 
             if(!price || isNaN(price) || price<1){
            throw new customError("please input a valid price")
             }
             if(!intrest || isNaN(intrest) || intrest<1){
                throw new customError("please input a valid intrest rate")
                 }
        // await productValidate(req.body)
        let saveProduct =await new Product({product_name,price,intrest,MaturityDate});
        // console.log(saveProduct)
        saveProduct.save()
        return 

        }
        async editProduct(req,res){
            let data =req.body
            let productId = req.params.productId
            await validateId(productId)
            let isProduct = await eachProduct(Product,productId)
            if(isProduct.status==false)
            throw new customError("product not found")
            await productValidate(req.body)
            isProduct.product.product_name=data.product_name
            isProduct.product.color=data.color
            isProduct.product.duration=data.duration
            isProduct.product.intrest=data.intrest
            isProduct.product.discription=data.discription
            isProduct.product.save()
            return isProduct.product
        }
    async deleteEachProduct(req,res){
            let productId = req.params.productId
            let isvalid =await validateId(productId)
            let isProduct = await eachProduct(Product,productId)
            if(isProduct.status==false)
            throw new customError("product not found")
            await Product.findByIdAndRemove(productId)
            return 

    }
    async viewEachProduct(req,res){
        let productId = req.params.productId
        await validateId(productId)
        let isProduct = await eachProduct(Product,productId)
        if( isProduct.status==false)
        throw new customError("product not found")

        return {product:isProduct}
           
        }

        async viewAllProduct(req,res){
            // await validateId(productId)
            // let isProduct = await eachProduct(Product,productId)
            // if( isProduct.status==false)
           let allProduct= await Product.find()
           console.log(allProduct)
            // throw new customError("product not found")
            return {product:allProduct}
            // return {product:allProduct}
               
            }

        async fetch__investment(req,res){
            let userId = req.user._id
            let all__user__investment = await Investment.find({userId})
            let split =[]
            all__user__investment.forEach((each)=>{
                let duration=each.investment_info.metadata.MaturityDate.split(" ")[0]
                let numberOFmonth  =2628000000.00*duration
                let transdate=Date.parse(each.investment_info.transaction_date)
                let matdata=(transdate+numberOFmonth)
                const endDate = new Date(matdata)
                // 
                console.log(endDate.getDate())
                console.log(endDate.getFullYear())
                console.log(endDate.getMonth())
                let remainigdate=matdata-Date.now()
                let remainingdays=(remainigdate/(60*60*24*1000)).toFixed(0)
                let each_transaction={
                    product_name:each.investment_info.metadata.product_name,
                    product_price:each.investment_info.metadata.product_price,
                    requested_amount:each.investment_info.requested_amount/100,
                    transaction_date:each.investment_info.transaction_date,
                    intrest:each.investment_info.metadata.intrest,
                    remainigdate:remainingdays,
                    MaturityDate:`${endDate.getFullYear() } -${endDate.getMonth()+1}-${endDate.getDate()+1}`,
                }
              
           split.push(each_transaction)
        })
return split
        }



        async moment(req,res){
      return 


        }
                

 

}

export default new adminService()
 