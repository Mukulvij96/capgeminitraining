import { Component, OnInit,Input } from '@angular/core';
import { DataserviceService } from 'src/app/services/data services/dataservice.service';
import { NoteService } from 'src/app/services/appservices/app-service.service';
import { SearchpipePipe } from 'src/app/pipe/searchpipe.pipe';
import { Notes } from '../models/noteModel'
@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {

  searchText:any;
  
  constructor(private dataService:DataserviceService,private noteService:NoteService,private filterPipe:SearchpipePipe) { }

  ngOnInit() {
    this.searchNote();
  }
  @Input() records:Notes[]
filteredRecords:Notes[]
  searchNote(){
    this.dataService.currentMessage$.subscribe((searchText:any  ) => {
      this.searchText = searchText
      console.log("searchtext",searchText)
    
    return this.noteService.getRequest('/getNotesList').subscribe((response: any) => {
      this.records = response.data.data.reverse();
      console.log("records", this.records)
      // this.records=this.filterDeleted(this.records);
      this.filteredRecords=this.filterPipe.transform(this.records,this.searchText);
      console.log("here",this.filteredRecords);
    }, (error) => {
      console.log(error);
    });
  });
  }

}
