import { Component, OnInit } from '@angular/core';
import { TogetherService } from '../../services/together/together.service';
import { ActivatedRoute } from '@angular/router';
import { Together } from '../../extras/together';
import { JoinService } from '../../services/join/join.service';
import { Join } from "../../extras/join";


@Component({
  selector: 'app-togetherdetail',
  templateUrl: './togetherdetail.component.html',
  styleUrls: ['./togetherdetail.component.css']
})
export class TogetherdetailComponent implements OnInit {
  
  together:Together = new Together(null,"","","","","","","","","","","","");
  tid:string = "";
  joins:Array<any>=[];
  count:number;
  
  
  
  constructor(
    private ar:ActivatedRoute,
    private tgs:TogetherService,
    private js:JoinService
    
  ) { }

  ngOnInit() {
    let tid = this.ar.snapshot.params["tid"];
    this.findById(tid);
    this.findJoinByTid(tid);
    this.tid = tid;
    this.count;
    
  }
  findById(tid:string){
    this.tgs.findTogetherDetailById(tid).subscribe((data)=>{
      let result = data.json();
      if(result.code == "success"){
        this.together = result.data;
      }
    })
  }


  findJoinByTid(tid:string){
    this.js.findJoinByTogetherId(tid).subscribe((data)=>{
      let result = data.json();
      if(result.code=="success"){
        this.joins = result.data;
        this.count=result.data.length;
        console.log(result);
        console.log(this.joins);
        return;
      }
    })
  }

  doJoin(){
    
    let joinObj = new Join(this.tid,"","","");
    this.js.doJoin(joinObj).subscribe((data)=>{
      let result = data.json();
      
      if(result.code=="success"){
        // 刷新报名区
        this.findJoinByTid(this.tid);
        return;
      }
      alert(result.msg);
    });
    
  }

}
