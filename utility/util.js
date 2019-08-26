module.exports = class util {

             
    
    pow(N) 
    {
        try
        {
        if(typeof N=='string')
        throw "Enter a variable to calculate Harmonic Mean";
        if(typeof N=='')
        throw "The number should not be empty"
    }
    catch(error)
    {
        //console.log(error);
        return error;
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
            return;
        if (N == 1)
            return 1;
        var Har = 1 / N + (this.har(N - 1));

        return Har;
    }


    dayOfWeek(m, d, y) {
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

matrix(M,N)
{
    for(var i=0;i<M;i++)
    {
mat[i]=new Array();
        for(var j=0;j<N;j++)
        { 
            var num=readline.question("Enter the number");
mat[i][j] = num;

        }
    }
return mat.valueOf();
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
}