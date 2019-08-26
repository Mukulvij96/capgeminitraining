function checkavail(array,a,b)
{
   
    if(array[a][b]== '*')
        return true;
    else
    return false;



}


function comp(array)
{
   
    while(1)
    {
        
        var comprow=Math.floor(Math.random()*3);
        var compcol=Math.floor(Math.random()*3);
        if(checkavail(array,comprow,compcol))
        {
            array[comprow][compcol]='o';
            break;
        }
        else
            continue;
    }
    

}


function ticmake()
{   tarray =new Array(3);
    for(var i=0;i<3;i++)
    {   
        tarray[i] = new Array(3);
        for(var k=0;k<3;k++)
            {
                tarray[i][k]='*';
            }
        

    }
    return tarray;

}
    function inp(array)
    {
        var r=require('readline-sync');
    

        while(1)
        {
        
        var trow=r.question("which row do u wnana place your cross ");
        var tcol=r.question("which col do u wanna place ur cross ");
        if(checkavail(array,trow,tcol))
        {
            array[trow][tcol]='x';
            break;
        }
        else
        console.log("that place is occupied");
    
        }
    }
function disp(array)
{
    for(var i=0;i<3;i++)
        console.log(array[i]);
        


}  
function checkwin(array)
{

    for(var i=0;i<3;i++)
    {
    if((array[i][0]==array[i][1] && array[i][0]==array[i][2] && array[i][0]!='*') || (array[0][i]==array[1][i] && array[0][i]==array[2][i]&& array[0][i]!='*'))
        return true;
    }

    if(array[0][0]=='x'&& array[1][1]=='x'&&array[2][2]=='x'&& array[0][0]!='*' || array[0][0]=='o' && array[1][1]=='o' && array[2][2]=='o'&& array[0][0]!='*')
    return true;
    if(array[2][0]=='x'&& array[1][1]=='x'&&array[0][2]=='x' && array[2][0]!='*'|| array[2][0]=='o' && array[1][1]=='o' && array[0][2]=='o'&& array[0][2]!='*')
    return true;
    else 
    return false;

}

var tic=ticmake();
var draw=1;
for(var i=0;i<5;i++)
{
comp(tic);
//console.table(tic);
disp(tic);

    if(checkwin(tic))
{
    console.log("comp have won");
    draw=0;
    break;
}
if(i==4)
break;

inp(tic);
if(checkwin(tic))
{
    console.log("you have won");
    draw=0;
    break;
}



}
if(draw==1)
console.log("its a draw");
console.log("final tictactoe");
disp(tic);