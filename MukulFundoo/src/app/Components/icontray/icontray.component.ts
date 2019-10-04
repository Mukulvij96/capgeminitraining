import { Component, OnInit, Output ,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-icontray',
  templateUrl: './icontray.component.html',
  styleUrls: ['./icontray.component.scss']
})
export class IcontrayComponent implements OnInit {

  save:Boolean=false;


  @Output() saveNote = new EventEmitter<Boolean>();
  @Output() close=new EventEmitter<Boolean>(); 
  constructor() { }

  ngOnInit() {
  }
  panelOpenState: boolean = false;

  togglePanel() {
      this.panelOpenState != this.panelOpenState;
      this.close.emit(this.panelOpenState);
  }

  saveNotes(){
    this.save=true;
    this.togglePanel();
    this.saveNote.emit(this.save);
  }
}
