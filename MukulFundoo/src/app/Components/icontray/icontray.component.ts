import { Component, OnInit, Output, EventEmitter, ViewContainerRef, Input } from '@angular/core';
import { ColorPickerService, Cmyk } from 'ngx-color-picker';
import { NoteService } from '../../services/appservices/app-service.service'
import { Notes } from '../models/noteModel'
import { FormControl } from '@angular/forms';
import { LabelserviceService } from 'src/app/services/labelservice/labelservice.service';
import { Labels } from '../models/labelModel';
import { FormGroup,FormBuilder,FormArray } from '@angular/forms'
import { DataserviceService } from 'src/app/services/data services/dataservice.service';

@Component({
  selector: 'app-icontray',
  templateUrl: './icontray.component.html',
  styleUrls: ['./icontray.component.scss']
})
export class IcontrayComponent implements OnInit {
  note: Notes
  panelOpenState: boolean = false;
  save: Boolean = false;
  archive: Boolean=false
  storedLabels: Labels[]
  interestFormGroup : FormGroup
  labels:any;
  selected: any;

  pickedDate = new FormControl(new Date());
  minDate=new Date();
 
  reminderList = [
    {"Day": "Later Today", "Time": "20:00", "dayCount": 0, "timeCount": 20 },
    {"Day": "Tomorrow", "Time": "08:00", "dayCount": 1, "timeCount": 8},
    {"Day": "Next Week", "Time": "08:00", "dayCount": 7, "timeCount": 8 }
  ]
  timeList = [
    { "title": "Morning", "time": "08:00","timeCount":8 },
    { "title": "AfterNoon", "time": "13:00","timeCount":13 },
    { "title": "Evening", "time": "18:00","timeCount":18 },
    { "title": "Night", "time": "20:00","timeCount":20 }]
    timeSelected:any;
    dayCount:number=0;
    timeCount:number=0;

  @Output() displayNoteAfterArchive = new EventEmitter<Boolean>();
  @Input() noteId: Notes; 
  @Output() saveNote = new EventEmitter<Boolean>();
  @Output() close = new EventEmitter<Boolean>();
  @Output() colorEvent = new EventEmitter<string>();
  public label = new FormControl('');
  
  message:String=""
  constructor(public vcRef: ViewContainerRef,
    private cpService: ColorPickerService, private noteService: NoteService, private labelService: LabelserviceService, private formBuilder: FormBuilder,private data:DataserviceService) { }
   
  ngOnInit() {
    this.getLabels()
    this.data.currentMessage$.subscribe(message => {
      this.message = message;})
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
  deleted:String=''
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
      this.deleted="deleted"
      this.newMessage(this.deleted);
    })
  }

  changeColor(color) {
    let newColor = color
    this.colorEvent.emit(newColor);
    console.log("color", color);
  }
  archived:Boolean=true;
  archiveNotes() {
    
    const data = {
      "noteIdList": [this.noteId],
      "isArchived": true,
      "isDeleted":false
    }
    // console.log("emitted", data)
    this.noteService.postJson(data, '/archiveNotes').subscribe((data: any) => {
      this.archive =true;
      this.displayNoteAfterArchive.emit(this.archive)
      this.archived = !this.archived
    })
  }
  
  unarchiveNotes(){
    const data = {
          "noteIdList": [this.noteId],
          "isArchived": false
        }
        // console.log("emitted", data)
        this.noteService.postJson(data,'/archiveNotes').subscribe((data: any) => {
          console.log("Unarchived note", data)
          this.archive=true
          this.displayNoteAfterArchive.emit(this.archive)
          this.archived = !this.archived
         
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
      this.label.reset()
      this.getLabels();
    })
  }
  getLabels() {

    this.labelService.getRequest('noteLabels/getNoteLabelList').subscribe((data: any) => {
      this.storedLabels = data.data.details;
      var finalLabels=this.storedLabels.filter(function (check) {
        if (check.isDeleted == false) 
        return true;
      })
      this.storedLabels=finalLabels.reverse()

    })
  }
@Output() checkboxEvent=new EventEmitter<String>();
check:Boolean=false;
selectCheckbox($event){
if($event.checked){
  console.log("checked");
  console.log("find",$event.source.value);
  this.checkboxEvent.emit($event.source.value)
  
}
  else{
    console.log("Not checked");
  }
}
changeValue(check){
  check = !check
}

newMessage(value){
  this.data.changeMessage(value);
}

printDate() {
  console.log(this.pickedDate.value);
}
reminderAdd(reminder){
  //console.log("this is picked date"+this.pickedDate,"this is picked time",this.timeSelected,this.note['id'] )
  //this.timeCount=this.timeSelected  

  
  let data={
    "noteIdList":[this.noteId],
    "reminder": new Date(this.pickedDate.value.getFullYear(), this.pickedDate.value.getMonth(),
      this.pickedDate.value.getDate() + reminder.dayCount, reminder.timeCount, 0, 0, 0)
  }
  this.noteService.postJson(data,'/addUpdateReminderNotes').subscribe((data:any)=>{
 
    this.data.changeMessage("Note Edited")
  });
  
}
reminderAddPicked(){
  console.log(this.timeSelected)
  let data={
    "noteIdList":[this.noteId],
    "reminder": new Date(this.pickedDate.value.getFullYear(), this.pickedDate.value.getMonth(),
    this.pickedDate.value.getDate() , this.timeSelected.timeCount, 0, 0, 0)
  }
console.log("Sending Data",data)
  this.noteService.postJson(data,'/addUpdateReminderNotes').subscribe((data:any)=>{
    
    this.data.changeMessage("Note Edited")
  });

}

}







