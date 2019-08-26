var r=require('readline-sync');

var a=r.question("Enter the value of a ");
var b=r.question ("Enter the Value of b ");
var c=r.question("Enter the value of c ");

function quadratic(a,b,c)
{
    var del=Math.pow(b,2)-(4*a*c);

    console.log("Now displaying roots of The Equation");

    var x1=(-b+(Math.sqrt(del)))/(2*a);
    var x2=(-b-(Math.sqrt(del)))/(2*a);
     return ("First root = " + x1 + " Second root is = "  + x2);
}
console.log(quadratic(a,b,c));
