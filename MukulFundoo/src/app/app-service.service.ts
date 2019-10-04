import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../environments/environment'
 @Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  constructor(private http:HttpClient) { }
  postRequest(user,url:string){
    return this.http.post(environment.baseurl+url,user);
  }
}
export class NoteService{
  constructor(private http:HttpClient){}
  postRequest(user,url:String){
    return this.http.post(environment.baseurl+url,user);
  }
}
