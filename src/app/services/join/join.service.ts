import { Injectable } from '@angular/core';
import { Http,URLSearchParams } from '@angular/http';
import {Join} from "../../extras/join";
import { Observable } from 'rxjs/Observable';



@Injectable()
export class JoinService {

  constructor(private http:Http) { }


  public doJoin(js:Join):Observable<any>
  {
    let params = new URLSearchParams();
    params.append("togetherId",js.togetherId);
    params.append("tid",js.tid);
    return this.http.post("/tournote/join.php",params);
  }

  
  public findJoinByTogetherId(tid:string):Observable<any>
  {
    let params = new URLSearchParams();
    params.append("tid",tid);
    return this.http.post("/tournote/findJoinByTid.php",params);
  }


}
