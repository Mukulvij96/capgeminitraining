import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment'
import { HttpserviceService } from '../httpservice/httpservice.service'
@Injectable({
  providedIn: 'root'
})
export class ProductcartService {

  baseUrl=environment.baseurl;
  constructor(private http:HttpserviceService) { }

  placeOrder(data){
    return this.http.postJSON('productcarts/placeOrder',data);

  }
  getCartDetails(){
    return this.http.httpGetData('productcarts/myCart');
  }
  addToCart(data){
    return this.http.postJSON('productcarts/addToCart',data);
  }
}
