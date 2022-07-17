import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
// import { UserloginComponent } from './userlogin/userlogin.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { SubNavbarComponent } from './sub-navbar/sub-navbar.component';
import { PostComponent } from './post/post.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { GeneratePostComponent } from './generate-post/generate-post.component';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import { NoPageComponent } from './no-page/no-page.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import{FormsModule} from "@angular/forms";
import {MatIconModule} from '@angular/material/icon';
import { AdminUserOperationsComponent } from './admin-user-operations/admin-user-operations.component';
import { AdminInterfaceComponent } from './admin-interface/admin-interface.component';
import { AdminPostOperationsComponent } from './admin-post-operations/admin-post-operations.component';
import { AdminCommentOperationComponent } from './admin-comment-operation/admin-comment-operation.component';
import { UserAllPostsComponent } from './user-all-posts/user-all-posts.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    UserPanelComponent,
    SubNavbarComponent,
    PostComponent,
    AdminPanelComponent,
    UserProfileComponent,
    GeneratePostComponent,
    NoPageComponent,
    AdminUserOperationsComponent,
    AdminInterfaceComponent,
    AdminPostOperationsComponent,
    AdminCommentOperationComponent,
    UserAllPostsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatIconModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
