const express = require('express')
const router = express.Router()
const userController=require('../Controllers/users')
//all path in application
//api المتاحةالمسارات
//end point
// path , method only
// router.get('/',userController.hello)


router.post('/api/users/register',userController.register)
router.post('/api/users/login',userController.login)



module.exports=router