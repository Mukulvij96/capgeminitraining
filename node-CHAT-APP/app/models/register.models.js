const mongoose = require('mongoose');
//const bcrypt=require('bcrypt');

const registerSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: true
    }
},
    { timestamps: true });

const loginSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password:
    {
        type: String,
        required: true
    }
}, { timestamps: true });
let User = mongoose.model('Register', registerSchema,);
let Login=mongoose.model('Login',loginSchema);
class UserModel {
    register(body, callback) {
        const user = new User({
            firstName: body.firstName,
            lastName: body.lastName,
            email: body.email,
            password: body.password
        })
        user.save((err, result) => {
            if (err)
                callback(err);
            else
                callback(null, result);
        })
    }
    login(body, callback) {
        const login=new Login({
            email:body.email,
            password:body.password
     })
     login.get(async function(email,password,err)  {
const cheackEmail=await Login.findById(email,(err,res))
const checkPassword=await mongoose.get({"password":password});
if(cheackEmail==email && checkPassword==password)
console.log("Login Done")
else
callback(err);     
    })
     
    }
   

}
module.exports = new UserModel();
