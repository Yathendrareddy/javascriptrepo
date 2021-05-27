import mongoose from "mongoose"
const Schema = mongoose.Schema
const userSchema = new Schema({
    productName:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
})

export const Product = mongoose.model("Product", userSchema)