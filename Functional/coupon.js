var readline = require('readline-sync');
var coup = readline.question("Enter the number of coupon numbers ");
var y = readline.question("Enter how much digit number coupon do you want ");
var coupon = new Array();
var count = 0;
function random(coup, y) {
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


    console.log(random(coup, y));


