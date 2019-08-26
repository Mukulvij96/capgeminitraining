var r=require('readline-sync');

var P=r.question("Enter now");
var Y=r.question("Enter now");
var R=r.question("Enter now");

let s=require('../utility/util');

var m=new s();

m.payment(P,Y,R);