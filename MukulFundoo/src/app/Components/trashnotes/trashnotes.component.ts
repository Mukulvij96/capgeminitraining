import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'src/app/services/data services/dataservice.service';
import { NoteService } from 'src/app/services/appservices/app-service.service';
import { Notes } from '../models/noteModel'
import { SnackbarService } from 'src/app/services/snackbarservices/snackbar.service';

@Component({
  selector: 'app-trashnotes',
  templateUrl: './trashnotes.component.html',
  styleUrls: ['./trashnotes.component.scss']
})
export class TrashnotesComponent implements OnInit {

  notes: Notes[]
  constructor(private data:DataserviceService,private noteService:NoteService,private snackbar:SnackbarService) { }

  ngOnInit() {
    this.displayNotes()
  }

  displayNotes(){
    this.noteService.getRequest('/getTrashNotesList').subscribe((data: any) => {
      this.notes = data.data.data;
      console.log("My Array is",this.notes)
      this.notes.reverse()
      console.log("retrieved")
    })
  }

  deleteForever($event,id){
    const data={
      "noteIdList":[id]
    }
    this.noteService.postJson(data,'/deleteForeverNotes').subscribe((data:any) => {
      console.log("Deleted Forever");
      this.snackbar.open("Note Deleted Forever")
      this.displayNotes();
    })
  }
  retrieve($event,id){
    const data={
      "noteIdList":[id],
      "isDeleted":false
    }
    this.noteService.postJson(data,'/trashNotes').subscribe((data:any) => {
      console.log("Note Retrieved");
      this.snackbar.open("Note Retrieved")
      this.displayNotes();
    })
  }
}
