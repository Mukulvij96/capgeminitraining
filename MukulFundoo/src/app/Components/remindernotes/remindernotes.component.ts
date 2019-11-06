import { Component, OnInit } from '@angular/core';
import { Notes } from '../models/noteModel'
import { NotesService } from 'src/app/services/noteservices/note-service.service';
@Component({
  selector: 'app-remindernotes',
  templateUrl: './remindernotes.component.html',
  styleUrls: ['./remindernotes.component.scss']
})
export class RemindernotesComponent implements OnInit {

  component:string="reminder"
  notes:Notes[]
  constructor(private noteService:NotesService) { }

  ngOnInit() {
    this.getReminderNotes()
  }

  getReminderNotes(){
    this.noteService.getReminder().subscribe((data:any) => {
      console.log("Reminder" , data)
      this.notes=data.data.data.reverse()
    })
  }
}
