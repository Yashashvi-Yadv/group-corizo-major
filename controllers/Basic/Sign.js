const USERMODEL = require("../../models/UserModel");
async function Add(req,res){

    const type  = req.body.type;
    const{name, email, password} = req.body;

    if(type ==="user"){
        await USERMODEL.create({
            name, 
            email, 
            password,
            type:"USER",
        })
        res.redirect("/")


    }else if(type ==="admin"){
        await USERMODEL.create({
            name, 
            email, 
            password,
            
            type:'ADMIN',
        })
        res.redirect("/")

    }else{
        res.redirect("/")
    }
}
module.exports = Add;