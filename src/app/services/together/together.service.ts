import { Injectable } from '@angular/core';
import { Together } from '../../extras/together';
import { Http,URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TogetherService {
 

  constructor(private http:Http) { }

  public add(together:Together):Observable<any>{
      return null;
  }

  public list(pageNo:number=1):Observable<any> // Array<Together>
  {
    return null;
  }

  findTogetherDetailById(id:string):Observable<any>// Together
  {
    let params = new URLSearchParams();
    params.append("tid",id);
    return this.http.post("/tournote/findByTogetherId.php",params);
  }

  public joinIn(maleNum:number,femaleNum:number,tel:string):Observable<any>
  {
    return null;
  }

  findByAllTogether():Observable<any>
  {
    return this.http.get("/tournote/findAllTogether.php");
  }

  publish(together:Together):Observable<any>{
    let params = new URLSearchParams();
    params.append("title", together.title);
    params.append("tel", together.tel);
    params.append("qq",together.qq);
    params.append("weixin",together.weixin);
    params.append("toCity",together.toCity);
    params.append("fromCity",together.fromCity);
    params.append("lastDays",together.lastDays);    
    params.append("startDate",together.startDate);
    params.append("limitNum",together.limitNum);
    params.append("intro",together.intro);
    params.append("coverImg",together.coverImg);
  
    
    return this.http.post("/tournote/addTogether.php",params);
  }

  findJoinNum(tid:string):Observable<any>{
    let params = new URLSearchParams();
    params.append("tid", tid);
    return this.http.post("/tournote/findJoinNum.php",params);
  }

}
