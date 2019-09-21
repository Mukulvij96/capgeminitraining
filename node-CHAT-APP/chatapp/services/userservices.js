const userModel = require('../models/register.models');

exports.registerService = (body, callback) => {
    // console.log("services" + JSON.stringify(body) , body.firstName)
    userModel.register(body, (err, result) => {
        // console.log("services" +body)
        if (err)
            callback(err);
        else
            callback(null, result);
    })
}
exports.loginService = (body, callback) => {
    userModel.login(body, (err, result) => {
        if (err) {
            console.log("Error in services");
            callback(err);
        }
        else {   //console.log("In the services callback");
            callback(null, result);
        }
    })
}
exports.forgetPasswordService = (body,callback) => {
    userModel.forget(body , (err,result) => {
        if(err){
            console.log("Error in sending set Password mail ");
            callback(err);
        }
        else{
            callback(null,result)
        }
    })
}
exports.resetPasswordService = (req,callback) => { console.log("In services")
    userModel.reset(req, (err,result) => {
        if(err){
            console.log("Error in setting new Password ");
            callback(err);
        }
        else{
            callback(null,result)
        }
    })
}