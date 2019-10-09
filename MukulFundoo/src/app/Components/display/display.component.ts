import { Component, OnInit, Output, Input } from '@angular/core';
import { NoteService } from '../../app-service.service'
import { Notes } from '../models/noteModel'
// import { NotefieldComponent } from '../notefield/notefield.component';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  constructor(private noteService: NoteService) { }

  notes: Notes[]
  @Input() noteId: Notes

  ngOnInit() {
      this.displayNotes();
    
  }
  setColor($event, id) {
    const data = {
      "noteIdList": [id],
      "color": $event
    }
    this.noteService.postJson(data, '/changesColorNotes').subscribe((data: any) => {
      console.log("Color Updated")
      this.displayNotes()
    })
  }

  displayNotes(){
    this.noteService.getRequest('/getNotesList').subscribe((data: any) => {
      this.notes = data.data.data;
      console.log("My Array is",this.notes)
      
      var finalNotes=this.notes.filter(function(check) {
        return check.isDeleted== false
      })
      this.notes=finalNotes.reverse()
      console.log("retrieved")
    })
  }
  display($event){
    this.displayNotes()
  }
}

