import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { NoteService } from 'src/app/app-service.service';


@Component({
  selector: 'app-archiveoption',
  templateUrl: './archiveoption.component.html',
  styleUrls: ['./archiveoption.component.scss']
})
export class ArchiveoptionComponent implements OnInit {

  unarchive: Boolean = false;
  delete:Boolean = false;
  constructor(private noteService: NoteService) { }

  @Output() unarchiveEvent = new EventEmitter<Boolean>();
  @Output() deleteEvent = new EventEmitter<Boolean>();
  ngOnInit() {
  }
  unarchiveNotes() {
    this.unarchive = true;
    this.unarchiveEvent.emit(this.unarchive);
  }
  deleteNotes(){
    this.delete=true;
    this.deleteEvent.emit(this.delete);
  }
}
