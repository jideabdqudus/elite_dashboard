import mongoose from 'mongoose'
const  {Schema,model} = mongoose
let productsSchema= new Schema({
    product_name:{
        type:String,
        required:[true,"product require"]
    },
    color:{
        type:String,
        // required:true
    },
    intrest:{
        type:Number,
        required:true
    },
   
    MaturityDate:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    }
  
},
{timestamps:true})

export default  mongoose.model('products', productsSchema)