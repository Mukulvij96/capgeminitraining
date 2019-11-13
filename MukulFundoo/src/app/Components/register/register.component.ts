import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms'
import { AppServiceService } from '../../services/appservices/app-service.service'
import { Router, RouterLink } from '@angular/router';
import { DataserviceService } from 'src/app/services/data services/dataservice.service';
import { SnackbarService } from 'src/app/services/snackbarservices/snackbar.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  hide=true;
  // public hide: Boolean = true;
  
  public firstName = new FormControl('', [Validators.required]);
  public lastName = new FormControl('', [Validators.required]);
  public email = new FormControl('', [Validators.required, Validators.email]);
  public password = new FormControl('', [Validators.required, Validators.minLength(8)])
  public confirmPassword = new FormControl('', [Validators.required, Validators.minLength(8)])
  constructor(private snackbar:SnackbarService,private appService: AppServiceService,private routing:Router,private data:DataserviceService) { }
  message:string;
  advanceColor:String="white";
  basicColor:String="white";

  generatedCartId:any;
  typeOfService:any
  ngOnInit() {
   this.data.currentService.subscribe((typeOfService) => {
     this.typeOfService = typeOfService;
     console.log("service type",this.typeOfService)
     if(this.typeOfService == '')
     this.routing.navigate(['/cart'])
     else
     this.checkSelectedService()
   })
    
   this.data.cartId.subscribe((generatedCartId) => {
     this.generatedCartId = generatedCartId;
     console.log("cartId",this.generatedCartId)
   })
  
  }
  checkSelectedService(){
    if(this.typeOfService=="advance")
      this.advanceColor="gold"
      else{
        this.basicColor="gold"
      }
  }


  getEmailInvalidMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' : '';
  }
  getPasswordInvalidMessage() {
    if (this.password.hasError("required")) {
      return ("Password is required");
    }
    if (this.password.hasError("minLength")) {
      return ("Minimum Length of 8 ")
    }
  }
  getMatchedPasswordsMessage() {
    
  }
validate(fname,lname,email,pass,password,confirmPassword){
  if(fname || lname || email || pass || (password!=confirmPassword))
  return true
  else
  return false
}
  registerUser(firstName,lastName,email,confirmPassword){
    // console.log(this.message)
    let user=
    {
      "firstName":firstName,
      "lastName": lastName,
      "service":this.typeOfService,
      "email": email,
      "password":confirmPassword ,
      "cartId":this.generatedCartId
      
    }
    localStorage.setItem('cartId',this.generatedCartId)
    console.log("Register Object",user)
this.appService.postRequest(user,'user/userSignUp').subscribe((data:any) => {
  console.log("Registered user Details",data)
  if(data!=undefined){
    if(data.data.success){
      this.snackbar.open('User Registered Successfully')
      this.routing.navigate(['/login'])
    }
  }
})
}
}
