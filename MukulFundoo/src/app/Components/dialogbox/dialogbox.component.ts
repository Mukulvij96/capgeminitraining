import { Component, OnInit, Inject, EventEmitter, Output, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NoteService } from 'src/app/services/appservices/app-service.service';
import { Notes } from '../models/noteModel';
import { DataserviceService } from 'src/app/services/data services/dataservice.service';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { DisplayComponent } from '../display/display.component'
import { NotefieldComponent } from '../notefield/notefield.component';
import { Labels } from '../models/labelModel'
import { RemindernotesComponent } from '../remindernotes/remindernotes.component';
import { SnackbarService } from 'src/app/services/snackbarservices/snackbar.service';
@Component({
  selector: 'app-dialogbox',
  templateUrl: './dialogbox.component.html',
  styleUrls: ['./dialogbox.component.scss']
})
export class DialogboxComponent implements OnInit {
  note: Notes;
  public title = new FormControl('');
  public description = new FormControl('');
  message: String = ""
  //  noteLabels:Labels[]
  constructor(private noteService: NoteService, private data: DataserviceService, private dialogRef: MatDialogRef<DisplayComponent>,
    @Inject(MAT_DIALOG_DATA) data1,private snackbar:SnackbarService ) {
    this.note = {
      description: data1.description,
      title: data1.title,
      id: data1.id,
      color: data1.color,
      questionAndAnswerNotes:data1.questionAndAnswerNotes,
      noteLabels:data1.noteLabels,
      reminder:data1.reminder,
      collaborators:data1.collaborators
    }
  }
  @Output() saveNoteEvent = new EventEmitter<boolean>();
  editable: boolean = false;

  ngOnInit() {
    console.log("ss",this.note)
    this.data.currentMessage$.subscribe(message => {
      this.message = message
      this.checkMessage()
    })
  }
  newTitle: String = ""
  newDescription: String = ""
  updateNotes() {
    console.log("edited value", this.title.value)
    if (this.title.value == "" && this.description.value == "") {
      this.newTitle = this.note.title;
      this.newDescription = this.note.description;
      // console.log("first check")
    }
    if (this.title.value == "" && this.description.value != "") {
      this.newTitle = this.note.title;
      this.newDescription = this.description.value;
      // console.log("second check")
    }
    if (this.title.value != "" && this.description.value == "") {
      this.newTitle = this.title.value;
      this.newDescription = this.note.description;
      // console.log("third check")
    }
    if (this.title.value != "" && this.description.value != "")
     {
      this.newTitle = this.title.value;
      this.newDescription = this.description.value;
      // console.log("fourth check")
    }

    const data = {
      title: this.newTitle,
      description: this.newDescription,
      noteId: this.note.id,
      color: this.note.color,
      reminder:this.note.reminder,
      noteLabels:this.note.noteLabels,
      collaborators:this.note.collaborators
    }

    console.log("Emitted data", data)
   

    this.noteService.postRequest(data, 'updateNotes').subscribe((data1: any) => {
      this.newMessage();
      console.log("added");
       this.dialogRef.close(this.note);
    })
  }
  setColor($event) {
    this.note.color = $event;
    const data = {
      color: $event,
      "noteIdList": [this.note.id]
    }
    this.noteService.postJson(data, '/changesColorNotes').subscribe((data: any) => {
      console.log("Color Updated")
    })
  }
  
  newMessage() {
    this.data.changeMessage("Note Added");
  }
  checkMessage(){
    if(this.message == "Label Added"){
      return true
    }
  }

  setReminder(reminderValue){
    
    this.note.reminder=reminderValue
   const data={
     "noteIdList":[this.note.id],
     "reminder":reminderValue
   }
   this.noteService.postJson(data,'/addUpdateReminderNotes').subscribe((data:any)=>{
    this.snackbar.open("Reminder Set")

  })
}
noteLabel:Labels[]
showLabels($event){
  this.noteLabel=$event
  const labelData = {
    "noteId": [this.note.id],
    "lableId": [$event.id]
  }

  this.noteService.postJson(labelData, '/' + this.note.id + '/addLabelToNotes/' + $event.id + '/add').subscribe((data: any) => {
    console.log("Notes after label is added", data);

  })
}
removeLabel(labelId){
  const labelData = {
    "noteId": [this.note.id],
    "lableId": [labelId]
  }
  console.log("remove", labelData);
  this.noteService.postJson(labelData, '/' + this.note.id + '/addLabelToNotes/' + labelId + '/remove').subscribe((data: any) => {
    console.log("Notes after label is removed", data);
})
}
}
