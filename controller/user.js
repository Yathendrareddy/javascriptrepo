import {User} from "../model/user.js"

let users = []

export const getUsers = (req,res)=>{
    console.log("getUsers Started")
    User.find()
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
    const user = new User({
        name:req.body.name,
        age:req.body.age,
        gender:req.body.gender,
        city:req.body.city,
    })
    user.save()
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