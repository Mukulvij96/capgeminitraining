import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms'
import { AppServiceService } from '../../services/appservices/app-service.service'
import { Router, RouterLink } from '@angular/router';
import { DataserviceService } from 'src/app/services/data services/dataservice.service';

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
  constructor(private appService: AppServiceService,private routing:Router,private data:DataserviceService) { }
  message:string;
  advanceColor:String="white";
  basicColor:String="white";
  ngOnInit() {
    this.data.currentMessage$.subscribe(message => {
      this.message = message
      this.checkSelectedService();
    })
    
  
  }
  checkSelectedService(){
    if(this.message=="advance")
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
      "service":this.message,
      "email": email,
      "password":confirmPassword ,
      
    }
    
this.appService.postRequest(user,'user/userSignUp').subscribe((data:any) => {
  
  if(data!=undefined){
    if(data.data.success){
      console.log("Registration Successful")
      this.routing.navigate(['/login'])
    }
  }
})
}
}
