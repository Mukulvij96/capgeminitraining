var r=require('readline-sync');

var d=parseInt(r.question("Enter Day"),0);
var m=parseInt(r.question("Enter month"),0);
var y=parseInt(r.question("Enter year"),0);

let s=require('../utility/util');
 
var l=new s();

l.dayOfWeek(m,d,y);
