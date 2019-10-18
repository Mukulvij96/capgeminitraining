import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataserviceService } from '../../services/data services/dataservice.service'
import { NoteService, AppServiceService } from '../../services/appservices/app-service.service'
import { Notes } from '../models/noteModel'
import { routing } from '../../app-routing.module'
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { MatDialog, MatDialogConfig } from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  notes: Notes[]
  searchText;
  
  constructor(private noteService: NoteService, private data: DataserviceService, private router: Router,
    private Dialog:MatDialog,private appService:AppServiceService) { }
  message: String;
  firstName:String=''
  lastName:String=''
  email:String=''
  ngOnInit() {
    this.router.navigate(['/display'])
    this.firstName=sessionStorage.getItem('firstName');
    this.lastName=sessionStorage.getItem('lastName');
    this.email=sessionStorage.getItem('email');
  }
  display: string = "";
  displayTrashNotes() {
    this.router.navigate(['/trash'])
  }
  displayAvailableNotes() {
    this.router.navigate(['/display'])
  }
  displayArchiveNotes() {
    this.router.navigate(['/archive'])
  }
  search(){
    this.searchText;
  }

  logout(){
    const user={
      "id":sessionStorage.getItem('id')
    }
  this.appService.postRequest(user ,'user/logout').subscribe((data:any) => {
    console.log("logout");
    this.router.navigate(['/login'])
  })
  }
  registerAccount(){
  this.router.navigate(['/login'])
}

}
