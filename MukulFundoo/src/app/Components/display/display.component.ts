import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../app-service.service'
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  constructor(private noteService:NoteService) { }

  ngOnInit() {
    this.noteService.getRequest('/getNotesList').subscribe((data:any) => {
      console.log(data.data.data);
      console.log("retrieved")  
  })
}
}
