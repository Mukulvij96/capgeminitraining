var heads=0;
var tails=0;
var i;

  var readline=require('readline-sync');

  var a=readline.question("Please enter the number of time to flip coin");
    
   for(var i=1;i<=a;i++)
     {
      var ran=Math.random(0,1);
        
       if(ran<0.5)
         tails++;
       else
         heads++;
      
     }
    
    if(heads<tails)
      console.log("tails "+(tails*100)/a);
    else
      console.log("heads "+(heads*100)/a);
  
