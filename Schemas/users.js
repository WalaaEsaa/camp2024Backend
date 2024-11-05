const mongoose = require('mongoose')
const bcrypt=require('bcrypt')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: String,
    age: Number,
    phone: { type: Number, unique: false },
    email: {type:String, unique : true},
    password: String,
    role: String
    
})
userSchema.methods.comparePassword=async function (password) {
    //compare pass enter, pass save in db
    return await bcrypt.compare(password,this.password)
    
}
module.exports=mongoose.model('Users',userSchema)