import { Component, OnInit, Input } from '@angular/core';
import { DataserviceService } from 'src/app/services/data services/dataservice.service';
import { NoteService } from 'src/app/services/appservices/app-service.service';
import { Notes } from '../models/noteModel'
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-labelnotesdisplay',
  templateUrl: './labelnotesdisplay.component.html',
  styleUrls: ['./labelnotesdisplay.component.scss']
})
export class LabelnotesdisplayComponent implements OnInit {

  constructor(private dataService:DataserviceService,private noteService:NoteService,private route: ActivatedRoute) { }
   pinnedNotes:Notes[];
   unpinnedNotes:Notes[];
  //  unpinnedNotes:Notes[]
  //  notes:Notes[]
  message:String;
  labelname:any;
  isDeleted=false;
  ngOnInit() {
    this.dataService.currentMessage$.subscribe(message => {
      this.message = message
      this.checkLabel()
      this.labelname = this.route.snapshot.paramMap.get('labelname');
      sessionStorage.setItem('labelname', this.labelname);
      this.displayNotesPerLabel()
    })
  }
  displayNotesPerLabel(){
    console.log(this.message)
    const data={
      "labelName":this.message
    }
    this.noteService.postJson(data,'/getNoteslistByLabel/'+this.message).subscribe((response:any) => {
      console.log("Notes per label:" , response.data.data)
      this.pinnedNotes=response.data.data.reverse()
      console.log("pinnedNotes",this.pinnedNotes)
      
    })
    
  }
  checkLabel(){

  }
}
