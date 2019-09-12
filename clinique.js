class doctor {
    //readlineObj=require('readline-sync');
    addDoctor({ name, ID, specialization }) {
        this.name = name;
        this.ID = ID;
        this.specialization = specialization;
        return this;
    }
}


class clinic {
    packObj = require('fs');
    readlineObj = require('readline-sync');

    updateDoctor() {
        var rawData = this.packObj.readFileSync('doctor.json');
        var doctorData = JSON.parse(rawData);
        var length = doctorData.length;
        //console.log(length);
        for (var i = (length - 1); i < 2; i++) {
            doctorData[i] = new doctor();
            var name = this.readlineObj.question("Enter name of the doctor ");
            var ID = this.readlineObj.question("Enter ID of the doctor ");
            var specialization = this.readlineObj.question("Enter specialization of the doctor ");
            doctorData[i].addDoctor({ name, ID, specialization });
        }
        var rawData = JSON.stringify(doctorData, null, 2);
        this.packObj.writeFile('doctor.json', rawData, finished)
        function finished() {
            return true;
        }
    }
    searchDoctorList(doctorData)
    {
        var doctorToBeSearched=this.readlineObj.question("Enter the name of the doctor to be searched for appointment");
        for(var i=0;i<(length-1);i++)
        {
        if(doctorToBeSearched===doctorData[i].name)
        {
            console.log("Check whether the doctor is available to see patients ");
        }
    }
}

}
var classObj = new clinic();
classObj.updateDoctor();
classObj.searchDoctorList(doctorData);

