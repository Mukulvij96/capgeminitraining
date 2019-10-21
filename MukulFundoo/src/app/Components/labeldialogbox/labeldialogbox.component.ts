import { Component, OnInit } from '@angular/core';
import { Labels } from '../models/labelModel';
import { LabelserviceService } from 'src/app/services/labelservice/labelservice.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-labeldialogbox',
  templateUrl: './labeldialogbox.component.html',
  styleUrls: ['./labeldialogbox.component.scss']
})
export class LabeldialogboxComponent implements OnInit {

  constructor(private labelService:LabelserviceService,private router:Router) { }

  ngOnInit() {
    this.getAllLabels()
  }
  labels:any;
  public editLabel=new FormControl('');
  public labelValue=new FormControl('');
  labelList:Labels[];
getAllLabels(){
  this.labelService.getRequest('noteLabels/getNoteLabelList').subscribe((data:any) => {
    this.labelList=data.data.details;
    this.labelList=this.labelList.reverse();
    console.log(this.labelList)
  })
}

deleteLabel(labelId){
  const data={
    "id":labelId
  }
  this.labelService.deleteRequest(data,'noteLabels/' +labelId+'/deleteNoteLabel').subscribe((data:any) => {
    console.log("deleted label successfully")
    this.getAllLabels()
  })
}
updateLabel(labelId){
  console.log("label value",this.editLabel.value)
  const data={
    "id":labelId,
    label:this.editLabel.value
  }
  this.labelService.postRequest(data,'noteLabels/'+ labelId + '/updateNoteLabel').subscribe((data:any) => {
    console.log("updated labels" , data);
  })
}

addNewLabel(){
  this.labels={
    label:this.labelValue.value,
    userId: sessionStorage.getItem('userId'),
    isDeleted: false,
  }
  this.labelService.postRequest(this.labels,'noteLabels').subscribe((data:any) => {
    console.log("Label Added");
    this.getAllLabels()
    this.labelValue.reset();
  })
}

}
