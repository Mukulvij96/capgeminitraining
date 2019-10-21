import { Component, OnInit, Inject, EventEmitter, Output, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NoteService } from 'src/app/services/appservices/app-service.service';
import { Notes } from '../models/noteModel';
import { DataserviceService } from 'src/app/services/data services/dataservice.service';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { DisplayComponent } from '../display/display.component'
import { NotefieldComponent } from '../notefield/notefield.component';
import { Labels } from '../models/labelModel'
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
   noteLabels:Labels[]
  constructor(private noteService: NoteService, private data: DataserviceService, private dialogRef: MatDialogRef<DisplayComponent>,
    @Inject(MAT_DIALOG_DATA) data1, ) {
    this.note = {
      description: data1.description,
      title: data1.title,
      noteId: data1.id,
      color: data1.color
    }
  }
  @Output() saveNoteEvent = new EventEmitter<boolean>();
  editable: boolean = false;

  ngOnInit() {
    this.data.currentMessage$.subscribe(message => this.message = message)
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
      noteId: this.note.noteId,
      color: this.note.color
    }

    console.log("Emitted data", data)
    this.dialogRef.close(this.note);

    this.noteService.postRequest(data, 'updateNotes').subscribe((data1: any) => {
      this.newMessage();
      console.log("added");
    })
  }
  setColor($event) {
    this.note.color = $event;
    const data = {
      color: $event,
      "noteIdList": [this.note.noteId]
    }
    this.noteService.postJson(data, '/changesColorNotes').subscribe((data: any) => {
      console.log("Color Updated")
    })
  }
  showLabels($event){
    const labelData={
      "noteIdList":[this.note.noteId],
      "lableId":[$event.id]
    }
    this.noteService.postJson(labelData,'/'+this.note.noteId+'/addLabelToNotes/'+$event.id+'/add').subscribe((data:any) => {
      console.log("Notes after label is added",data);
      this.updateNotes();
    })
  }
  newMessage() {
    this.data.changeMessage("Note Added");
  }
}
