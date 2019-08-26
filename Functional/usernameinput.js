
while(1)
  {
var readline=require('readline-sync');
var a=readline.question("Hello <username> ,How are you?\n ");
  
if(a.length<3 || a==null)
 {
  alert("Name too short");
 }
  else
 {
   
 console.log("Hello " +  a  + ", How are you?");
break;

 }

  }

