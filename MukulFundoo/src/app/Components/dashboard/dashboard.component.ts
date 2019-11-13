import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataserviceService } from '../../services/data services/dataservice.service'
import { NoteService, AppServiceService } from '../../services/appservices/app-service.service'
import { Notes } from '../models/noteModel'
import { Router } from '@angular/router';;
import { MatDialog, MatDialogConfig } from '@angular/material';
import { UploadprofilepicComponent } from '../uploadprofilepic/uploadprofilepic.component';
import { environment } from 'src/environments/environment';
import { LabelserviceService } from 'src/app/services/labelservice/labelservice.service';
import { Labels } from '../models/labelModel';
import { LabeldialogboxComponent } from '../labeldialogbox/labeldialogbox.component';
import { routing } from 'src/app/app-routing.module';

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
    private dialog:MatDialog,private appService:AppServiceService,private labelService:LabelserviceService) { }
  message: String;
  firstName:String=''
  lastName:String=''
  email:String=''
  ngOnInit() {
    
    console.log("On Dashboard")
    this.firstName=sessionStorage.getItem('firstName');
    this.lastName=sessionStorage.getItem('lastName');
    this.email=sessionStorage.getItem('email');
    this.getPic()
    this.getAllLabels();
    this.dataService.currentMessage$.subscribe(message => this.message = message)
  }
  display: string = "";
  displayTrashNotes() {
    this.router.navigate(['/trash'])
  }
  displayAvailableNotes() {
    this.router.navigate(['/notes'])
  }
  displayArchiveNotes() {
    this.router.navigate(['/archive'])
  }
  search(){
    this.searchText;
  }
  displayReminderNotes(){
    this.router.navigate(['/reminder'])
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
labelList:Labels[];
getAllLabels(){
  this.labelService.getRequest('noteLabels/getNoteLabelList').subscribe((data:any) => {
    this.labelList=data.data.details;
    this.labelList=this.labelList.reverse();
  })
}
private dialogRef
editLabels(){
  const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    console.log("Dialog box opened")
    this.dialogRef = this.dialog.open(LabeldialogboxComponent, dialogConfig)
}

showLabelsNotes(label){
this.newMessage(label)

}
newMessage(labelName){
  this.dataService.changeMessage(labelName);
}

view:string=""
changeView(){
this.view="list"
  this.dataService.changeMessage(this.view)
}
changeBack(){
  this.view="grid"
  this.dataService.changeMessage(this.view)
}
show:boolean=true;
changeIcon(){
  this.show = !this.show
}

full:boolean=false;
extendSearchBar(){
  this.full = !this.full
}

takeMeToCart(){
 this.router.navigate(['/MyCart'])
}
}
