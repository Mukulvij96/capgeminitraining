import { Component, OnInit, Output, EventEmitter,ViewContainerRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Notes } from '../models/noteModel';
import { NoteService } from '../../app-service.service';
import { ColorPickerService, Cmyk } from 'ngx-color-picker';

@Component({
  selector: 'app-notefield',
  templateUrl: './notefield.component.html',
  styleUrls: ['./notefield.component.scss']
})
export class NotefieldComponent implements OnInit {

  
  note:Notes;
  public description=new FormControl('');
  public title=new FormControl('');

  close:Boolean;
  constructor(private noteService:NoteService,public vcRef: ViewContainerRef, 
    private cpService: ColorPickerService) { }

  ngOnInit() {
  }
updateNotes($event){
  this.note={ 
    title:this.title.value,
    description:this.description.value
  }
  console.log("Emitted data" ,this.note )
  this.noteService.postRequest(this.note,'/addNotes').subscribe((data:any) => {
      console.log("added")  
  })
}

// public changeColor(color: string): Cmyk {
//   const hsva = this.cpService.stringToHsva(color);

//   const rgba = this.cpService.hsvaToRgba(hsva);


//   console.log(color);
//    console.log(rgba);
  
//   return this.cpService.rgbaToCmyk(rgba);
// }
// changColor($event){
//   console.log($event);
//   this.noteService.postRequest(this.note,'/addNotes').subscribe((data:any) => {
//     console.log("added") 
// })
 
}




