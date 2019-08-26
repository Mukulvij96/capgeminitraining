var readline = require('readline-sync');
var N = readline.question("Enter the number to find prime factorization \n");
var set = new Set();

function factor(N)
{
for(var i=2;i<=Math.sqrt(N);i++)
{
     while(N%i==0)
     {
        set.add(i);
        N=N/i;
     }}
if(N>2)
{
    set.add(N);
}


return set;
}
console.log(factor(N));