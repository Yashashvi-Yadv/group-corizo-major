const USERMODEL = require("../../models/UserModel");
const bcrypt =require("bcryptjs")
const {createHmac} = require("crypto");
async function Login(req,res){
    const {email, password} = req.body;
    const user = await USERMODEL.findOne({email:email});
    const salt = user.salt;
    const Hpassword = createHmac("sha256", salt).update(password).digest("hex")
    if(user.password === Hpassword){
        res.render("Product", {user:user})
        
    }else{

        res.redirect("/")
       
    }



   // 

}
module.exports = Login;