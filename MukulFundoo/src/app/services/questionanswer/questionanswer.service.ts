import { Injectable } from '@angular/core';
import { HttpserviceService } from '../httpservice/httpservice.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionanswerService {

  constructor(private httpService:HttpserviceService) { }

  askQuestionForApproval(body){
    return this.httpService.postJSON('questionAndAnswerNotes/addQuestionAndAnswer',body);
  }

  replyToQuestion(body,parentId){
    
    return this.httpService.postJSON('questionAndAnswerNotes/reply/'+ parentId,body);
  }

  likeTheReply(body,parentId){
    return this.httpService.postJSON('questionAndAnswerNotes/like/'+parentId,body)
  }
}
