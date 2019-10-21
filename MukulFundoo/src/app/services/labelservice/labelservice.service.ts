import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment'
import { HttpHeaders } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class LabelserviceService {

  constructor(private http:HttpClient) { }

  postRequest(data,options){
    let httpOptions={
    headers:new HttpHeaders({
    'Content-type':'application/json',
    'Authorization':sessionStorage.getItem('id')
    })
    }

    console.log("In service",data)
  return this.http.post(environment.baseurl+options,(data),httpOptions);
}

getRequest(options){
  let httpOptions={
    headers:new HttpHeaders({
    'Content-type':'application/x-www-form-urlencoded',
    'Authorization':sessionStorage.getItem('id')
    })
    } 
  return this.http.get(environment.baseurl+options,httpOptions);
}

deleteRequest(data,options){
  
    return this.http.delete(environment.baseurl+options,(data))
}
}
