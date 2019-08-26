var vend=[1,2,5,10,20,50,100,500,1000];
 
function vending(vend)
{
   
var r=require('readline-sync');
var amount=r.question("Enter the amount");
var count=0;
for(var i=vend.length-1;i>=0;i--)
{    while(vend[i]<=amount)
    {
    if(vend[i]<=amount)
    {
    amount=amount-vend[i];
    console.log(vend[i]);
    count=count+1;
    }
    }

}
return count;
}
console.log(vending(vend));