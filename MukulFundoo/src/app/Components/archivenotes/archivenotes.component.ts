import { Component, OnInit,Input } from '@angular/core';
import { NoteService } from 'src/app/services/appservices/app-service.service';
import { Notes } from '../models/noteModel';

@Component({
  selector: 'app-archivenotes',
  templateUrl: './archivenotes.component.html',
  styleUrls: ['./archivenotes.component.scss']
})
export class ArchivenotesComponent implements OnInit {
  
 
  notes:Notes[]
  constructor(private noteService:NoteService) { }

  ngOnInit() {
    this.displayNotes()
  }
  displayNotes(){
    this.noteService.getRequest('/getArchiveNotesList').subscribe((data: any) => {
      this.notes = data.data.data;
      console.log("My Array is",this.notes)
      var finalNotes=this.notes.filter(function(check){
        if(check.isArchived==true && check.isDeleted==false)
        return true;
      })
      this.notes=finalNotes.reverse();
      console.log("retrieved")
    })
}
unarchiveNote($event,id){
  const data = {
    "noteIdList": [id],
    "isArchived": false
  }
  console.log("emitted", data)
  this.noteService.postJson(data,'/archiveNotes').subscribe((data: any) => {
    console.log("Unarchived note", data)
    this.displayNotes();    
})
}
deleteNote($event,id){
  const data={
    "noteIdList":[id],
    "isArchived":false,
    "isDeleted":true
  }
  this.noteService.postJson(data,'/trashNotes').subscribe((data:any) => {
    console.log("Deleted Note", data)
    this.displayNotes()
   
  })
}
}