import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataserviceService } from '../../services/data services/dataservice.service'
import { NoteService, AppServiceService } from '../../services/appservices/app-service.service'
import { Notes } from '../models/noteModel'
import { routing } from '../../app-routing.module'
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { MatDialog, MatDialogConfig } from '@angular/material';
import { UploadprofilepicComponent } from '../uploadprofilepic/uploadprofilepic.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  notes: Notes[]
  searchText:any;
  pic:any;
  baseUrlPic=environment.baseUrlPic;
  url:any
  constructor(private noteService: NoteService, private dataService: DataserviceService, private router: Router,
    private dialog:MatDialog,private appService:AppServiceService) { }
  message: String;
  firstName:String=''
  lastName:String=''
  email:String=''
  ngOnInit() {
    this.router.navigate(['/display'])
    this.firstName=sessionStorage.getItem('firstName');
    this.lastName=sessionStorage.getItem('lastName');
    this.email=sessionStorage.getItem('email');
    this.getPic()
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
  sessionStorage.removeItem('id')
this.router.navigate(['/login'])
  }
//   registerAccount(){
//   this.router.navigate(['/login'])
// }

openDialog(){
  const dialogRef=this.dialog.open(UploadprofilepicComponent, {
    
  })
  console.log("clicking")
}

getPic(){
  this.pic=localStorage.getItem('pic');
  this.url=this.baseUrlPic+this.pic;
  console.log('image',this.url);
  this.router.navigate(['/display'])

}
onKeyUp(event){
  this.searchText=event.target.value;
  this.dataService.changeMessage(this.searchText);
}

}
