import { Component, OnInit,Input } from '@angular/core';
import { NoteService } from 'src/app/services/appservices/app-service.service';
import { Notes } from '../models/noteModel';
import { DataserviceService } from 'src/app/services/data services/dataservice.service';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-archivenotes',
  templateUrl: './archivenotes.component.html',
  styleUrls: ['./archivenotes.component.scss']
})
export class ArchivenotesComponent implements OnInit {
  
 
  archivedNotes:Notes[]
  message:String=''
  constructor(private noteService:NoteService,private data:DataserviceService) { }

  ngOnInit() {
    this.data.currentMessage$.subscribe( message => {
      this.message=message;
      this.checkArchive()
    })
    this.displayNotes()
   
  }
  displayNotes(){
    this.noteService.getRequest('/getArchiveNotesList').subscribe((data: any) => {
      this.archivedNotes = data.data.data;
      var finalNotes=this.archivedNotes.filter(function(check){
        if(check.isArchived==true && check.isDeleted==false)
        return true;
      })
      this.archivedNotes=finalNotes.reverse();
      console.log("Archived Notes" ,this.archivedNotes)
    })
}
// unarchiveNote($event,id){
//   const data = {
//     "noteIdList": [id],
//     "isArchived": false
//   }
//   console.log("emitted", data)
//   this.noteService.postJson(data,'/archiveNotes').subscribe((data: any) => {
//     console.log("Unarchived note", data)
//     this.displayNotes();    
// })
// }
// deleteNote($event,id){
//   const data={
//     "noteIdList":[id],
//     "isArchived":false,
//     "isDeleted":true
//   }
//   this.noteService.postJson(data,'/trashNotes').subscribe((data:any) => {
//     console.log("Deleted Note", data)
//     this.displayNotes()
   
//   })
// }

checkArchive(){
if(this.message=="archived"){
  this.displayNotes();
}
}
}