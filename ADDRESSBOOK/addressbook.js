
    class InputAddressBook
{
    constructor(firstName,lastName, address,city,state,zip,phoneNumber)
    {
        this.firstName=firstName;
        this.lastName=lastName;
        this.address=address;
        this.city=city;
        this.state=state;
        this.zip=zip;
        this.phoneNumber=phoneNumber;
        return this;
    }
}

class Add 
{
    readlineObj=require('readline-sync');
    inputAddressDetails()
    {
        var firstName=this.addFirstName();
        //console.log(firstName);
        var lastName=this.addLastName();
        var address=this.addAddress();
        var city=this.addCity();
        var state=this.addState();
        var zipCode=this.addZipCode();
        var phoneNumber=this.addPhoneNumber();
        var InputAddressBookObj=new InputAddressBook();
        InputAddressBookObj.firstName=firstName;
        InputAddressBookObj.lastName=lastName;
        InputAddressBookObj.address=address;
        InputAddressBookObj.city=city;
        InputAddressBookObj.state=state;
        InputAddressBookObj.zip=zipCode;
        InputAddressBookObj.phoneNumber=phoneNumber;
        return InputAddressBookObj;
    }
    addFirstName()
    {
        var firstName=this.readlineObj.question("Enter first name ");
        if(firstName==' ')
            this.addFirstName();
        else
            return firstName;
    }
    addLastName()
    {
        var lastName=this.readlineObj.question("Enter last Name if any .also add middle name here only ");
        if(lastName==' ')
            this.addLastName();
        else
            return lastName;
    }
    addAddress()
    {
        var address=this.readlineObj.question("Enter the address of the person ");
        if(address==' ')
        this.addAddress();
        else
        return address;
    }
    addCity()
    {
        var city=this.readlineObj.question("Enter the city of the person ");
        if(city==' ')
        this.addCity();
        else
        return city;
    }
    addState()
    {
        var state=this.readlineObj.question("Enter the state the person is living in ");
        if(state==' ')
        this.addState();
        else
        return state;
    }
    addZipCode()
    {
        var zipCode=this.readlineObj.question("Enter the zipcode of the city the person is living in ");
        if(zipCode==' ')
        this.addZipCode();
        else
        return zipCode;
    }
    addPhoneNumber()
    {
        var phoneNumber=this.readlineObj.question("Enter your phone number ");
        if(phoneNumber==' ')
        this.addPhoneNumber();
        else
        return phoneNumber;
    }

}
//var addObj=new Add();
//addObj.inputAddressDetails();

module.exports={ InputAddressBook , Add };