import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-regist',
  templateUrl: './regist.component.html',
  styleUrls: ['./regist.component.css']
})
export class RegistComponent implements OnInit {

  constructor(private user:UserService,private router:Router) { }

  ngOnInit() {
  }

  userTel:string ;
  msg:string = '';
  styleClass:string = '';
  


  doRegist(){
    this.user.regist(this.userTel).subscribe((data)=>{
      let result = data.json();
      this.msg = result.msg;
      this.styleClass = result.code;
    
      console.log(result);
     
      
    });

  }
}
