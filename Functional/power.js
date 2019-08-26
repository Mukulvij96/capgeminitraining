var readline=require('readline-sync');
var N=readline.question("Enter the value for N");

let s=require("./utility/util");

for(var i=0;i<=N;i++)
{
console.log(s.pow(i));

}

