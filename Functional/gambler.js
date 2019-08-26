var readline = require('readline-sync');
var stk1 = readline.question("Enter the stake amount");
var goal = readline.question("Enter the goal to be reached");


var stk = stk1;


var wins = 0;
var loss = 0;
function game(stk, goal) {

    while (stk < goal) {
        var n = Math.random(0, 1);
        if (n < 0.5) {
            stk = stk - 1;
        }
        if (n > 0.5) {
            stk = stk + 1;
        }


    }
    if (stk == goal) {
        wins++;
        return ("wins= " + (wins / (wins + loss)));
    }
    else {
        loss++;
        return ("loss= " + (loss / (wins + loss)));
    }
}

var N = readline.question("Enter the number of times the gaem to be played");
for (var i = 1; i <= N; i++) {
    console.log(game(stk, goal));

}