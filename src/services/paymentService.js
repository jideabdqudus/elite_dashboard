import customError from "../utility/customError.js";
import Investment from "../models/investment.js";
import validator from "../helper/userValidator.js";
import mongoose from "mongoose";
import otpGenerator from 'otp-generator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import _ from 'lodash';
import axios from 'axios';
import Email  from '../utility/mailServices.js'




class paymentService {
    async pay(req,res){
        let reference = req.query.reference;
        // console.log(reference)
// mj
      let verify = await  axios.get(`https://api.paystack.co/transaction/verify/${reference}`,{
      headers: {
          authorization: 'Bearer sk_test_f7beb8c628e82cd91124647082fb6a56d7402060',
          "content-type": "application/json",
          "cache-control": "no-cache",
       } })
       console.log(verify.data.data.gateway_response)

          if(verify.data.data.gateway_response=='Successful'){
            let saveResponse= await new Investment({
                investment_info:verify.data.data,
                userId:verify.data.data.metadata._id
            
            }).save()
            console.log(saveResponse)
          }
          return 
//    {
//     id: 951946869,
//     domain: 'test',
//     status: 'success',
//     reference: '1610005240617',
//     amount: 404000,
//     message: null,
//     gateway_response: 'Successful',
//     paid_at: '2021-01-07T07:40:53.000Z',
//     created_at: '2021-01-07T07:40:48.000Z',
//     channel: 'card',
//     currency: 'NGN',
//     ip_address: '154.118.26.118',
//     metadata: {
//       email: 'ajibadeabd@gmail.com',
//       firstName: 'Abdullah',
//       lastName: 'Ajibade',
//       _id: '5fe2364faab35d3b7c9bb55a',
//       userType: 'user',
//       product_name: 'elite 300',
//       product_price: '4000',
//       referrer: 'http://localhost:3000/dashboard/investments'
//     },
//     log: {
//       start_time: 1610005249,
//       time_spent: 5,
//       attempts: 1,
//       errors: 0,
//       success: true,
//       mobile: false,
//       input: [],
//       history: [ [Object], [Object] ]
//     },
//     fees: 16060,
//     fees_split: null,
//     authorization: {
//       authorization_code: 'AUTH_p6kr7abmda',
//       bin: '408408',
//       last4: '4081',
//       exp_month: '12',
//       exp_year: '2030',
//       channel: 'card',
//       card_type: 'visa ',
//       bank: 'TEST BANK',
//       country_code: 'NG',
//       brand: 'visa',
//       reusable: true,
//       signature: 'SIG_npQG0DhMWZLsKwqKHR7I',
//       account_name: null,
//       receiver_bank_account_number: null,
//       receiver_bank: null
//     },
//     customer: {
//       id: 24119978,
//       first_name: 'myname',
//       last_name: 'lastname',
//       email: 'ajibadeabd@gmail.com',
//       customer_code: 'CUS_0fx4c9kcfz06ras',
//       phone: '08090903620',
//       metadata: {},
//       risk_action: 'default',
//       international_format_phone: null
//     },
//     plan: null,
//     split: {},
//     order_id: null,
//     paidAt: '2021-01-07T07:40:53.000Z',
//     createdAt: '2021-01-07T07:40:48.000Z',
//     requested_amount: 404000,
//     pos_transaction_data: null,
//     transaction_date: '2021-01-07T07:40:48.000Z',
//     plan_object: {},
//     subaccount: {}
//   }















        console.log(verify.data.data)
  return 
    }
async savePayment(){
    let userId = req.user._id
    // check from paystact if the payment was successfull 
    let Investment

}

 

}

export default new paymentService()
 