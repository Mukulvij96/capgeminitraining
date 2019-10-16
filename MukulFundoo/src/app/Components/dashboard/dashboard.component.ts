import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../../services/data services/dataservice.service'
import { NoteService } from '../../services/appservices/app-service.service'
import { Notes } from '../models/noteModel'
import { routing } from '../../app-routing.module'
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  notes: Notes[]

  constructor(private noteService: NoteService, private data: DataserviceService, private router: Router) { }
  message: String;
  ngOnInit() {
    this.router.navigate(['/display'])

  }
  display: string = "";
  displayTrashNotes() {
    this.router.navigate(['/trash'])
  }
  displayAvailableNotes() {
    this.router.navigate(['/display'])
  }
  displayArchiveNotes() {
    this.router.navigate(['/archive'])
  }
  
}
