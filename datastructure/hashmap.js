var fs=require('fs');
var contents=fs.readFileSync('mukul.txt','utf8');

//var dataObj=require('readline-sync');


var numbers=contents.split(' ');

var hashObj=require('./datastruct');
var hashMap=new hashObj.OrderedList();

//hashMap.insertStart(13);
//hashMap.insertStart(41);
//hashMap.insertStart(11);
//hashMap.printList();

//console.log(numbers);
//console.log(numbers.length);
//var numberToBeFound=dataObj.question("Enter the number to be found ");
var hashSlot=0;
var hashArray=new Array();
for(var i=0;i<numbers.length;i++)
{
var data=numbers[i];
var hashSlot=(numbers[i])%(numbers.length+1);
//var linkedListElement=hashMap.insertStart(data);
hashArray[hashSlot]=   hashMap.insertStart(data);
//hashMap.insertStart(numbers[i]);
hashMap.printList();

}


//fs.writeFile('mukul1.txt',hashArray,err());
//if(err) throw err;
