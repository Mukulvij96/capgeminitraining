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
  component:string="archive"  
  message:String=''
  constructor(private noteService:NoteService,private data:DataserviceService) { }

  ngOnInit() {
   
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
      return this.archivedNotes;
})
  }
 


}