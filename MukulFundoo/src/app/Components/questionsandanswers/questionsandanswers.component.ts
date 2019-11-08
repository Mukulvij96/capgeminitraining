import { Component, OnInit, Input } from '@angular/core';
import { Notes } from '../models/noteModel';
import { ActivatedRoute, Router } from '@angular/router'
import { NotesService } from 'src/app/services/noteservices/note-service.service'
import { QuestionanswerService } from 'src/app/services/questionanswer/questionanswer.service';
import { DataserviceService } from 'src/app/services/data services/dataservice.service';
import { getQueryPredicate } from '@angular/compiler/src/render3/view/util';
import { environment } from '../../../environments/environment'
import { routing } from 'src/app/app-routing.module';
@Component({
  selector: 'app-questionsandanswers',
  templateUrl: './questionsandanswers.component.html',
  styleUrls: ['./questionsandanswers.component.scss']
})
export class QuestionsandanswersComponent implements OnInit {

  noteId: string;
  constructor(private routing: Router, private data: DataserviceService, private route: ActivatedRoute, private noteService: NotesService, private questionService: QuestionanswerService) { }
  message: string = '';
  pic: any
  baseUrlPic = environment.baseUrlPic;
  url: any
  
  ngOnInit() {
    this.noteId = this.route.snapshot.paramMap.get('noteId')
    this.getNoteDetails()
   
  }
  rate:number;
  title: string;
  description: string;
  questionText: string;
  user: string;
  time=[];
  question:string
  color:string
  getNoteDetails() {
    this.noteService.getNotesDetailById(this.noteId).subscribe((response: any) => {
      
      this.title = response.data.data[0].title
      this.description = response.data.data[0].description
      this.user = response.data.data[0].user
      this.time=response.data.data[0].questionAndAnswerNotes;
      this.color=response.data.data[0].color
      console.log("OnLoading",response.data.data[0].questionAndAnswerNotes)
      
    })  

  }

  questionInput() {


    let data = {
      "message": this.questionText,
      "user": this.user,
      "notesId": this.noteId,
    }

    this.questionService.askQuestionForApproval(data).subscribe((response: any) => {
      console.log(response.data.details.message);
    })

  }

  
  getPic() {
    this.pic = localStorage.getItem('pic');
    this.url = this.baseUrlPic + this.pic;
    this.routing.navigate(['/QuestionAnswer', this.noteId])

  }
  open:boolean=false;
  openEditor(){
    this.open = !this.open
  }

  close(id){
    
    const data={
      "message":this.questionText,
      "parentId":id
    }
    this.questionService.replyToQuestion(data,id).subscribe((response:any) => {
      console.log("reply done",response);
    })
    this.open= false
  }

  

}
