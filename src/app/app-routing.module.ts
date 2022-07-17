import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { GeneratePostComponent } from './generate-post/generate-post.component';
import { PostComponent } from './post/post.component';
import { NoPageComponent } from './no-page/no-page.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { Routes, RouterModule } from '@angular/router';
import { AdminUserOperationsComponent } from './admin-user-operations/admin-user-operations.component';
import { AdminInterfaceComponent } from './admin-interface/admin-interface.component';
import { AdminPostOperationsComponent } from './admin-post-operations/admin-post-operations.component';
import { AdminCommentOperationComponent } from './admin-comment-operation/admin-comment-operation.component';
// import { UserloginComponent } from './userlogin/userlogin.component';
import { UserAllPostsComponent } from './user-all-posts/user-all-posts.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    // pathMatch:'full'
  },
  // {
  //   path:'login',
  //   // component:UserloginComponent,
  //   // pathMatch:'full'
  // },

  {
    path:"userPanel",
    component:UserPanelComponent,
    // pathMatch:"full",
    children:[
      {path:'userProfile',component:UserProfileComponent,},
      {path:'generatePost',component:GeneratePostComponent},
      {path:'seePost',component:UserAllPostsComponent},
      {path:"",component:PostComponent},
    ]

  },
  {
    path:"adminPanel",
    component:AdminPanelComponent,
    // pathMatch:"full"
    children:[
      {path:'adminUserOp',component:AdminUserOperationsComponent},
      {path:'adminPostOp',component:AdminPostOperationsComponent},
      {path:'adminCommentOp',component:AdminCommentOperationComponent },
      {path:'',component:AdminInterfaceComponent},
    ]
  },
  {
    path:"**",
    component:NoPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
