const path=require('../utility/util');
const pathObj=new path();

var readline=require('readline-sync');
var Mrows=readline.question("Enter the number of rows");
var Ncolumns=readline.question("Enter the number of columns");

console.log(pathObj.Matrix(Mrows,Ncolumns));

var month=readline.question("Enter the month ");
var year=readline.question("Enter the year");

pathObj.firstDayOfWeek(year,month);


