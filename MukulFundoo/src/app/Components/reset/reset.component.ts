import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms'
import { AppServiceService } from '../../services/appservices/app-service.service'
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss'],
  preserveWhitespaces: false 
})
export class ResetComponent implements OnInit {

  hide=true;
  constructor(private appService: AppServiceService,private routing:Router) { }

  public password = new FormControl('', [Validators.required, Validators.minLength(8)])
  public confirmPassword = new FormControl('', [Validators.required, Validators.minLength(8)])
  ngOnInit() {
  }
  getPasswordInvalidMessage() {
    if (this.password.hasError("required") || this.confirmPassword.hasError("required")) {
      return ("Password is required");
    }
    if (this.password.hasError("minLength") || this.confirmPassword.hasError("required")) {
      return ("Minimum Length of 8");
    }
  }
  
}
