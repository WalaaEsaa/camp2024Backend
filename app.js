const express = require('express')
const bodyparser = require('body-parser')
const mongoose = require('mongoose')
const app = express();
app.use(bodyparser.json())

const userRouter=require('./Routers/users')
const bookRouter=require('./Routers/books')


// connect uri from mongodb site
const uri = "mongodb+srv://walaaEsaa:Walaa4495@nooracadmy.vu4n1.mongodb.net/?retryWrites=true&w=majority&appName=noorAcadmy";
const userSchema = require('./Schemas/users') //import schame
//connection function
const connectToDB = async () => {
    try {
        //connect to db
        mongoose.set('strictQuery', false)
        mongoose.connect(uri)
        console.log('connected to db')
    } catch (error) {
        console.log('errror', error)
        process.exit()
    }


}

app.use('/',userRouter)
app.use('/',bookRouter)
connectToDB()



app.listen('9092')

//lect9
//book mangment api's
//secure our api's
//roles صالحيات لليوسير 