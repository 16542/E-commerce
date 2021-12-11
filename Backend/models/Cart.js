const mongoose =require('mongoose');
const CartSchema = new mongoose.Schema({
    userId:{
        type:string,
        required:true,
        unique:true
    },
    producs:[
        {
            productId:{
                type:String
            },
            quantité:{
                type:Number,
                default:1,
            }
        }
    ]
  
    
},{timestamps:true}

)
module.exports=mongoose.model('Cart',CartSchema)