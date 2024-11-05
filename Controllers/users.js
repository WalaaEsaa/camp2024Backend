const {json} = require('body-parser')
const  userModel=require('../Schemas/users')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const { message } = require('statuses')
   
exports.register = async function (req, res) {
    try{
        let newUser=new userModel(req.body)
        //hash password
        
        const hashedPassword=await bcrypt.hash(req.body.password,10)
        newUser.password=hashedPassword

        let createUser=await newUser.save()
        res.json({message: "User added Successfully",user:createUser})
    }catch(error){
        res.status(400).json({message:"error"})

    }
   

}
exports.login = async function (req, res) {
    try{

        let user=userModel.findOne({email : req.body.email})
        if(!user){
            res.status(401).json({message:"invalid email or password"})
        }
        let passwordCheck=await user.comparePassword(req.body.password)
        if(passwordCheck===false){
            res.status(401).json({message:"invalid email or password"})
        }
        // استخراج كارنيه العضوية  للدخول مثلا كارنيه للنادي 
        const token=jwt.sign({_id : user._id , name : user.name, role:user.role},'secret')
        res.status(200).json({message:"user logged in",user:{name:user.name,email:user.email,token}})
    }catch(err){
        res.status(400).json({message:"error login",data:err})

    }

    
}

