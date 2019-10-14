import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-trashoption',
  templateUrl: './trashoption.component.html',
  styleUrls: ['./trashoption.component.scss']
})
export class TrashoptionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
@Output() foreverDeleteEvent=new EventEmitter<Boolean>();
delete:Boolean=false;
deleteForeverNotes(){
  this.delete=true;
  this.foreverDeleteEvent.emit(this.delete);
}
@Output() retrieveEvent=new EventEmitter<Boolean>();
retrieve:Boolean=false;
retrieveNotes(){
  this.retrieve=true;
  this.retrieveEvent.emit(this.retrieve);
}

}
