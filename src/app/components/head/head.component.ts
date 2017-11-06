import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FileUploader } from '_ng2-file-upload@1.2.1@ng2-file-upload';
import { UserService } from '../../services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
  uploader:FileUploader = new FileUploader({
   
    url:"/tournote/fileUpload.php",  
    method:"POST",
    itemAlias:"uploadedfile"
  });
  constructor(public us:UserService,public router:Router) { }

  ngOnInit() {
  }

  doUpload(){
    // 待上传文件队列
    console.log(this.uploader.queue);
    
    if(this.uploader.queue.length==0){
      console.log("没有待上传的文件");
      return;
    }
    // 单文件上传  ==>  传递的是哪一个文件 最后被添加到队列的文件
    let index = this.uploader.queue.length-1;
  
    this.uploader.queue[index].onSuccess = (response,status,headers)=>{
      if(status==200){
        console.log(response);
        this.imgUrl = JSON.parse(response).imgUrl;
        
        this.us.updateHead(this.imgUrl).subscribe((data)=>{
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
        
      }else{
        console.log("服务器不通，请稍后再试");
      }
    }

    //开始上传
    this.uploader.queue[index].upload();
  }
  

  //需要去导入ElementRef类型
  @ViewChild("file") myUpload:ElementRef;
  imgUrl:string = "./assets/img/user.jpeg";

  clickFile(){
    // @ViewChild 获取当前组件html 中任意的 包装后的 页面元素
    // 可以理解为 id 选择器  @ViewChild(页面中元素的id)
    this.myUpload.nativeElement.click();
    
  }
  selectFile(event:any){
    let that = this;
    //存在文件渲染的类
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    console.log(event);
    reader.onload = function(){
      that.imgUrl = this.result;
    }
  }

}
