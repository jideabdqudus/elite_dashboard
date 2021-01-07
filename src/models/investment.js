import mongoose from 'mongoose'
const  {Schema,model} = mongoose
let investmentSchema= new Schema({
    investment_info:{
        type:Object,
        required:true
    },
    userId:{
        type:String,
        required:true
    },
    
  
},
{timestamps:true})

export default  mongoose.model('investment', investmentSchema)