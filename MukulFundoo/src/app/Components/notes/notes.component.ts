import { Component, OnInit, Input } from '@angular/core';
import { Notes } from '../models/noteModel'
import { NoteService } from 'src/app/services/appservices/app-service.service';
import { DataserviceService } from 'src/app/services/data services/dataservice.service';
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  constructor(private noteService:NoteService,private data:DataserviceService) { }

  ngOnInit() {
    this.getNotes()
this.data.currentMessage$.subscribe((message) => {
  if(message=="Note Added" || message=="Note Edited")
  this.getNotes()
})
  }
  notes:Notes[]
pinedNotes:Notes[]
  unpinedNotes:Notes[]
  component:string="notes";
  message:String;
  
getNotes(){
  this.noteService.getRequest('/getNotesList').subscribe((data:any) => {
    this.notes=data.data.data
    this.notes=this.notes.reverse();
    this.notes=this.trashDeleted(this.notes)
    this.setPinUnpinNotes(this.notes)
  })
   
}
trashDeleted(note){
  var notesData=note.filter(function(check) {
  return (check.isDeleted==false && check.isArchived==false)
  });
  return notesData;
}

setPinUnpinNotes(note){
this.pinedNotes=this.filterPined(note);
this.unpinedNotes=this.filterUnpined(note);
}

filterPined(noteData){
var newNote=noteData.filter(function(check){
  return(check.isPined==true)
})
return newNote;
}
filterUnpined(noteData){
  var newNote=noteData.filter(function(check){
    return(check.isPined==false)
  })
  return newNote;
  }

 
}

