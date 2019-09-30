import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms'
import { AppServiceService } from '../../app-service.service'
import { Router, RouterLink } from '@angular/router';

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
  constructor(private appService: AppServiceService,private routing:Router) { }

  ngOnInit() {
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
  getMatchedPasswordsMessage(password, confirmPassword) {
    if (password != confirmPassword)
      return ("Password doesn't matches")
    else
      return ("Password Matches")
  }

  registerUser(firstName,lastName,email,confirmPassword){
    let user=
    {
      "firstName":firstName,
      "lastName": lastName,
      "service":"basic",
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
