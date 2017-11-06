import { Injectable } from '@angular/core';
import { Http ,URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class SearchService {

  constructor(private http:Http) { }

  public search(toCity:string,startDate:string):Observable<any>{
    let params = new URLSearchParams();
    params.append("toCity",toCity);
    params.append("startDate",startDate);
    
    return this.http.post("/tournote/search.php",params);
  } 
}
