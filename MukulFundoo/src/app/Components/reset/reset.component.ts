import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms'
import { AppServiceService } from '../../app-service.service'
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {

  constructor(private appService: AppServiceService,private routing:Router) { }

  public password = new FormControl('', [Validators.required, Validators.minLength(8)])
  public confirmPassword = new FormControl('', [Validators.required, Validators.minLength(8)])
  ngOnInit() {
  }
  getPasswordInvalidMessage() {
    if (this.password.hasError("required")) {
      return ("Password is required");
    }
    if (this.password.hasError("minLength")) {
      return ("Minimum Length of 8 ")
    }
  }
  
}
