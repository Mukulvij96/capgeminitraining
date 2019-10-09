import { Component, OnInit, Output, EventEmitter, ViewContainerRef, Input } from '@angular/core';
import { ColorPickerService, Cmyk } from 'ngx-color-picker';
import { NoteService } from '../../app-service.service'
import { Notes } from '../models/noteModel'

@Component({
  selector: 'app-icontray',
  templateUrl: './icontray.component.html',
  styleUrls: ['./icontray.component.scss']
})
export class IcontrayComponent implements OnInit {
  note: Notes
  panelOpenState: boolean = true;
  save: Boolean = false;

  @Input() noteId: Notes;
  @Output() saveNote = new EventEmitter<Boolean>();
  @Output() close = new EventEmitter<Boolean>();
  @Output() colorEvent = new EventEmitter<string>();

  constructor(public vcRef: ViewContainerRef,
    private cpService: ColorPickerService, private noteService: NoteService) { }

  ngOnInit() {
    
  }
  colorArray =
    [
      { 'color': '#B39DDB', 'name': 'purple' },
      { 'color': '#F48FB1', 'name': 'pink' },
      { 'color': '#FFAB40', 'name': 'brown' },
      { 'color': '#E0E0E0', 'name': 'gray' },
      { 'color': '#FFFFFF', 'name': 'White' },
      { 'color': '#E53935', 'name': 'Red' },
      { 'color': '#EF6C00', 'name': 'Orange' },
      { 'color': '#FFEB3B', 'name': 'Yellow' },
      { 'color': '#B2FF59', 'name': 'green' },
      { 'color': '#69F0AE', 'name': 'teal' },
      { 'color': '#81D4FA', 'name': 'blue' },
      { 'color': '#0288D1', 'name': 'darkblue' }
    ]


  togglePanel() {
    this.panelOpenState = false;
    this.close.emit(this.panelOpenState);
  }
  saveNotes() {
    this.save = true;
    this.togglePanel();
    console.log("Clicking save")
    this.saveNote.emit(this.save);
  }
  @Output() displayNoteAfterDelete=new EventEmitter<Boolean>();
delete:Boolean=false;
  deleteNotes() {
    console.log(this.noteId);
    const data = {
      "noteIdList": [this.noteId],
      "isDeleted": true
    }
    console.log("emitted", data)
    this.noteService.postJson(data, '/trashNotes').subscribe((data: any) => {
      console.log("deleted note", data)
      console.log("trash");    
      this.delete=true
      this.displayNoteAfterDelete.emit(this.delete); 
    })
  }

  changeColor(color) {
   let newColor = color
    this.colorEvent.emit(newColor);
    console.log("color", color);
  }
}



