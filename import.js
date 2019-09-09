 
var packObj=require('fs');
var contentsOfJsonFile=packObj.readFileSync('data.json',);
var wordsOfJsonFile=JSON.parse(contentsOfJsonFile);

console.log(wordsOfJsonFile);

function appendJsonFile(wordsOfJsonFile)
{
    try
    { 
        if(typeof contentsOfJsonFile=='') throw "The Json File is Empty";
        if(typeof wordsOfJsonFile=='') throw "The Json File is Empty";
        if(typeof wordsOfJsonFile==null) throw "Null should not be there,check and enter again";    
    }
    catch(error)
    {
      console.log(error);
    }
   var totalCostOfRice=(wordsOfJsonFile[0].Weight)*(wordsOfJsonFile[0].Price);
   var totalCostOfPulses=(wordsOfJsonFile[1].Weight)*(wordsOfJsonFile[1].Price);
   var totalCostOfWheat=(wordsOfJsonFile[2].Weight)*(wordsOfJsonFile[2].Price);

   wordsOfJsonFile[0].inventoryValue=totalCostOfRice;
    wordsOfJsonFile[1].inventoryValue=totalCostOfPulses;
    wordsOfJsonFile[2].inventoryValue=totalCostOfWheat;
    var contentsOfJsonFile=JSON.stringify(wordsOfJsonFile,null,2);
    packObj.writeFile('data.json',contentsOfJsonFile,finished);
    function finished(err)
{
    console.log("Callback completed");
}
}
appendJsonFile(wordsOfJsonFile);
console.log(wordsOfJsonFile);
