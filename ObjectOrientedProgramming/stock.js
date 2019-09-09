class main {
    packageObj = require('fs');
    readlineObj = require('readline-sync');

    stockInfo() {
        var stockContents = this.packageObj.readFileSync('stockinfo.json');
        var option = this.readlineObj.question("Enter Y to display the stock information available with us ");
        if (option == 'Y') {
            this.showStockInfo(stockContents);
        }

    }
    totalStockValue() {
        var stockContents = this.packageObj.readFileSync('stockinfo.json');
        var stockString = new Array();
        var stockString = JSON.parse(stockContents);
        var option = this.readlineObj.question("Enter 1 to calculate the individual stock value or press 2 to escape if in wrong method ");
        if (option == '1') {
            var length = stockString.length;
            //console.log(length);
            for (var i = 0; i < length; i++) {
                var totalIndividualStockValue = stockString[i].NumberOfShares * (stockString[i].ValueOfEachShare);
                //console.log(totalIndividualStockValue);
                stockString[i]['TotalValueOfShare'] = totalIndividualStockValue;
                //console.log(stockString);  
                var stockContents = JSON.stringify(stockString, null, 2);
                this.packageObj.writeFile('stockinfo.json', stockContents, finished);
                function finished() {
                    return true;
                }
            }
            //console.log(stockContents);
            //this.showStockInfo(stockContents);
            this.totalValueOfAllShares(stockContents);


        }
        if (option == '2') {
            console.log("Enter the correct option or try again later ");
            this.totalStockValue();
        }
    }

    totalValueOfAllShares(stockContents) {
        var totalValue = 0;
        var stockInfoString = JSON.parse(stockContents);
        var length = stockInfoString.length;

        for (var i = 0; i < length; i++) {
            var totalValue = totalValue + stockInfoString[i].TotalValueOfShare;
        }
        //console.log(totalValue);
        stockInfoString.push(totalValue);
        var stockContents = JSON.stringify(stockInfoString, null, 2);
        //console.log(stockContents);
        this.packageObj.writeFile('stockinfo.json', stockContents, finished)
        function finished() {
            return true;
        }
        this.showStockInfo(stockContents);
    }
    showStockInfo(stockContents) {
        var stockInfoString = JSON.parse(stockContents, null, 2);
        console.log("------STOCK REPORT------");
        console.log(stockInfoString);
    }
    /*updateStockValue({ totalIndividualStockValue }) {       
        this.totalIndividualStockValue = totalIndividualStockValue;
        return this;
    }*/
}
var classObj = new main();
//classObj.stockInfo();
classObj.totalStockValue();