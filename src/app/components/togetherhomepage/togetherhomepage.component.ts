import { Component, OnInit } from '@angular/core';
import { TogetherService } from '../../services/together/together.service';
import { SearchService } from '../../services/search/search.service';

declare var $:any;
@Component({
  selector: 'app-togetherhomepage',
  templateUrl: './togetherhomepage.component.html',
  styleUrls: ['./togetherhomepage.component.css']
})
export class TogetherhomepageComponent implements OnInit {
  togethers:Array<any> = [];
  toCity:string="";
  startDate:string="";
  joinnum:string;

  constructor(
    private tgs:TogetherService,
    private ss:SearchService,
    
  ) { }

  ngOnInit() {
    this.findAllTogether();
    // this.findJoinNum();
    
  }

  findAllTogether(){
    this.tgs.findByAllTogether().subscribe((data)=>{
      let result = data.json();
      if(result.code=="success"){
        this.togethers = result.data;
        // console.log(this.togethers);
        // return;
        for(let i=0;i<this.togethers.length;i++){
          let date = this.togethers[i].startDate;
          let deadline = new Date(date);
          let today = new Date();
          let time:number=deadline.getTime()-today.getTime();
          let d = 0;
          d = time/1000/3600/24;
          d = Math.ceil(d);
          if(d<0){
            d=0
          }
          this.togethers[i]['day']=d;
          this.findJoinNum(this.togethers[i]);
          console.log(this.togethers[i]);
        }
        return;
      }
      console.log("失败");
    })
    
  }

  findJoinNum(obj:Object){
    this.tgs.findJoinNum(obj["tid"]).subscribe((data)=>{
      let result = data.json();
      if(result.code=="success"){
        // this.joinnum = result.data.length;
        obj["count"]=result.data.tc;
        return;
      }
      console.log("查询失败");
    })
  }

  doSearch(){
    this.ss.search(this.toCity,this.startDate).subscribe((data)=>{
      let result = data.json();
      if(result.code=="success"){
        this.togethers = result.data;
        return;
      }
      console.log("查询失败");
    })
  }

   
 
}
