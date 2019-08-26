var readline = require('readline-sync');
var inp = readline.question("enter any integer ");
var arry = new Array();

function input(inp) {
    for (var i = 0; i < inp; i++) {
        var x = readline.question("enter any integer ");
        arry[i] = x;
     }
      console.log(arry);
    return arry;
}
var count=0;
 function triplets(arry){

var x1=0;
var x2=0;
var x3=0;

    for(var y=0;y<inp-2;y++)
    {      //x1=arry[y];
        for(var z=y+1;z<inp-1;z++)
        { //x2=arry[z];
            for(var f=z+1;f<inp;f++)
            { //x3=arry[f];
              /* console.log(x1);
               console.log(x2);
              */ 
                if((parseInt(arry[y],0)+parseInt(arry[z],0)+parseInt(arry[f],0))==0)
                { 
                    count++;
                    console.log(arry[y] +"+" + arry[z] + "+" +arry[f] );
                }
                }
        }
        
    }
        return count;
}

console.log(triplets((input(inp))));
 
