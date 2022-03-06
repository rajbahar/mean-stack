
const UserService=require('../services/user-service');

const _userService=new UserService();

class UserController{
    constructor(){}

    async register(request,response){
        const data=request.body;
        const result=await _userService.register(data);
        response.status(result.code);
        response.json(result);
        response.end();
    }

    async login(request,response){
        const data=request.body;
        const result=await _userService.login(data);
        response.status(result.code);
        response.json(result);
        response.end();

    }

}

module.exports=UserController;