import { Injectable } from '@angular/core';
import {Comment} from "../../extras/comment"
import { Observable } from 'rxjs/Observable';
import { Http ,URLSearchParams} from '@angular/http';
@Injectable()
export class CommentService {

  constructor(private http:Http) { }


  public doComment(ct:Comment):Observable<any>
  {
    let params = new URLSearchParams();
    params.append("content",ct.content);
    params.append("tid",ct.tid);
    return this.http.post("/tournote/addComment.php",params);
  }

  
  public findCommentByTourId(tid:string):Observable<any>
  {
    let params = new URLSearchParams();
    params.append("tid",tid);
    return this.http.post("/tournote/findCommentByTid.php",params);
  }


  

}
