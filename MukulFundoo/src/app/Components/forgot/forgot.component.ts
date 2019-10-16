import { Component, OnInit } from '@angular/core';
import { FormControl,Validators } from '@angular/forms'
import { AppServiceService } from '../../services/appservices/app-service.service'
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {
  constructor(private appService: AppServiceService,private routing:Router) { }

  ngOnInit() {
  }
  public email=new FormControl('',[Validators.required,Validators.email])
  
  getEmailInvalidMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' : '';
  }
  forgotUser(email)
  {
    let user={
      "email":email
    }

    this.appService.postRequest(user,'user/reset').subscribe((data:any) => {
      console.log("Verification Email Sent");
    }
    )
  }
}
