import { Component, OnInit } from '@angular/core';
import { TournoteService } from '../../services/tournote/tournote.service';
declare var Swiper: any;
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  tours:Array<any> = [];
  
  constructor(private ts:TournoteService) { }

  ngOnInit() {
    this.findAllTour();
    
    window.onload=function(){
      var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        autoplay:2000,
        // 如果需要分页器
        paginationClickable:true,
        pagination: '.swiper-pagination',
        paginationBulletRender:function(swiper,index,className){
          return '<span class="'+ className +'" >'+
          `<img width=100 height=50 src="../../../assets/img/swiperImg/show0${index +1}.jpeg">`+'</span>';
        },
        
        // 如果需要前进后退按钮
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        
        // 如果需要滚动条
        scrollbar: '.swiper-scrollbar',
      })        
    }
  
  }

    // 查询
    findAllTour(){
      this.ts.findByAllTour().subscribe((data)=>{
        let result = data.json();
        if(result.code=="success"){
          this.tours = result.data;
          return;
        }
        console.log("查询失败");
      })
    }
  

}
