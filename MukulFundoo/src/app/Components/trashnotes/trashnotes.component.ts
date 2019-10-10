import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'src/app/dataservice.service';
import { NoteService } from 'src/app/app-service.service';
import { Notes } from '../models/noteModel'

@Component({
  selector: 'app-trashnotes',
  templateUrl: './trashnotes.component.html',
  styleUrls: ['./trashnotes.component.scss']
})
export class TrashnotesComponent implements OnInit {

  notes: Notes[]
  constructor(private data:DataserviceService,private noteService:NoteService) { }

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
}
