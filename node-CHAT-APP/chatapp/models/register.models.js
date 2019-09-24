
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
var BCRYPT_SALT_ROUNDS = 12;
const jwt = require('jsonwebtoken');
// var hbs = require('nodemailer-express-handlebars');
email = process.env.MAILER_EMAIL_ID || 'auth_email_address@gmail.com',
    pass = process.env.MAILER_PASSWORD || 'auth_email_pass'
nodemailer = require('nodemailer');
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
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    loginToken: {
        type: String
    },
    forgetToken: {
        type: String
    },
    onlineToken:{
        type:Boolean,
        default:null
    }
    

},
    { timestamps: true });

// const loginSchema = mongoose.Schema({
//     email: {
//         type: String,
//         required: true
//     },
//     password:
//     {
//         type: String,
//         required: true
//     }
// }, { timestamps: true });
let User = mongoose.model('Register', registerSchema);
//let Login=mongoose.model('Login',loginSchema);
class UserModel {
    register(body, callback) {
        // const result=User.findOne({email:body.email})
        // console.log(result);
        // if(result==true)
        // {
        //     callback("Email already exists ");
        // }
        console.log("model body", body),
            body = JSON.parse(JSON.stringify(body))
        console.log(body.firstname);
        var salt = bcrypt.genSaltSync(BCRYPT_SALT_ROUNDS);
        var hashPassword = bcrypt.hashSync(body.password, salt);
        const user = new User({
            firstName: body.firstName,
            lastName: body.lastName,
            email: body.email,
            password: hashPassword
        })
        user.save((err, result) => {
            if (err)
                callback(err);
            else
                callback(null, result);
        })
    }
    login(body, callback) {

        User.findOne({ email: body.email }, (err, res) => {
            if (!res) {
                console.log("Email ID Wrong");
                console.log("----LOGIN UNSUCCESSFUL----");
                callback(!res);
            }
            else {
                //bcrypt.compare()
                bcrypt.compare(body.password, res.password, (err, res) => {
                    if (!res) {
                        console.log("Password Entered is Wrong");
                        console.log("----LOGIN UNSUCCESSFUL----");
                        callback("Password Doesn't Matches");
                    }
                    else {
                        console.log(res);
                        console.log("Verified both password and email ")
                        console.log("----LOGIN SUCCESSFULLY----")
                        var logintoken = jwt.sign({ email: res.email }, 'Secret Token', { expiresIn: '3hr' })
                        // body.loginToken = token;
                        
                        User.update({ email: body.email }, { loginToken: logintoken, onlineToken:true }, (err) => {
                            if (err)
                                callback(err);
                        })

                        // console.log(logintoken);
                        callback(null, "Login Successfully");
                    }
                })

            }
        })
    }
    forget(userInput, callback) {
        //var localstorage='';
        User.findOne({ email: userInput.email }, (err, user) => {
            if (!user) {
                callback({ message: 'Email is not registered' })
            }
            else {
                var forgotToken = jwt.sign({ _id: user._id, email: user.email }, 'Secret Token', { expiresIn: '1hr' });
                //localstorage.setItem('forgotToken', forgotToken)
                User.update({ email: user.email }, { forgetToken: forgotToken }, (err, user) => {
                    if (err) {
                        callback(err);
                    } else {
                        callback(null, user);
                    }
                });
                var smtpTransport = nodemailer.createTransport({
                    service: 'Gmail',
                    auth: {
                        user: "er.mukulvij96@gmail.com",
                        pass: "mukul$1996"
                    }
                })
                var mailOptions = {
                    to: 'prabhnoor.parry@gmail.com',
                    from: 'er.mukulvij96@gmail.com',
                    subject: 'Password Reset',
                    text: 'The following link will be active only for 1 hour .Please click on the given link to reset your password http://localhost:3000/#!/reset/' + forgotToken + '\n'
                }
                smtpTransport.sendMail(mailOptions, (err, result) => {
                    if (err) {
                        callback(err);
                    } else {
                        callback(null, result);
                    }
                })
            }
        })
    }
    reset(req, callback) {
        console.log("In models")
        // console.log(req.useremail)
        // console.log(req.headers["token"])
        
        User.findOne({ email: req.useremail, forgetToken: req.headers["token"] }, (err, res) => {
            if (!res) {
                console.log("In error")
                callback("The token has expired ");
            }
            if (res) {
                // console.log("result")
                // console.log(req.body.confirmPassword);
                // console.log(res.password);
                    bcrypt.compare(req.body.password, res.password, (response) => {
                        if (!response) {
                            //  console.log("inside compares "+res.password)
                            // console.log("Inside compare "+body.newPassword)
                            var salt = bcrypt.genSaltSync(BCRYPT_SALT_ROUNDS);
                            var hashPassword = bcrypt.hashSync(req.body.password, salt);
                            User.findByIdAndUpdate(res._id,  {password: hashPassword} ,{new:true}, (error, response) => {
                                if (error)
                                    callback("The ID is not there");
                                if (response) {
                                    callback(null, "The password has been changed");
                                }
                                else {
                                    console.log("YOYO");
                                    callback("Password already entered before");
                                }
                            })
                        }

                    })

                }
                      })
    }
    getAllUsers(req,callback)
    {
        User.find({},{firstName:1,lastName:1,email:1},(err,res) => {
            if(err)
            callback("There are no users present, Database empty ");
            if(res)
            {
                // console.log(res);
                callback(null,res)
            }

        })

        
    }

}


module.exports = new UserModel();
