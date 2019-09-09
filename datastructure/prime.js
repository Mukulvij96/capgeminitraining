var pathObj = require('../utility/util');
var path = new pathObj();

//var dataObj=require('./datastruct');
//var data=new dataObj.OrderedList();
//var index=0;
//var count=0;
var matrix=new Array();
for(var i=0;i<10;i++)
{    var count=0;
    matrix[i]=new Array();
    for(j=1;j<=100;j++)
    { 
        if(i==0 && j==1)
        continue;
        else
        {
            var num=(i*100)+j;
            if(path.primeChecker(num))
            {
                matrix[i][count]=num;
                count++;
            }
            else
            continue;
        }

        }
   
}
console.log(matrix);