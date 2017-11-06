import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  
  userStatus: boolean = false;
  user:object={};
  constructor(private us:UserService) { }

  ngOnInit() {
    //判断用户有没有登录
    this.us.checkLogin().subscribe((data)=>{
      let result = data.json();
      console.log(result);
      console.log(result.status);
      this.userStatus = result.status;
      if(result.status){
        this.user = result.msg;
       
        return;
      }  
      this.user= {};  
      
    })

    
  }

  // addUrl(url:string){
  //   console.log(url);
  //   if(url===undefined){
  //     return "";
  //   }
  //   return "http://127.0.0.1/tournote.img"+url;
  // }

  doExit(){
    this.us.exit().subscribe((data)=>{
      
      this.userStatus = false;
      this.user= {};  
     
      
    })
  }

}
