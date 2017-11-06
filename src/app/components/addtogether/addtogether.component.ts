import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FileUploader } from '_ng2-file-upload@1.2.1@ng2-file-upload';
import { Together } from '../../extras/together';
import { TogetherService } from '../../services/together/together.service';
import { Router } from '@angular/router';


declare var $ :any;
@Component({
  selector: 'app-addtogether',
  templateUrl: './addtogether.component.html',
  styleUrls: ['./addtogether.component.css']
})
export class AddtogetherComponent implements OnInit {
  [x: string]: any;

  uploader:FileUploader = new FileUploader({
    url:"/tournote/fileUpload.php",
    method:"POST",
    itemAlias:"uploadedfile"
  });

  constructor(private to:TogetherService, private router:Router) { }

  ngOnInit() {
    $("#datepicker").datepicker();
  }

  @ViewChild("file") myUpload:ElementRef;
  together:Together = new Together(null,"","","","","","","","","","","","");
  imgUrl:string = "./assets/img/add.jpeg";

  doUpload(){
    //待上传文件队列
    console.log(this.uploader.queue);

    if(this.uploader.queue.length==0){
      console.log("没有待上传的文件");
      return;
    }
    //单文件上传 ==>传递的文件 最后被添加的队列的文件
    let index = this.uploader.queue.length-1;
    
    this.uploader.queue[index].onSuccess = (response,status,headers)=>{
      if(status==200){
        console.log(response);
      }else{
        console.log("服务器不通，请稍后再试");
      }
    }
    this.uploader.queue[index].upload();


    console.log(this.together.title);
    console.log(this.together.tel);
    console.log(this.together.qq);
    console.log(this.together.weixin);
    console.log(this.together.toCity);
    console.log(this.together.fromCity);
    console.log(this.together.startDate);
    console.log(this.together.lastDays);
    console.log(this.together.limitNum);
    console.log(this.together.intro);
   
    
  

    //1 、上传文件
    //==>获取上传后的图片地址（php服务路径）
    this.uploadImgFunction((data)=>{
      //2、发布内容
      this.together.coverImg = data.imgUrl;
      this.to.publish(this.together).subscribe((data)=>{
        let result = data.json();        
        console.log(data.json());
        if(result.code=="success"){
          this.router.navigate(["/togetherhomepage"]);
        }
      })
    });

  }


  uploadImgFunction(callback:Function){
    if(this.uploader.queue.length==0){
      console.log("没有待上传的文件");
      return;
    }
    let index = this.uploader.queue.length-1;    
    this.uploader.queue[index].onSuccess = (response,status,header)=>{
      if(status==200){
        callback(JSON.parse(response));
      }else{
        console.log("服务器不同，请稍后再试");
      }
    }
    this.uploader.queue[index].upload();
  }



  clickFile(){
   
    this.myUpload.nativeElement.click();
  }
  selectFile(event:any){
    let that = this;
    // 存在文件渲染的类
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    
    reader.onload = function(){
      that.imgUrl = this.result;
    }
  }
}
