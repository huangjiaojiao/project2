import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { RegistComponent } from './components/regist/regist.component';
import { AddtogetherComponent } from './components/addtogether/addtogether.component';
import { HeadComponent } from './components/head/head.component';
import { UserinfoComponent } from './components/userinfo/userinfo.component';
import { UsersettingComponent } from './components/usersetting/usersetting.component';
import { SecureComponent } from './components/secure/secure.component';
import { AddtournoteComponent } from './components/addtournote/addtournote.component';
import { MytogetherComponent } from './components/mytogether/mytogether.component';
import { MytournoteComponent } from './components/mytournote/mytournote.component';
import { MyfabuComponent } from './components/myfabu/myfabu.component';
import { TogetherhomepageComponent } from './components/togetherhomepage/togetherhomepage.component';
import { TournotedetailComponent } from './components/tournotedetail/tournotedetail.component';
import { TogetherdetailComponent } from './components/togetherdetail/togetherdetail.component';

const routes: Routes = [
  {path:'',component:MainComponent,children:[
    {path:'',component:IndexComponent},
    {path:'addtogether',component:AddtogetherComponent},
    {path:'usersetting',component:UsersettingComponent,children:[
      {path:'',component:UserinfoComponent},
      {path:'head',component:HeadComponent},
      {path:'secure',component:SecureComponent},
      {path:'userinfo',component:UserinfoComponent} 
    ]},
    {path:'addtournote',component:AddtournoteComponent},
    {path:'addtogether',component:AddtogetherComponent},
    {path:'index',component:IndexComponent},
    {path:'myfabu',component:MyfabuComponent,children:[
      {path:'',component:MytournoteComponent},
      {path:'mytogether',component:MytogetherComponent},
      {path:'mytournote',component:MytournoteComponent}
    ]},
    {path:'togetherhomepage',component: TogetherhomepageComponent},
    {path:'xijietournote/:tid',component: TournotedetailComponent},
    {path:'xijietogether/:tid',component: TogetherdetailComponent}
    
    
    
    
  ]},
  {path:'login',component:LoginComponent},
  {path:'regist',component:RegistComponent},
  
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
