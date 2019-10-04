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

  save:Boolean;
  note:Notes;
  public description=new FormControl('');
  public title=new FormControl('');

  close:Boolean;
  constructor() { }

  ngOnInit() {
  }


}



