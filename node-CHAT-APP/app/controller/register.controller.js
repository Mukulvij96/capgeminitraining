const userService = require('../../app/services/userservices');
//const { check, validationResult } = require('express-validator');
// const express=require('express');
//  var validator=express.Router();
// validator.post('/user', [
//   // username must be an email
//   check('email').isEmail(),
//   // password must be at least 5 chars long
//   check('password').isLength({ min: 5 })
// ], (req, res) => {
//   // Finds the validation errors in this request and wraps them in an object with handy functions
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(422).json({ errors: errors.array() });
//   }
// })
exports.registerController=(req,res) => {

let responseResult={};
{
userService.registerService(req.body, (err, result) => {
    if (err) {
        responseResult.success = false;
        responseResult.errors = err;
        return res.status(400).send(responseResult);
    } else {
        responseResult.success = true;
        responseResult.result = result;
        return res.status(200).send(responseResult);
    }
})
}
}
exports.loginController = (req,res) => {
    let responseResult={};
    
    {
        userService.loginService(req.body, (err, result) => {
            if (err) {
                responseResult.success = false;
                responseResult.errors = err;
                return res.status(400).send(responseResult);
            } else {
                responseResult.success = true;
                responseResult.result = result;
                return res.status(200).send(responseResult);
            }
        })
        }
}
