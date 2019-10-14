import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  adminData:any;
  constructor(private routing:Router) { }

  ngOnInit() {
    // $("#adminLogin").click(function(e){
    //   e.preventDefault();
    // })
  }

  adminLogin(){
    this.adminData={
      email:$("#email").val(),
      password:$("#pwd").val()
    }
    console.log("Data sent " ,this.adminData);

    $.ajax({
      url:"http://fundoonotes.incubation.bridgelabz.com/api/user/adminLogin",
      data:this.adminData,
      type:'POST',
      datatype:"json",
      success:(response)=>{
        sessionStorage.setItem('id',response.id);
        this.routing.navigate(['Dashboard'])
        console.log("Recieved Data ", response);
      }
    })
  }
}
