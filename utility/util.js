module.exports = class util {
    pow(N) 
    {
        try
        {
        if(typeof N=='string') throw "Enter a variable to calculate ";
        if(typeof N=='') throw "The number should not be empty";
    
    }
    catch(error)
    {
        console.log(error);
        return error;
    }
    if(N<0)
    { 
        var m=2*this.pow(N+1);
        return m;       
    }
    if (N == 0)
        return 1;
    var m = 2 * this.pow(N - 1)
        return m;
        
    }



    har(N) {
        try
        {
        if(typeof N=='string') throw "Enter a variable to calculate Harmonic Mean";
        if(typeof N=='') throw "The number should not be empty";
        
    }
    catch(error)
    {
        console.log(error);
    return error;
    }
        if (N == 0)
            return 0;
        if (N == 1)
            return 1;
            if(N>1)
        var Har = 1 / N + (this.har(N - 1));
         
        if(N < 0 )
        var Har = 1 / N + (this.har(N + 1));

        return Har;
    }


    dayOfWeek(m, d, y) {

        try
        {
            if(typeof m=='' || typeof d=='' ||typeof y=='') throw "The variable should not be empty";
            if(typeof m=='string' || typeof d=='string' || typeof y=='string') throw "Dont enter string";
            if(m>12 || d>31 ) throw "Out of bound Value";
        }
        catch(error)
        {
            console.log(error);
            return error;
        }
        var y1 = y - (14 - m) / 12;
        var x = (parseInt(y1)) + (parseInt(y1)) / 4 - (parseInt(y1)) / 100 + (parseInt(y1)) / 400;
        var m1 = m + (12 * ((14 - m) / 12)) - 2;
        var d1 = (d + (parseInt(x)) + (31 * (parseInt(m1)) / 12) % 7);

        switch (parseInt(d1, 0)) {
            case 0:
                console.log("Sunday");
                break;
            case 1:
                console.log("Monday");
                break;
            case 2:
                console.log("Tuesday");
                break;
            case 3:
                console.log("Wednesday");
                break;
            case 4:
                console.log("Thursday");
                break;
            case 5:
                console.log("Friday");
                break;
            case 6:
                console.log("Saturday");
                break;
            default:
                console.log("Enter correct date");

        }
    }

    temperatureConversion(temp, type) {
        
        try{
            if(typeof type!='C' || typeof type!='F' ) throw "Enter correct type";
            if(typeof type=='' || typeof temp=='') throw "Do not enter empty values";
            if(typeof temp=='string') throw "Enter a variable";     

        }
        catch(error)
        {
            console.log(error);
            return error;

        }
        if (type == 'C') {
            var fah = temp * (9 / 5) + 32;
            console.log("Temperature in Fahrenheit= " + fah);
        }
        if (type == 'F')
            var cel = (temp - 32) * (5 / 9);
        console.log("Temperature in celsius= " + cel);


    }

    payment(P, Y, R) {
        var n = 12 * Y;
        var r = R / (12 * 100);

        var paytotal = (P * r) / (1 - Math.pow((1 + r), (-n)));

        console.log("Total Interest= " + paytotal);
    }

    toBinary(deci) {
        var count = 0;
        var bin = 0;
        while (deci != 0) {


            var rem = 0;
            var rem = (deci % 2);

            var deci = (Math.floor(deci / 2));

            bin = bin + (rem * (Math.pow(10, count)));
            count++;

        }

        var bin1 = bin;
        var countDig = 0;
        while (bin1 != 0) {
            bin1 = Math.floor(bin1 / 10);

            countDig++;

        }
        //console.log(countDig);
        if (countDig % 8 != 0) {
            for (var p = 1; p <= 8 - (countDig % 8); p++) 
            {
                bin = '0' + bin;
            }
        }

        console.log("Binary conversion is= " + bin);
        var r="";
        if(countDig%8==0)
        {r=r+bin
        this.swapNibbles(r, countDig);
        }
        else
        this.swapNibbles(bin, countDig);
        

    }

    swapNibbles(bin, countDig) {
        var bin5='';
        //console.log(bin.toString(10).length);

       for (var b = 0; b <=Math.floor(countDig / 8); b++) {
           if(countDig%8==0 && b==Math.floor(countDig/8))
           break;

            var bin2 = bin.slice((b * 8), (b * 8) + 4);
            var bin3 = bin.slice((b * 8) + 4, (b + 1) * 8);
    
            var bin4 = bin3 + bin2;
            var bin5 = bin5 + bin4;
            
        }
        console.log("The Swapped Nibbles is= "+bin5);
       

        //console.log(A.valueOf());
    
    }
//console.log(bin);
//console.log(countDig);}
    sqrt(c) {
        var t = c;

        while (Math.abs(t - (c / t)) > (t * Math.pow(10, -16))) {
            t = ((c / t) + t) / 2;
        }
        console.log("Nearest value = " + t);

    }

Matrix(M,N)
{
    var matrix=new Array();
    for(var i=0;i<M;i++)
    {
matrix[i]=new Array();
        for(var j=0;j<N;j++)
        { 
            if(i==0)
            {
                switch(j)
                {
                    case 0:matrix[0][0]='Su';
                    break;
                    case 1:matrix[0][1]='Mo';
                    break;
                    case 2:matrix[0][2]='Tu';
                    break;
                    case 3:matrix[0][3]='Wed';
                    break;
                    case 4:matrix[0][4]='Th';
                    break;
                    case 5:matrix[0][5]='Fr';
                    break;
                    case 6:matrix[0][6]='Sat';
                    break;
                    default:console.log('Invalid Date');
                }
                
            }


        }
    }
return matrix.valueOf();
}

random(coup, y) {
    while (count < coup) {
        
        for (var b = 0; b <coup; b++) {
            coupon[b] = new Array();
            var num = Math.floor(Math.random((1/Math.pow(10,y)), 1) * (Math.pow(10, y)));
            if (num == coupon[b])
                continue;

            else {
                coupon[count] = num;
                count++;

            }

        }
    }
    return coupon;

}
firstDayOfWeek( year, month){
    year -= month < 3;
    return (year + year/4 - year/100 + year/400 + this.tick[month-1] + 1) % 7;
}
primeChecker(number)
{
    var count=0;
    for(var i=1;i<=Math.sqrt(number);i++)
    {
        if(number%i==0)
        count++;
    }
    if(count==1)
    return true;
    else
    return false;
    
}

}