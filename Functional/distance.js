var readline=require('readline-sync');
var x=readline.question("Enter the x-coordinate");
var y = readline.question("Enter the y co-ordinate");

var dis=0;
function euc(x,y)
{ 
    
 dis=Math.sqrt((Math.pow(x,2)+Math.pow(y,2)));
return dis;
}
console.log(euc(x,y));