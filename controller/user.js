import {Product} from "../model/user.js"

let product = []

export const getUsers = (req,res)=>{
    console.log("getUsers Started")
    
    console.log(req.query)
    
    Product.find()
    .then(
        (result)=>{
            res.send(result)
        }
    )
    .catch(
        (err)=>{
            console.log(err)
        }
    )
}

export const createUsers = (req,res)=>{
    console.log("createUsers Started")
    const product = new Product({
        productName:req.body.productName,
        price:req.body.price,
    })
    product.save()
    res.send({"result":"success"})
}
