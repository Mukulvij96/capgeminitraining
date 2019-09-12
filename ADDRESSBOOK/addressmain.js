var fs=require('fs');
var json=fs.readFileSync('addressbook.json');
var jsonString=JSON.parse(json);

var readline=require('readline-sync');
var filepath=require('./addressbook');
var addObj=new filepath.Add();
var inputAddressBookObj=new filepath.InputAddressBook();
function mainfunction()
{
    console.log("Enter 1 to add new Entries to the Address Book ");
    console.log("Enter 2 to search an Entry in the Address Book ");
    console.log("Enter 3 to edit an Existing Entry in the Address Book ");
    console.log("Enter 4 to display the complete Address Book ");
    
    
    var length=jsonString.length;
    console.log(length);
    var amountOfNewEntries=readline.question("Enter the Number of new entries ");
    console.log(amountOfNewEntries);
    console.log(jsonString);
    for(var i=0;i<amountOfNewEntries;i++)
    {
        //let count=length;
    jsonString.push(addObj.inputAddressDetails());
    console.log(jsonString);
    //jsonString[i]=inputAddressBookObj;
    //console.log(jsonString);
    //count++;
    var json=JSON.stringify(jsonString,null,2);
    fs.writeFile('addressbook.json',json,finished)
    function finished()
    {
        return true;
        //console.log("name entered");
    }
    //if(count==(length+amountOfNewEntries))
    //break;
}
}
mainfunction();