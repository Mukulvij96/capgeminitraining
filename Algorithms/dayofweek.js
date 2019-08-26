var r=require('readline-sync');

var d=r.question("Enter Day");
var m=r.question("Enter month");
var y=r.question("Enter year");

let s=require('../utility/util');
 
var l=new s();

l.dayOfWeek(m,d,y);
