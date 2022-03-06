
const UserModel=require('../models/users');
class UserService{

    constructor(){}

    async register(data){
        // console.log(data)
        const existing= await UserModel.findOne({username:data.username});

        if(existing){
           return {code:200,success:true,data:"username exist"} 
        }

        const result= new UserModel(data);
        await result.save();

        return {code:200,success:true,data:result}
    }

    async login(data){
        const existing=await UserModel.findOne(data);
        if(!existing){
            return {code:200,success:true,data:'login failed'}
        }
         
        return {code:200,success:true,data:existing}
    }
}

module.exports=UserService;