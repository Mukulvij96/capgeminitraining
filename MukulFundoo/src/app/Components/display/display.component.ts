import { Component, OnInit, Output, Input, ɵConsole, EventEmitter } from '@angular/core';
import { NoteService } from '../../services/appservices/app-service.service'
import { Notes } from '../models/noteModel'
import { DataserviceService } from 'src/app/services/data services/dataservice.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DialogboxComponent } from '../dialogbox/dialogbox.component';
import { Labels } from '../models/labelModel';
import { SnackbarService } from 'src/app/services/snackbarservices/snackbar.service';
// import { NotefieldComponent } from '../notefield/notefield.component';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  constructor(private noteService: NoteService, private data: DataserviceService, private dialog: MatDialog, private snackbar: SnackbarService) { }
  message: String = ""

  reminders:any;
  hoverLabel: any
  hoverDiv:any;
  labels: Labels[]
  noteLabels: Labels[]
  @Input() noteId: Notes
  @Input() searchBox: any;
  @Input() pinedNotes: Notes[]
  @Input() unpinedNotes: Notes[]
  @Input() component: string
  @Input() searchedNotes: Notes[];
  ngOnInit() {
    this.data.currentMessage$.subscribe(message => {
      this.message = message;
      console.log("Message recieved ", message)
      this.checkNotes();
    })
    this.displayNotes();
    this.displayPinnedNotes()
  }
  setColor($event, id) {
    const data = {
      "noteIdList": [id],
      "color": $event
    }
    this.noteService.postJson(data, '/changesColorNotes').subscribe((data: any) => {
      console.log("Color Updated")
      this.displayNotes();
      this.displayPinnedNotes()
    })
  }

  displayNotes() {
    this.noteService.getRequest('/getNotesList').subscribe((data: any) => {
      this.unpinedNotes = data.data.data;

      var finalNotes = this.unpinedNotes.filter(function (check) {
        if (check.isDeleted == false && check.isArchived == false && check.isPined == false)
          return true;
      })
      this.unpinedNotes = finalNotes.reverse()
      // console.log("retrieved")
    })
  }
  displayPinnedNotes() {
    this.noteService.getRequest('/getNotesList').subscribe((data: any) => {
      this.pinedNotes = data.data.data;

      var finalPinnedNotes = this.pinedNotes.filter(function (check) {
        if (check.isDeleted == false && check.isArchived == false && check.isPined == true)
          return true;
      })
      this.pinedNotes = finalPinnedNotes.reverse()

    })
  }
  displayDeleted($event) {
    this.displayNotes();
    this.displayPinnedNotes()
  }
  displayArch($event) {
    this.displayNotes()
    this.displayPinnedNotes()
  }

  checkNotes() {
    console.log(this.message);
    if (this.message == "Note Added")
      this.displayNotes();
    this.displayPinnedNotes()
    this.message = ""
  }
  private dialogRef;
  // hover:boolean=false;
  openDialog(value, noteLabels) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      title: value.title,
      description: value.description,
      id: value.id,
      color: value.color,
    }
    console.log(dialogConfig.data);
    this.dialogRef = this.dialog.open(DialogboxComponent, dialogConfig)

    this.dialogRef.afterClosed().subscribe(
      data => {
        console.log("Dialog output:", data)
        this.displayNotes();
        this.displayPinnedNotes()
      });
  }
  hoverOnLabel(label){
    //console.log(label)
      this.hoverLabel=label.id;
  }
  hoverOutLabel(){
    this.hoverLabel="";
  }
  labelHoverCheck(label,value){
      if(this.hoverLabel==label.id && this.hoverDiv.noteid==value.id)
        return true;
        else
        return false;
  }

  showLabel($event, id) {
    const labelData = {
      "noteId": [id],
      "lableId": [$event.id]
    }
    this.noteService.postJson(labelData, '/' + id + '/addLabelToNotes/' + $event.id + '/add').subscribe((data: any) => {
      console.log("Notes after label is added", data);

    })
    this.displayNotes()
    this.displayPinnedNotes()
  }

  removeLabel(id, labelId) {

    const labelData = {
      "noteId": [id],
      "lableId": [labelId]
    }
    console.log("remove", labelData);
    this.noteService.postJson(labelData, '/' + id + '/addLabelToNotes/' + labelId + '/remove').subscribe((data: any) => {
      console.log("Notes after label is removed", data);
    })
    this.displayNotes();
    this.displayPinnedNotes();
  }

  pinNotes(id) {
    const data = {
      "isPined": true,
      "noteIdList": [id]
    }
    this.noteService.postJson(data, '/pinUnpinNotes').subscribe((response: any) => {
      console.log("Unpinned is Pinned")
    })
    this.displayNotes()
    this.displayPinnedNotes()
  }
  unpinNotes(id) {
    const data = {
      "isPined": false,
      "noteIdList": [id]
    }
    this.noteService.postJson(data, '/pinUnpinNotes').subscribe((response: any) => {
      console.log("Pinned is Unpinned");
    })
    this.displayNotes();
    this.displayPinnedNotes()
  }
  componentNotesOrlabels() {
    //console.log(this.component)
    if (this.component == "notes") {

      return true
    }

    else return false;
  }

  componentSearch() {
    //console.log("inside search",this.component,this.searchedNotes)
    if (this.component == "search" || this.component == "archived") {
      return true
    }
    else return false;
  }

  // removeReminder(note) {
  
  //   this.noteService.deleteReminder(
  //     {
  //       "noteIdList": [note.id]
  //     })
  //     .subscribe(
  //       (data) => {
  //         this.snackbar.open('Reminder Deleted')
  //         this.displayNotes();
  //       },
  //       error => {
  //         this.snackbar.open('Error deleting reminder', 'Retry')
  //       })
  // }
}





