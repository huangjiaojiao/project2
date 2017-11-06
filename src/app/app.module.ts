import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './components/login/login.component';
import { RegistComponent } from './components/regist/regist.component';
import { IndexComponent } from './components/index/index.component';
import { FooterComponent } from './components/footer/footer.component';
import { AddtogetherComponent } from './components/addtogether/addtogether.component';
import { NavComponent } from './components/nav/nav.component';
import { TogetherhomepageComponent } from './components/togetherhomepage/togetherhomepage.component';
import { TogetherdetailComponent } from './components/togetherdetail/togetherdetail.component';
import { TournotedetailComponent } from './components/tournotedetail/tournotedetail.component';
import { AddtournoteComponent } from './components/addtournote/addtournote.component';
import { UserinfoComponent } from './components/userinfo/userinfo.component';
import { SecureComponent } from './components/secure/secure.component';
import { HeadComponent } from './components/head/head.component';
import { MytournoteComponent } from './components/mytournote/mytournote.component';
import { MytogetherComponent } from './components/mytogether/mytogether.component';
import { UEditorModule, UEditorConfig } from 'ngx-ueditor';
import { MainComponent } from './components/main/main.component';
import { UserService } from './services/user/user.service';
import { UsersettingComponent } from './components/usersetting/usersetting.component';
import { MyfabuComponent } from './components/myfabu/myfabu.component';
import { FileUploadModule } from '_ng2-file-upload@1.2.1@ng2-file-upload';
import { CommonModule } from '@angular/common';
import { TournoteService } from './services/tournote/tournote.service';
import { TogetherService } from './services/together/together.service';
import { CommentService } from './services/comment/comment.service';
import { JoinService } from './services/join/join.service';
import { SearchService } from './services/search/search.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistComponent,
    IndexComponent,
    FooterComponent,
    AddtogetherComponent,
    NavComponent,
    TogetherhomepageComponent,
    TogetherdetailComponent,
    TournotedetailComponent,
    AddtournoteComponent,
    UserinfoComponent,
    SecureComponent,
    HeadComponent,
    MytournoteComponent,
    MytogetherComponent,
    MainComponent,
    UsersettingComponent,
    MyfabuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    UEditorModule,
    CommonModule,
    FileUploadModule
  ],
  providers: [
    UEditorConfig,
    UserService,
    TournoteService,
    TogetherService,
    CommentService,
    JoinService,
    SearchService
    
    
    
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
