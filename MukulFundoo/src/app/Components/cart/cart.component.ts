import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from 'src/app/services/data services/dataservice.service';
import { ProductcartService } from 'src/app/services/cartservice/productcart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private routing:Router,private dataService:DataserviceService,private productService:ProductcartService) { }
message:string
  ngOnInit() {
    this.dataService.currentMessage$.subscribe(message => this.message = message)
  }

  productId:any;
  generatedCartId:any;
  serviceBuy:any
  signIn(){
    this.routing.navigate(['/login'])
  }
 
addServiceToCart(service){
  if(service=='advance'){
    this.productId="5bfe361553c3df0040d852a6";

    let data={
      productId:this.productId
    }
    this.productService.addToCart(data).subscribe((response:any) => {
      console.log("cart service",response)
      this.generatedCartId=response.data.details.id
      
  
      this.dataService.changeTypeOfService(service);
      this.dataService.sendCartId(this.generatedCartId)
      this.routing.navigate(['/register'])
    })
  }
  else if(service=='basic'){
    this.productId="5bfe362b53c3df0040d852a7";

    let data={
      productId:this.productId
    }
    this.productService.addToCart(data).subscribe((response:any) => {
      console.log("cart service",response)
      this.generatedCartId=response.data.details.id

      
      this.dataService.changeTypeOfService(service);
      this.dataService.sendCartId(this.generatedCartId)
      this.routing.navigate(['/register'])
    })
  }

  

}

}
