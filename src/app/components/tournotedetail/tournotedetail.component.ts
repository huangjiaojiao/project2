import { Component, OnInit } from '@angular/core';
import { Tour } from '../../extras/tour';
import { ActivatedRoute } from '@angular/router';
import { TournoteService } from '../../services/tournote/tournote.service';
import { CommentService } from '../../services/comment/comment.service';
import { Comment } from "../../extras/comment";



@Component({
  selector: 'app-tournotedetail',
  templateUrl: './tournotedetail.component.html',
  styleUrls: ['./tournotedetail.component.css']
})
export class TournotedetailComponent implements OnInit {

  tour:Tour = new Tour (null,"","","","","","","");
  tid:string = "";
  content:string = "";
  comments:Array<any>=[];
  
  

  constructor(
    private ar:ActivatedRoute,
    private ts:TournoteService,
    private tc:CommentService
    
  ) { }

  ngOnInit() {
    //游记文章详情查询 依赖于文章的ID
    let tid = this.ar.snapshot.params["tid"];
    this.findById(tid);
    this.findCommentByTid(tid);
    this.tid = tid;
  }

  findById(tid:string){
    this.ts.findNoteDetailById(tid).subscribe((data)=>{
      let result = data.json();
      if(result.code == "success"){
        this.tour = result.data;
      }
    })
  }

  findCommentByTid(tid:string){
    this.tc.findCommentByTourId(tid).subscribe((data)=>{
      let result = data.json();
      if(result.code=="success"){
        this.comments = result.data;
        return;
      }
    })
  }
  
 doComment(){
  let commentObj = new Comment(this.content,this.tid,"","","");
  this.tc.doComment(commentObj).subscribe((data)=>{
    let result = data.json();
    if(result.code=="success"){
      // 刷新评论区
      this.findCommentByTid(this.tid);
      return;
    }
    alert(result.msg);
  });
 }

  


}
