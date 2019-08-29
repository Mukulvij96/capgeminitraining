var fs=require('fs');
//package for reading file 'fs' imported
var contents=fs.readFileSync('mukul.txt','utf8');
//function readFilesync of fs package used 
//utf8 contains all the possible symbols and alphabets and format in the world


var words=contents.split(" ");

//console.log(words);

const unorderedList=require('./unorderedList');
const l1=new unorderedList.unorderedList();
for(var i=0;i<words.length;i++)
{
    l1.insertStart(words[i]);
    
}
l1.printList();
  var r=require('readline-sync');
  var data=r.question("Enter the string to check ");
  l1.checkAvail(data); 
  