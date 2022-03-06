
const express = require('express');
const res = require('express/lib/response');
require('express-group-routes');
const router = express.Router();

const UserController=require('../controllers/users-controller');

//initialize
const _userController=new UserController();

module.exports=function(app){
 
    app.group("/api/v1",(router)=>{
        router.post("/register",_userController.register);
        router.post("/login",_userController.login);
    })
    
    return router;
}