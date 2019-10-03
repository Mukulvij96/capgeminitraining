import { Component, OnInit } from '@angular/core';
import { FormControl,Validators} from '@angular/forms'
import { AppServiceService } from '../../app-service.service'
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './component.login.html',
  styleUrls: ['./component.login.scss']
})
export class LoginComponent implements OnInit {
  title = 'Fundoo Notes';
  constructor(private appService: AppServiceService,private routing:Router){}
  ngOnInit(){

  }

  hide=true;
  public email=new FormControl('',[Validators.required,Validators.email]);
  public password=new FormControl('',[Validators.required,Validators.minLength(8)]);
  // public ConfirmPassword=new FormControl('',[Validators.required,Validators.minLength(8)]);
 
  getEmailInvalidMessage(){
    if(this.email.hasError("required")){
      return("Email is required");
    }
    if(this.email.hasError("email")){
      return("Invalid Email")
    }
  }

  getPasswordInvalidMessage(){
    if(this.password.hasError("required")){
      return("Password is required");
    }
    if(this.password.hasError("minLength")){
      return("Minimum Length of 8 ")
    }
  }
  validate(email,password){
if(email|| password)
return true;
else
return false;
  }
  loginUser(email,password){
    let user={
      "email":email,
      "password":password
    }
  
 this.appService.postRequest(user,'user/login').subscribe ((data:any) => {
  //  localStorage.getItem('id','data.id');

      console.log("Login Successful")
      // this.routing.navigate(['/Dashboard'])
  
 })

 }
 
  }

