import { Component, OnInit, Input } from '@angular/core';
import { DataserviceService } from 'src/app/services/data services/dataservice.service';
import { NoteService } from 'src/app/services/appservices/app-service.service';
import { Notes } from '../models/noteModel'
import { ActivatedRoute } from '@angular/router'
import { SnackbarService } from 'src/app/services/snackbarservices/snackbar.service';
@Component({
  selector: 'app-labelnotesdisplay',
  templateUrl: './labelnotesdisplay.component.html',
  styleUrls: ['./labelnotesdisplay.component.scss']
})
export class LabelnotesdisplayComponent implements OnInit {

  constructor(private dataService:DataserviceService,private noteService:NoteService,private route: ActivatedRoute,
    private snackbar:SnackbarService) { }
   labeledNotes:Notes[];
   
  //  unpinnedNotes:Notes[]
  //  notes:Notes[]
  message:String;
  labelname:any;
  isDeleted=false;
  component:string="labels"
  ngOnInit() {
    this.dataService.currentMessage$.subscribe(message => {
      this.message = message
      this.checkLabel()
      this.labelname = this.route.snapshot.paramMap.get('labelname');
      localStorage.setItem('labelname', this.labelname);
      this.displayNotesPerLabel()
    })
  }
  displayNotesPerLabel(){
    console.log(this.message)
    const data={
      "labelName":this.labelname
    }
    this.noteService.postJson(data,'/getNoteslistByLabel/'+this.message).subscribe((response:any) => {
      console.log("Notes per label:" , response.data.data)
      this.labeledNotes=response.data.data.reverse()
       this.snackbar.open("Dosplaying Notes for label" ,this.message)    
    })
    
  }
  checkLabel(){
    if(this.message != "")
    {
      return true;
    }
    
    else 
    return false;
  }
}
