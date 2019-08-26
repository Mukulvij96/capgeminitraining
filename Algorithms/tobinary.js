var r=require('readline-sync');

var deci=r.question("Enter decimal to be converted");

let s=require('../utility/util');

var A=new s();
A.toBinary(deci);