class Stockaccount
{    
    packageObj=require('fs');
readlineObj=require('readline-sync');
    
    stockAccount(companyStockContents)
    {
     var dataOfCompanyStocks=JSON.parse(companyStockContents);
     console.log("--------STOCK REPORT--------");
     console.log(dataOfCompanyStocks);
    }


buyStock(amountOfStocks,symbolOfStock)
{
if(this.searchStock(companyStockContents,symbolOfStock,amountOfStocks))
{
this.customerStocks(amountOfStocks,symbolOfStock);
}    

}
searchStock(companyStockContents,symbolOfStock,amountOfStocks)
{
    var stockAvailable=JSON.parse(companyStockContents);
    var length=stockAvailable.length;
    for(var i=0;i<length;i++)
    {
if(symbolOfStock==stockAvailable[i].Name)
{
    stockAvailable[i].NumberOfShares=(stockAvailable[i].NumberOfShares)-amountOfStocks;
    var companyStockContents=JSON.stringify(stockAvailable,null,2);
    packageObj.writeFile('stockinfo.json',companyStockContents,finished)
function finished()
{
    return true;
}
return true;  
}
else
{
    if(i==(length-1))
    {
        console.log("Share Not Found");
    }
    continue;
}
    }
}
customerStocks(amountOfStocks,symbolOfStock)
{
var customerStock=packageObj.readFileSync('stockinhand.json');

if(this.searchCustomerStock(symbolOfStock,customerStock,amountOfStocks))
{
    console.log("Transaction happened,check JSON File");
}
else
{
    console.log("Stocks Not Available ,Now creating a New Stock....");
    this.newCustomerStock(customerStock,{amountOfStocks,symbolOfStock});
}
}
searchCustomerStock(symbolOfStock,customerStock,amountOfStocks)
{
    var customerAvailable=JSON.parse(customerStock)
var length=customerAvailable.length;
for(var i=0;i<length;i++)
{
    if(customerAvailable[i].Name==symbolOfStock)
       {
        customerAvailable[i].NumberOfShares=(customerAvailable[i].NumberOfShares)+amountOfStocks;
        var customerStock=JSON.stringify(customerAvailable,null,2);
        packageObj.writeFile('stockinhand.json',customerStock,finished)
        function finished()
        {
            return true;
        }
        return true;
       }
            else
    return false;
}
}
newCustomerStock(customerStock,{amountOfStocks,symbolOfStock})
{
    var customerAvailable=JSON.parse(customerStock);
    var length=customerAvailable.length;
    for(var i=length;i<length+1;i++)
    {
        customerAvailable[i]['Name']=symbolOfStock;
        customerAvailable[i]['NumberOfShares']=customerAvailable[i]['NumberOfShares']+amountOfStocks;
        var customerStock=JSON.stringify(customerAvailable,null,2);
        packageObj.writeFile('stockinhand.json',customerStock,finished)
        function finished()
        {
            return true;
        }
        return true;
    }
}
}
var packageObj=require('fs');
var readlineObj=require('readline-sync');
var companyStockContents=packageObj.readFileSync('stockinfo.json');
var customerStock=packageObj.readFileSync('stockinhand.json');
var classObj=new Stockaccount();
//classObj.stockAccount(companyStockContents);
var amountOfStocks=readlineObj.question("Enter the amount of shares you wanna buy ");
var symbolOfStock=readlineObj.question("Enter the name of stock you want to buy ");
classObj.buyStock(parseInt(amountOfStocks,0),symbolOfStock)
//classObj.searchStock(companyStockContents);
