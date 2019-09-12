module.exports = (app) =>
{
const login=require('../controller/register.controller');

app.enterUsername('/Login',login.create)

}