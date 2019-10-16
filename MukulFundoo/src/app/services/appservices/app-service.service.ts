import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment'
import { HttpHeaders } from '@angular/common/http'
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
  
getEncodedData(data){
  const formBody=[];
  for(const property in data){
  const encodedKey=encodeURIComponent(property);
  const encodedValue=encodeURIComponent(data[property]);
  formBody.push(encodedKey+'='+encodedValue);
  }
  return formBody.join ('&');
  }

  postRequest(data,options){
      let httpOptions={
      headers:new HttpHeaders({
      'Content-type':'application/x-www-form-urlencoded',
      'Authorization':sessionStorage.getItem('id')
      })
      }
    return this.http.post(environment.baseurl+'notes/'+options,this.getEncodedData(data),httpOptions)
  }
postJson(data,options){
  let httpOptions={
    headers:new HttpHeaders({
    'Content-type':'application/json',
    'Authorization':sessionStorage.getItem('id')
    })
    }
    console.log("In service",data)
  return this.http.post(environment.baseurl+'notes'+options,(data),httpOptions);
  
}
  getRequest(options){
    let httpOptions={
      headers:new HttpHeaders({
      'Content-type':'application/x-www-form-urlencoded',
      'Authorization':sessionStorage.getItem('id')
      })
      } 
    return this.http.get(environment.baseurl+'notes'+options,httpOptions);
  }
  
}

