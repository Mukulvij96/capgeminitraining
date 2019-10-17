import { Component, OnInit, Output, EventEmitter, ViewContainerRef, Input } from '@angular/core';
import { ColorPickerService, Cmyk } from 'ngx-color-picker';
import { NoteService } from '../../services/appservices/app-service.service'
import { Notes } from '../models/noteModel'
import { FormControl } from '@angular/forms';
import { LabelserviceService } from 'src/app/services/labelservice/labelservice.service';
import { Labels } from '../models/labelModel';
@Component({
  selector: 'app-icontray',
  templateUrl: './icontray.component.html',
  styleUrls: ['./icontray.component.scss']
})
export class IcontrayComponent implements OnInit {
  note: Notes
  panelOpenState: boolean = false;
  save: Boolean = false;
  archive: Boolean = false
  labels: Labels
  storedLabels: Labels[]

  @Output() displayNoteAfterArchive = new EventEmitter<Boolean>();
  @Input() noteId: Notes;
  @Output() saveNote = new EventEmitter<Boolean>();
  @Output() close = new EventEmitter<Boolean>();
  @Output() colorEvent = new EventEmitter<string>();
  public label = new FormControl('');
  constructor(public vcRef: ViewContainerRef,
    private cpService: ColorPickerService, private noteService: NoteService, private labelService: LabelserviceService) { }

  ngOnInit() {
    this.getLabels()
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

  @Output() displayNoteAfterDelete = new EventEmitter<Boolean>();
  delete: Boolean = false;
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
      this.delete = true
      this.displayNoteAfterDelete.emit(this.delete);
    })
  }

  changeColor(color) {
    let newColor = color
    this.colorEvent.emit(newColor);
    console.log("color", color);
  }
  archiveNotes() {
    const data = {
      "noteIdList": [this.noteId],
      "isArchived": true
    }
    console.log("emitted", data)
    this.noteService.postJson(data, '/archiveNotes').subscribe((data: any) => {
      console.log("deleted note", data)
      console.log("trash");
      this.archive = true
      this.displayNoteAfterArchive.emit(this.archive);
    })
  }
  createLabel() {
    this.labels = {
      label: this.label.value,
      userId: sessionStorage.getItem('userId'),
      isDeleted: false,

    }
    this.labelService.postRequest(this.labels, 'noteLabels').subscribe((data: any) => {
      console.log("Label Has been set", data);
      this.getLabels();
    })
  }
  getLabels() {

    this.labelService.getRequest('noteLabels/getNoteLabelList').subscribe((data: any) => {
      console.log("Labels", data.data.details)
      this.storedLabels = data.data.details;

    })
  }
@Output() checkboxEvent=new EventEmitter<String>();
  selectCheckbox(id){
    this.checkboxEvent.emit(id);
  }
}



