var r=require('readline-sync');


function weather()
{
    
    while(true)
    {
        var temp=r.question("Enter Temperature in Fahrenheit");
var wind=r.question("Enter wind speed in miles per hour");
        if(temp<50 && 3<wind<120)
    {
      var wc=35.74+0.6215*temp+((0.4275*temp-35.75)*Math.pow(wind,0.16));
    }
    else
    {
        console.log("Enter correct values");
   continue;

    

    }

    return ("Effective Temperature is= " + wc);
}}
console.log(weather());