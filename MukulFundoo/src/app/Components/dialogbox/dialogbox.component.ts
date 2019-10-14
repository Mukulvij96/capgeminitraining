import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NoteService } from 'src/app/app-service.service';
import { Notes } from '../models/noteModel';
import { DataserviceService } from 'src/app/dataservice.service';
@Component({
  selector: 'app-dialogbox',
  templateUrl: './dialogbox.component.html',
  styleUrls: ['./dialogbox.component.scss']
})
export class DialogboxComponent implements OnInit {
  note:Notes;
  public title=new FormControl('');
  public description=new FormControl('');
  message:String=""
  constructor(private noteService:NoteService,private data:DataserviceService) {
   }

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
  newMessage(){
    this.data.changeMessage("Note Added");
  }
}
