var r=require('readline-sync');

var S=r.question("Press 1 to start");

function Stopwatch(S)

{
    
   
    while(true)
    {
        

        
         if((parseInt(S,0)==1))
    
    {
          var start=Date.now();
          console.log("starting timer");
    }
    var S1=r.question("Press 2 to Stop");
    if((parseInt(S1,0)==2))
    {
        var seconds=(Date.now()-start)/1000;
        return ("Total time calculated "+seconds);
    }
    else
     console.log("Press correct key to stop");
    continue;
    }
    
}
console.log(Stopwatch(S));