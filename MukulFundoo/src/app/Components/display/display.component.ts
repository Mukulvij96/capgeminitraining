import { Component, OnInit, Output, Input } from '@angular/core';
import { NoteService } from '../../app-service.service'
import { Notes } from '../models/noteModel'
import { DataserviceService } from 'src/app/dataservice.service';
import { MatDialog,MatDialogConfig } from '@angular/material';
import { DialogboxComponent } from '../dialogbox/dialogbox.component';
import { PatternValidator } from '@angular/forms';
import { calcPossibleSecurityContexts } from '@angular/compiler/src/template_parser/binding_parser';
// import { NotefieldComponent } from '../notefield/notefield.component';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  constructor(private noteService: NoteService,private data:DataserviceService,private dialog:MatDialog) { }
  message:String=""
  notes: Notes[]
  @Input() noteId: Notes

  ngOnInit() {
    this.data.currentMessage$.subscribe(message => {this.checkNotes()})   
    this.displayNotes()
  }
  setColor($event, id) {
    const data = {
      "noteIdList": [id],
      "color": $event
    }
    this.noteService.postJson(data, '/changesColorNotes').subscribe((data: any) => {
      console.log("Color Updated")
      this.displayNotes();
    })
  }

  displayNotes(){
    this.noteService.getRequest('/getNotesList').subscribe((data: any) => {
      this.notes = data.data.data;
      console.log("My Array is",this.notes)
      
      var finalNotes=this.notes.filter(function(check) {
        if(check.isDeleted== false && check.isArchived==false)
        return true;
      })
      this.notes=finalNotes.reverse()
      console.log("retrieved")
    })
  }
  display($event){
    this.displayNotes()
  }
  displayArch($event){
    this.displayNotes()
  }
  checkNotes(){
    if(this.message=="Note Added")
    this.displayNotes();
    this.message=""
  }
private dialogRef;
hover:boolean=false;
  openDialog(value){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      title:value.title,
      description:value.description,
      recordId:value.id,
      color:value.color
    }
    console.log(dialogConfig.data);
    this.dialogRef=this.dialog.open(DialogboxComponent, dialogConfig)

    this.dialogRef.afterClosed().subscribe(
      data =>{ console.log("Dialog output:", data)
      this.displayNotes();
    });
  }
}

