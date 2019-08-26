var r=require('readline-sync');
 var type=r.question("Enter type");
var temp=r.question("Enter Temperature");

    let s=require('../utility/util');
    var m=new s();

    m.temperatureConversion(temp,type);