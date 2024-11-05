const { message } = require('statuses')
const bookSchema=require('../Schemas/books')
exports.getAllBooks=async function(req,res){
    try{
        const books=await bookSchema.find()
        res.json({message:"Done",data:books})
    }catch(error){
        res.status(400).json({message:"something went wrong",error:error})

    }

}
//search زيها بس بدل الاسم يكون هid
exports.getOneBook=async function(req,res){
    try{
        const book=await bookSchema.find({_id:req.params.id})
        res.json({message:"Done",data:books})

    }catch(error){
        res.status(400).json({message:"something went wrong",error:error})

    }
}
exports.deleteBook=async function(req,res){
    try{
        await bookSchema.findByIdAndDelete(req.params.id)
        res.json({message:"done",data:[]})

    }catch(error){
        res.status(400).json({message:"something went wrong",error:error})
   
    }
}
exports.updateBook=async function(req,res){
    try{
        await bookSchema.findByIdAndUpdate(req.params.id,req.body)
        res.json({message:"Done",data:[]})



    }catch(error){
        res.status(400).json({message:"something went wrong",error:error})
 
    }
}
exports.createBook=async function(req,res){
    try{
        if(req.user.role==='admin'){
            const createdBook=await bookSchema.create(req.body)
            res.json({message:"Done",data:createdBook})
        }
        else{
            res.status(400).json({message:"i don,t have permission"})

        }
    }catch(error){
        res.status(400).json({message:"something went wrong",error:error})

    }
}