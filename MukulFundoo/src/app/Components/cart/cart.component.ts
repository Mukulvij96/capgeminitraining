import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from 'src/app/services/data services/dataservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private routing:Router,private data:DataserviceService) { }
message:string
  ngOnInit() {
    this.data.currentMessage$.subscribe(message => this.message = message)
  }

  signIn(){
    this.routing.navigate(['/login'])
  }
service:string=''
  advanceService(){
    this.service="advance"
    this.data.changeMessage(this.service)
    this.routing.navigate(['/register'])
  }
  basicService(){
    this.service="basic"
    this.data.changeMessage(this.service)
    this.routing.navigate(['/register'])
  }
}
