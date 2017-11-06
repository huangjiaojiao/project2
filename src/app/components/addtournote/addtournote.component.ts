import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TournoteService } from '../../services/tournote/tournote.service';
import { UEditorComponent } from '_ngx-ueditor@1.0.7@ngx-ueditor';
import { Tour } from '../../extras/tour';
import { FileUploader } from '_ng2-file-upload@1.2.1@ng2-file-upload';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addtournote',
  templateUrl: './addtournote.component.html',
  styleUrls: ['./addtournote.component.css']
})
export class AddtournoteComponent implements OnInit {
  uploader:FileUploader = new FileUploader({
    // 上传地址
    url:"/tournote/fileUpload.php",
    // 请求类型
    method:"POST",
    // 配置项没有没有用的
    // 上传时的文件key
    itemAlias:"uploadedfile"
  });

  constructor(private ts:TournoteService, private router:Router) { }

  ngOnInit() {
  }



  //ue操作
  @ViewChild("ue") 
  ue:UEditorComponent;
  tour:Tour = new Tour(null,"","","","","","","");
  // 需要去导入 ElementRef 类型
  @ViewChild("file") myUpload:ElementRef;
  imgUrl:string = "./assets/img/page_default.jpg";


  getContent(){
    //上传文件开始
    // 待上传文件队列
    console.log(this.uploader.queue);
    // 判断选择了文件
    // 1、多文件判断
    // 2、单文件判断  ==> 保证文件队列中至少有一个文件待上传
    if(this.uploader.queue.length==0){
      console.log("没有待上传的文件");
      return;
    }
    // 单文件上传  ==>  传递的是哪一个文件 最后被添加到队列的文件
    let index = this.uploader.queue.length-1;
    // 定义一个 上传回调，判断文件上传的结果或 服务器返回值
    // response 响应对象（包含 服务器返回的参数）
    // status HTTP请求状态  （200  404  500   302 ……）
    // headers   响应头
    this.uploader.queue[index].onSuccess = (response,status,headers)=>{
      if(status==200){
        // JSON.parse()   只能解析标准的JSON 字符串
        // eval("("+obj+")");   js 代码执行函数  eval(“1+1”)  ==> 2
        // let temp = JSON.parse(response);
        console.log(response);
      }else{
        console.log("服务器不通，请稍后再试");
      }
    }

    //开始上传
    this.uploader.queue[index].upload();

    //上传文件结束

    //反射
    console.log(this.ue.Instance.getContent());
    console.log(this.tour.title);
    console.log(this.tour.type);
    this.tour.content = this.ue.Instance.getContent();


    //1 、上传文件
    //==>获取上传后的图片地址（php服务路径）
    this.uploadImgFunction((data)=>{
      //2、发布内容
      this.tour.contentImg = data.imgUrl;
      this.ts.publish(this.tour).subscribe((data)=>{
        let result = data.json();
        console.log(data.json());
        if(result.code=="success"){
          this.router.navigate(["/"]);
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
    // console.log(1);
    // @ViewChild 获取当前组件html 中任意的 包装后的 页面元素
    // 可以理解为 id 选择器  @ViewChild(页面中元素的id)
    // console.log(this.myUpload);
    this.myUpload.nativeElement.click();
  }
  selectFile(event:any){
    let that = this;
    // 存在文件渲染的类
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    // console.log(event);
    // 不要使用 => 函数
    reader.onload = function(){
      that.imgUrl = this.result;
    }
  }

}
