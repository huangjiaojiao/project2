import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { Router } from '@angular/router';
import { updatePassword } from '../../extras/updatepassword';
declare var $: any;

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.css']
})
export class SecureComponent implements OnInit {
  code:number;
  updatePassword:updatePassword = new updatePassword("","","","")
  constructor(public us:UserService,public router:Router) { }

  ngOnInit() {
    
  }


  doClick(){
     this.us.getcode().subscribe((data)=>{
       let result = data.json();
       this.code=result.data;
       console.log(result.data);
       alert(result.data);
     })
  }

  doPassword(){
    if(this.updatePassword.writecode==this.updatePassword.code){
      this.us.updatePassword(this.updatePassword).subscribe((data)=>{
        let result = data.json();
        console.log(result);
        alert("请重新登录");
        this.router.navigate(['/login']);
      });
    }else{
      alert("验证码错误");
    }
  }

}
