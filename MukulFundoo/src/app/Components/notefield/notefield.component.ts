import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Notes } from '../models/noteModel';
import { NoteService } from '../../app-service.service';

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
  constructor(private noteService:NoteService) { }

  ngOnInit() {
  }
updateNotes(){
  this.note={ 
    title:this.title.value,
    description:this.description.value
  }
  this.noteService.postRequest(this.note,'user/addNotes').subscribe((data:any) => {
  
    if(data!=undefined){
      if(data.data.success){
        console.log("Note Added")
      }  
    }
  })
}

}



