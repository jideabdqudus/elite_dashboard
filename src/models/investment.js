import mongoose from 'mongoose'
const  {Schema,model} = mongoose
let investmentSchema= new Schema({
    product_name:{
        type:String,
        required:[true,"product require"]
    },
    color:{
        type:String,
        // required:true
    },
    
  
},
{timestamps:true})

export default  mongoose.model('investment', investmentSchema)