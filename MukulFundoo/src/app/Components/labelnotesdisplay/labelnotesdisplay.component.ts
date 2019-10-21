import { Component, OnInit, Input } from '@angular/core';
import { DataserviceService } from 'src/app/services/data services/dataservice.service';
import { NoteService } from 'src/app/services/appservices/app-service.service';
import { Notes } from '../models/noteModel'
@Component({
  selector: 'app-labelnotesdisplay',
  templateUrl: './labelnotesdisplay.component.html',
  styleUrls: ['./labelnotesdisplay.component.scss']
})
export class LabelnotesdisplayComponent implements OnInit {

  constructor(private dataService:DataserviceService,private noteService:NoteService) { }
  @Input() pinnedNotes:Notes[]
  @Input() unpinnedNotes:Notes[]
  notes:Notes[]
  message:String;
  ngOnInit() {
    this.dataService.currentMessage$.subscribe(message => {
      this.message = message
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
      this.pinnedNotes=response.data.data
      var notes=this.pinnedNotes.filter(function (check) {
        if(check.isPined==true){
          return true;
        }
        this.pinnedNotes=notes.reverse();
         console.log("Notes Are") 
      })
      
    })
    
  }
}
