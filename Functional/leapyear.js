/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

while(1)
{
  var readline=require('readline-sync');

         var a=readline.question("Check for Leap year");
          if(a<1000 || a>9999)
            {   
              console.log("give me a four digit number");
              continue;
            }
if(a%400==0)
   console.log("leap year");
if(a%400!=0)
     {
if(a%4==0 && a%400==0)
  console.log("leap year");
       else
         console.log("Not a leap year");
     }  
  break;
}
