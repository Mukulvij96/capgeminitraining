const mongoose=require('mongoose');
//const bcrypt=require('bcrypt');

const registerSchema=mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    password:String
},{
    timestampse:true
});
let User= mongoose.model('Register', registerSchema);

class UserModel
{
    register(body)
    {
      const user=new User({
          firstName:body.firstName,
          lastName:body.lastName,
          email:body.email,
          password:body.email
      })
    }
}
module.exports = new UserModel();
