let util = require('./oopsutility');
let read = require('readline-sync');
const fs = require('fs');
var stockAccountObj = new util.StockAccount('./JSON/stockholdings.json');
/**
 * @function {} mainfunc
 * @description main driver function
 */
function mainfunc(){
    while (1) {
        console.log("Press 1 for buying");
        console.log("Press 2 for selling");
        console.log("Press 3 for saving in files");
        console.log("Press 4 for print final report");
        console.log("Press 5 for adding new stock to market");
        console.log("Press 6 for seeing the transaction done in this session");
        console.log("Press any key for exit");
        /**
         * @var {number} choice
         * @description
         */
        var choice = read.question("Enter your choice : ");
        /**
         * @switch {number}
         */
        switch (choice) {
            /**
             * @case 1
             * @description 
             */
            case '1':
                {
                    var company = read.question("Enter the stock ");
                    var amount = read.question("Enter the amount ");
                    stockAccountObj.buy(parseInt(amount), company);
                    break;
                }
            case '2':
                {
                    var company = read.question("Enter the stock ");
                    var amount = read.question("Enter the amount ");
                    stockAccountObj.sell(parseInt(amount), company);
                    break;
                }
            case '3':
                {
                    stockAccountObj.save(stockAccountObj);
                }
                break;
            case '4':
                stockAccountObj.printReport();
                return true;
                
            case '5':
                {
                    console.log("You have to be an ADMIN to add a stock in market");
                    var check=util.checkAdmin();
                    if(!check)
                        return;
                    var company = read.question("Enter the stock ");
                    var amount = read.question("Enter the amount ");
                    var price = read.question("Enter the rate ");

                    var stock = new util.Stocks(company, parseInt(price), parseInt(amount));
                    util.addShareToMarket(stock);

                }
            case '6':
                {
                    var transarr = [];
                    size=stockAccountObj.queueObj.size;
                    for (var i = 0; i < size; i++) {
                        transarr.push(stockAccountObj.queueObj.dequeue());
                    }
                    transactionList = JSON.stringify(transarr, null, 2);
                    fs.writeFileSync('./JSON/sessiontransaction.json', transactionList);
                    console.log("check the recent transaction json to see transaction history of this session");
                }
            default:
                process.exit();
                break;
        }
    }

}
mainfunc();
