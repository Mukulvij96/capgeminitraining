import { Component, OnInit, Output, EventEmitter,ViewContainerRef, Input, ClassProvider } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Notes } from '../models/noteModel';
import { NoteService } from '../../app-service.service';
import { ColorPickerService, Cmyk } from 'ngx-color-picker';
import { DataserviceService } from 'src/app/dataservice.service';


@Component({
  selector: 'app-notefield',
  templateUrl: './notefield.component.html',
  styleUrls: ['./notefield.component.scss']
})
export class NotefieldComponent implements OnInit {

  
  note:Notes;
  @Input() noteId:Notes
  public description=new FormControl('');
  public title=new FormControl('');

  close:Boolean;
  constructor(private noteService:NoteService,public vcRef: ViewContainerRef, 
    private cpService: ColorPickerService,private data:DataserviceService) { }
    message:String=""

  ngOnInit() {
    this.data.currentMessage$.subscribe(message => this.message = message)
  }
updateNotes($event){
  this.note={ 
    title:this.title.value,
    description:this.description.value
  }
  console.log("Emitted data" ,this.note )
  this.noteService.postRequest(this.note,'/addNotes').subscribe((data:any) => {
    this.newMessage();
    console.log("added") 
      
  })
}
@Input() expanded;
toggle(example){
example.expanded = !example.expanded;
console.log("closed")
}
newMessage(){
  this.data.changeMessage("Note Added");
}
}





