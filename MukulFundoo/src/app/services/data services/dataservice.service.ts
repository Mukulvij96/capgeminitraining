import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  private messageSource = new BehaviorSubject('default message');
  currentMessage$ = this.messageSource.asObservable();

  private typeOfServiceSource = new BehaviorSubject('');
  currentService = this.typeOfServiceSource.asObservable();

  private cartIdSource = new BehaviorSubject('');
  cartId = this.cartIdSource.asObservable();

  constructor() { }

  changeMessage(message:string){
    this.messageSource.next(message); 
  }

  changeTypeOfService(message: string){
    this.typeOfServiceSource.next(message)
  }

  sendCartId(message: string){
    this.cartIdSource.next(message)
  }


}
