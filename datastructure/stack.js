 var fs=require('fs');
 var contents=fs.readFileSync('mukul.txt','utf8');
 
 
 const Stack=require('./datastruct');
 const ss=new Stack.Stack();

 var bal=0;
 for(var i=0;i<contents.length;i++)
 {  
     if(contents[i]=='(')
     {
         ss.push('(');
         
     }
     if(contents[i]==')')
     {
         ss.pop();
         
     }
    }
    if(ss.arr.size===0)
    console.log("Parenthesis are balanced")
    if(ss.arr.size!==0)
    console.log("Parenthesis not so balanced");
    
 

 
 
