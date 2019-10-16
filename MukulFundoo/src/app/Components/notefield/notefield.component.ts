import { Component, OnInit, Output, EventEmitter, ViewContainerRef, Input, ClassProvider } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Notes } from '../models/noteModel';
import { NoteService } from '../../services/appservices/app-service.service';
import { ColorPickerService, Cmyk } from 'ngx-color-picker';
import { DataserviceService } from 'src/app/services/data services/dataservice.service';
import { ShowHideDirective } from '@angular/flex-layout';


@Component({
  selector: 'app-notefield',
  templateUrl: './notefield.component.html',
  styleUrls: ['./notefield.component.scss']
})
export class NotefieldComponent implements OnInit {


  note: Notes;
  @Input() noteId: Notes
  public description = new FormControl('');
  public title = new FormControl('');
  color: String = ""
  close: Boolean;
  showTitle:Boolean=false;
  pin:Boolean=false;
  constructor(private noteService: NoteService, public vcRef: ViewContainerRef,
    private cpService: ColorPickerService, private data: DataserviceService) { }
  message: String = ""

  ngOnInit() {
    this.data.currentMessage$.subscribe(message => this.message = message)
  }
  addNotes() {
    this.note = {
      title: this.title.value,
      description: this.description.value,
      color: this.color
    }
    console.log("Emitted data", this.note)
    this.noteService.postRequest(this.note, '/addNotes').subscribe((data: any) => {
      this.show()
      this.note=null;
      this.newMessage();
      this.color = ""
      console.log("added");

    })
  }
  // @Input() expanded;
  // panelOpenState:boolean=false;
  // toggle(example) {
  //   example.expanded = !example.expanded;
  //   console.log("closed")
  // }
  newMessage() {
    this.data.changeMessage("Note Added");
  }

  setColor($event) {
    this.color = $event;
    console.log(this.color)
  }
  show() {
    this.showTitle = !this.showTitle
  }
  pinNotes(){
    this.pin= !this.pin
    const data={
      "noteIdList":[this.note.noteId],
      "isPined":true
    }
    this.noteService.postRequest(data,'/pinUnpinNotes').subscribe((data:any)=> {
      console.log("Pined Note");
    })
  }
}



