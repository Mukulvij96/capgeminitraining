const banking = require('./datastruct');
const bb = new banking.Banking();

var dataObj = require('readline-sync');


//var bankStatement=new Array();
var count = 0;

var bankBalance = 0;
while (true) {
    if (count==0) {
        console.log("List Empty ,you can only Deposit Now");
        var amountToDeposit = dataObj.question("Enter the amount to Deposit ");
            //bankBalance = bankBalance + parseInt(amountToDeposit, 0);
            //bankStatement[count]=amountToDeposit;

            console.log("The bank statement after this deposit is: " + bb.enqueue(parseInt(amountToDeposit,0)));
            //console.log("The bank Balance is: " + bankBalance);
            //count++;    
            
    
    }
    
    
    if(count>0)
    {  
        var enterToBank = dataObj.question("Enter W for Withdraw and D for Deposit and R to remove the first entry and S to Stop ")
        if (enterToBank == 'D') {
            var amountToDeposit = dataObj.question("Enter the amount to Deposit ");
            //bankStatement[count]=amountToDeposit;
            console.log("The bank statement after this deposit is: " + bb.enqueue(parseInt(+amountToDeposit,0)));
            //console.log("The bank Balance is: " + bankBalance);
            //count++;    
            
        }

        if (enterToBank == 'W') {
            var amountToWithdraw = dataObj.question("Enter the amount to Withdraw ");
            bankBalance = bankBalance - parseInt(amountToWithdraw, 0);

            //bankStatement[count]=(-amountToWithdraw);
            console.log("The bank Statement after this withdrawl is: " + bb.enqueue(parseInt(-amountToWithdraw,0)));
            //count++;
            //console.log("The bank Balance is: " + bankBalance);
            
        }
    }
    
    if(enterToBank=='R')
    {
        bankBalance = bankBalance + parseInt(bb.dequeue(),0);    
        console.log("The Amount in bank is :" +bankBalance);
    }
    if(enterToBank=='S')
    {
        console.log("The last Balance is : " +bankBalance);
        console.log("The customers still there are: " +bb.print());
        break;
    }
    count++;
}
