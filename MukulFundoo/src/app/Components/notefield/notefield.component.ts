import { Component, OnInit, Output, EventEmitter, ViewContainerRef, Input, ClassProvider } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Notes } from '../models/noteModel';
import { NoteService } from '../../services/appservices/app-service.service';
import { ColorPickerService, Cmyk } from 'ngx-color-picker';
import { DataserviceService } from 'src/app/services/data services/dataservice.service';
import { ShowHideDirective } from '@angular/flex-layout';
import { SnackbarService } from 'src/app/services/snackbarservices/snackbar.service';


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
  showTitle:Boolean=true;
  pin:Boolean=false;
  
  constructor(private noteService: NoteService, public vcRef: ViewContainerRef,
    private cpService: ColorPickerService, private data: DataserviceService,private snackbar:SnackbarService) { }
  message: String = ""

  ngOnInit() {
    this.data.currentMessage$.subscribe(message => this.message = message)
  }
  addNotes(pinValue) {
    this.note = {
      title: this.title.value,
      description: this.description.value,
      color: this.color,
      isPined:pinValue
    }
    console.log("Emitted data", this.note)
    this.noteService.postRequest(this.note, '/addNotes').subscribe((data: any) => {
      this.show()
      this.title.reset()
      this.description.reset()
      this.newMessage();
      this.color = ""
      this.pin=false;
      console.log("added");
      this.snackbar.open("Note Added")


    })
  }

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
    this.pin = !this.pin
  }
  
  
}



