const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
var BCRYPT_SALT_ROUNDS = 12;
const jwt = require('jsonwebtoken');
var hbs = require('nodemailer-express-handlebars');
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
                        callback(!res);
                    }
                    else {
                        console.log(res);
                        console.log("Verified both password and email ")
                        console.log("----LOGIN SUCCESSFULLY----")
                        var token = jwt.sign({ email: res.email }, 'Secret Token', { expiresIn: '1hr' })
                        // body.loginToken = token;
                        User.update({ email: body.email }, { loginToken: token }, (err) => {
                            if (err)
                                callback(err);
                        })

                        console.log(token);
                        callback(null, "Login Successfully");
                    }
                })
                // Login.findOne({password:body.password},(err,res) => {
                //     if(err)
                //     {
                //     console.log("Password entered is Wrong ")
                //     callback(err);
                //     }
                //     if(res)
                //     {
                //         // login.save((err,res) => {
                //     if(err)
                //     callback(err);
                //     else
                //     {       
            }
        })
    }
    forget(userInput, callback) {
        User.findOne({ email: userInput.email }, (err, user) => {
            if (!user) {
                callback({ message: 'Email is not registered' })
            }
            else {
                var forgotToken = jwt.sign({ _id: user._id, name: user.name, email: user.email }, 'hey', { expiresIn: '10m' });
                User.update({ email: user.email }, { token: forgotToken }, (err, user) => {
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
                    text: 'Please click on the given link to reset your password http://localhost:3000/reset/' + forgotToken + '\n'
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
}



module.exports = new UserModel();
