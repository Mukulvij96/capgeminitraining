var r=require('readline-sync');

var perm=r.question("Enter the word to be permutated  ");

var strin=new String(perm);
var arry=new Array();

function permutation(strin,M)
{
    var count=0;
 var N=M;

for(var j=1;j<strin.length;j++)
{

}
{
    var N=N+strin.charAt(j);
for(var k=2;k<strin.length;k++)
{   
    var N=N+strin.charAt(k);
    
}   
console.log(N);
N=strin.charAt(count);
/*for(var l=2;l<strin.length;l++)
{
    var M=M+strin.charAt(l);
    
}

}

}
//console.log(M);

//console.log(N);

*/
}
count++;
}


for(var i=0;i<strin.length;i++)
{    
    var M=strin.charAt(i);
    //console.log(M);
    console.log(permutation(strin,M));     
}
//console.log(strin)
