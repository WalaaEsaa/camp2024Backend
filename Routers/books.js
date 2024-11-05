const express = require('express')
const router = express.Router()
const booksController=require('../Controllers/books')
const authntication=require('../middelware/auth')
//API to get all books
//Api to get one book
//API to delete abook -admin
//API to update abook- login
//API to add abook -admin


//API to get all books-login
router.get('/api/books',authntication, booksController.getAllBooks)
//Api to get one book login
router.get('/api/books/:id',authntication,booksController.getOneBook)
//API to delete abook -admin
router.delete('/api/books/:id',authntication,booksController.deleteBook)
//API to update abook- login
router.put('/api/books/:id',authntication,booksController.updateBook)

//API to add abook -admin
router.post('/api/books',authntication,booksController.createBook)



module.exports=router