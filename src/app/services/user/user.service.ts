import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http ,URLSearchParams} from '@angular/http';
import { updatePassword } from '../../extras/updatepassword';




@Injectable()
export class UserService {  

  //注入 Http对象
  constructor(private http:Http) { }
 //提供登录的数据服务请求
  public login(tel:string,password:string):Observable<any>{
    let params = new URLSearchParams();
    //和对应的php里定义获取的值得名称一致
    params.append("tel",tel);
    params.append("pwd",password);
    //传数据到对应的php文件中
    return this.http.post("/tournote/loginUser.php",params);
  }

  //登录状态检测服务
  public checkLogin():Observable<any>{
    return this.http.get("/tournote/checkLogin.php");
  }


 //提供注册的数据服务请求
  public regist(tel:string):Observable<any>{
    let params = new URLSearchParams();
    params.append("tel",tel);
    return this.http.post("/tournote/registUser.php",params);
  }
  //获取验证码
  public getcode():Observable<any>{
    return this.http.get("/tournote/getcode.php");
  }
    
  //用户退出
  public exit():Observable<any>{
    return this.http.get("/tournote/userExit.php");
  }
  //修改密码
  public updatePassword(updatePassword:updatePassword):Observable<any>{
    let params = new URLSearchParams();
    params.append("password",updatePassword.password);
    params.append("repassword",updatePassword.repassword);
    
    return this.http.post("/tournote/updatepassword.php",params);
  }
  //修改用户名
  public updateName(newname:string):Observable<any>{
    let params = new URLSearchParams();
    params.append("newname",newname);
    
    
    return this.http.post("/tournote/updatename.php",params);
  }
  //修改头像
  public updateHead(imgUrl:string):Observable<any>{
    let params = new URLSearchParams();
    params.append("imgUrl",imgUrl);
    
    return this.http.post("/tournote/updatehead.php",params);
 
  }
  
}


