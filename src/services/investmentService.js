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

const  {userExist,eachUser,validateId,
    allUser} = validator;
const {eachProduct,productValidate} = productValidator 



class adminService {
    async createInvestment(req,res){
        // console.log(req.body)
        // product_name: 'qwjk',
        // MaturityDate: '2020-12-25T17:29:17.907Z',
        // Tenor: '2020-12-18T17:29:13.683Z',
        // Tenor_duration: 6,
        // intrest: 1.3
        // 'Product Type': 'qq',
        // 'Maturity Date': '2020-11-30T10:02:12.085Z',
        // Tenor: '2020-12-07T10:02:15.662Z',
        // 'Interest Rate': 1.2
        let {product_name,intrest,Tenor_duration,MaturityDate,Tenor} =req.body 
        // console.log(  MaturityDate>Tenor_duration)
        // console.log(  MaturityDate - Tenor_duration)

        // await productValidate(req.body)
        let saveProduct =await new Product({product_name,intrest,Tenor_duration,MaturityDate,Tenor});
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





        async moment(req,res){
//             var a = moment();
// var b = moment.utc();
// let mine =`2020-12-02T09:56:50.595+00:00`
let mine =moment();
// a.format();  // 2013-02-04T10:35:24-08:00
// b.format();  // 2013-02-04T18:35:24+00:00
// a.valueOf(); // 1360002924000
// b.valueOf(); // 1360002924000
// return {a,b:`2020-12-02T09:56:50.595+00:00`}
return{ formate:mine.format(),value:mine.valueOf()}


        }
                

 

}

export default new adminService()
 