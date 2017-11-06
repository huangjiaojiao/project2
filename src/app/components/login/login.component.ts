import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { UserService } from '../../services/user/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private user:UserService,private router:Router) { }


  loginTel:string = '';
  password:string = '';
  msg:string = '';
  
  ngOnInit() {
  }
  doLogin(){
    //用户的登录,将数据 logIntel，password传递到php的服务器中，执行数据写入，订阅返回数据
    this.user.login(this.loginTel,this.password).subscribe((data)=>{
      let  result = data.json();
      console.log(result);
      //实现页面跳转
      if(result.code=="success"){
        this.router.navigate(["/"]);
      }
      if(result.code=="error"){
        this.msg = result.msg;
      
        
        
      }
    })
  }

}
