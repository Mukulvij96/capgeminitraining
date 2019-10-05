import { Component, OnInit, Output ,EventEmitter,ViewContainerRef } from '@angular/core';
import { ColorPickerService, Cmyk } from 'ngx-color-picker';

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
  panelOpenState: boolean = true;

  togglePanel() {
      this.panelOpenState =false;
  }

  saveNotes(){
    this.save=true;
    this.togglePanel();
    console.log("Clicking save")
    this.saveNote.emit(this.save);
  }
  open:Boolean=true;
  @Output() changeColorEvent=new EventEmitter<Boolean>();
  
  openColorPallete(){
    this.open=false;
    this.changeColorEvent.emit(this.open);
  }

}
