const express = require('express');
var router = express.Router();
var util=require("../utility")
const { check, validationResult } = require('express-validator');


const userController = require('../controller/register.controller');
router.post('/register', [
  check('firstName', "The Name Should not be Empty").not().isEmpty(),
  //checking the First Name Field
  check('lastName', 'Last Name should not be empty').not().isEmpty(),
  //checking the Last Name Field
  check('email', 'Your email is not valid').isEmail(),
  //checking whether it is an E-mail or not
  check('password', 'Your password must be at least 6 Characters').isLength({ min: 6 }),
  //checking the minimum length of password
],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).jsonp(errors.array());
    } else {
      //console.log(req.body);
      // console.log(req.body)
      return userController.registerController(req, res);
    }
  }
)
// router.post('/register',userController.registerController)
router.post('/login', [
  check('email', 'Your email is not valid').isEmail(),
  //checking whether it is an E-mail or not
  check('password', 'Your password must be at least 6 Characters').isLength({ min: 6 }),
  //checking the minimum length of password
],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
       res.status(422).jsonp(errors.array());
    } else {
      //console.log(req.body);
       userController.loginController(req, res);
    }
  });

  router.post('/forget',userController.forgetPasswordController);
//route for connecting with Forgot Password Controller
  router.post('/reset',util.authUser,userController.resetPasswordController);
//route for connecting with Reset Password Controller
router.get('/getAllUsers',userController.getAllUsersController)
//route for connecting with getAllUsers Controller
module.exports = router
