import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {
  newname:string;
 
  
  constructor(public us:UserService,public router:Router) { }

  ngOnInit() {
  }
  doName(){
    this.us.updateName(this.newname).subscribe((data)=>{
      let result = data.json();
      
      if(result.code=="success"){
        
        console.log("修改成功");
        console.log(result);
        alert("请重新登录");
        this.router.navigate(['/login']);
      }else{
        console.log("修改失败");
      }
      
    })
  }

}
