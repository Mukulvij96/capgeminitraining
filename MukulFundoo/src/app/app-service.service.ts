import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http:HttpClient) { }

  link='http://fundoonotes.incubation.bridgelabz.com/api/';

  postRequest(user,url:string){
    return this.http.post(this.link+url,user);
  }

}
