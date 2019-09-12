var pathObj = require('fs');
var contentsOfTheUser = pathObj.readFileSync('username.txt', 'utf8');

//console.log(contentsOfTheUser);
var contentsOfJsonFile = pathObj.readFileSync('details.json');
var wordsOfJsonFile = JSON.parse(contentsOfJsonFile);
//console.log(wordsOfJsonFile);
var newContentsOfTheUser = ' ';
function regExp(contentsOfTheUser) {
    try
    {
        if(typeof contentsOfTheUser==' ') throw "The User text file is empty";
        if(typeof contentsOfJsonFile==' ') throw "The JSON file is empty";
        if(typeof wordsOfJsonFile==' ') throw "The JSON file was not converted properly";
    }
    catch(error)
    {
        console.log(error);
    }
    for (var i = 1; i <= 4; i++) {
        if (contentsOfTheUser.match(/<<name>>/g)) {
            //var name=' '+wordsOfJsonFile[0].Name;
            contentsOfTheUser = contentsOfTheUser.replace(/<<name>>/g, wordsOfJsonFile[0].Name);
            //console.log(newContentsOfTheUser);

        }
        if (contentsOfTheUser.match(/<<full Name/i)) {
            contentsOfTheUser = contentsOfTheUser.replace(/<<full Name>>/i, wordsOfJsonFile[0].FullName);
        }
        if (contentsOfTheUser.match(/xxxxxxxxxx/i)) {
            contentsOfTheUser = contentsOfTheUser.replace(/xxxxxxxxxx/i, wordsOfJsonFile[0].MobileNumber);
        }
        if (contentsOfTheUser.match("01/01/2016")) {
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();

            today = mm + '/' + dd + '/' + yyyy;
            contentsOfTheUser = contentsOfTheUser.replace("01/01/2016", today);
        }
        //console.log(newContentsOfTheUser);
    }
    newContentsOfTheUser = contentsOfTheUser;
    console.log(newContentsOfTheUser);
}
regExp(contentsOfTheUser);
