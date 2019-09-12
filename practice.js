const mukul = {
    Name:"Mukul Vij",
    Degree:"Bachelor in Engineering",
    Company:"Capgemini",
    Salary:"50000",
    showDetails(){
        if(this.Salary<60000)
        {
            this.Salary=75000;
        console.log("The salary after increasing is : " +this.Salary);
        }
        else
        {
            console.log("The salary remains unchanged");
        }
    }
    
};
const employee=Object.create(mukul);
const keys=Object.keys(mukul);
employee.Degree="Master in Engineering";
employee.Salary="59000";
//console.log(employee.showDetails());
//console.log(mukul);
employee.showDetails();
console.log(keys);