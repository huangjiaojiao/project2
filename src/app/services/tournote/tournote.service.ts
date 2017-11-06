import { Injectable } from '@angular/core';
import { Tour } from '../../extras/tour';
import { Http,URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TournoteService {

  constructor(private http:Http){}

  findByPage(pageNo:number = 1):Observable<any>//Array<Tour>
  {
    return null;
  }

  findNoteDetailById(id:string):Observable<any>//TourDetail
  {
    let params = new URLSearchParams();
    params.append("tid",id);
    return this.http.post("/tournote/findByTourId.php",params);
  }
  findByAllTour():Observable<any>
  {
    return this.http.get("/tournote/findAllTour.php");
  }


  publish(tour:Tour):Observable<any>{
    let params = new URLSearchParams();
    params.append("title",tour.title);
    params.append("type",tour.type);
    params.append("content",tour.content);
    params.append("contentImg",tour.contentImg);
    return this.http.post("/tournote/addTour.php",params);
  }

}
