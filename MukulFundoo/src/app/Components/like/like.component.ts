import { Component, OnInit, Input } from '@angular/core';
import { QuestionanswerService } from 'src/app/services/questionanswer/questionanswer.service';
import { SnackbarService } from 'src/app/services/snackbarservices/snackbar.service';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent implements OnInit {

  constructor(private questionService:QuestionanswerService,private snackbar:SnackbarService) { }

  @Input() parent:any;
  count:number=0;
  like:boolean=false
  ngOnInit() {
    this.numberOfLikes()
  }

  likeReply(){
    const data={
      "like":true,
      "parentId":this.parent.id,
    }

    this.questionService.likeTheReply(data,this.parent.id).subscribe((response:any) =>{
      console.log("after Like" ,response)
      this.snackbar.open("Like Updated")
    })
    this.like=true
    this.numberOfLikes()
  }

  dislikeReply(){
    const data={
      "like":false,
      "parentId":this.parent.id
    }
    this.questionService.likeTheReply(data,this.parent.id).subscribe((response:any) =>{
      console.log("after dislike" ,response)
      this.snackbar.open("Dislike updated")
    })
    this.like=false
    this.numberOfLikes()
  }

  numberOfLikes(){
    console.log(this.parent)
    for( let value of this.parent.like){
      if(value.like)
        this.count++;
        
    }
  
  }
}
