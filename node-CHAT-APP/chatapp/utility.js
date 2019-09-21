var jwt = require('jsonwebtoken');

exports.authUser = (req, res, next) => {
    console.log(req);
    var token = req.headers["token"];
    //we got the value of token from headers in this variable
    if (!token) return res.status(401).send("Acess denied Token Not Found")
    //if token not there ,then send message that token expired
    try {
        const decoded = jwt.verify(token, 'Secret Token');
        //verify token with the secret passed along with it
        console.log(decoded);
        // req.useremail = decoded.email;
        //
        req.useremail=decoded.email
        console.log(req.useremail);
        next()
    }
    catch (err) {
        console.log("Token Verification error" + err);
        res.status(400).send("Invalid token");
    }
}