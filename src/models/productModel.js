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
    duration:{
        type:String,
        // required:true
    },
    description:{
        type:String,
        // required:true
    },
    Tenor_duration:{
        type:String,
        required:true
    },
    Tenor:{
        type:Date,
        required:true
    },
    MaturityDate:{
        type:Date,
        required:true
    }
  
},
{timestamps:true})

export default  mongoose.model('products', productsSchema)