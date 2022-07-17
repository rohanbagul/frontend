import { Component, OnInit } from '@angular/core';
import { PostData } from '../post/postData';
import { UserDataService } from '../service/user-data.service';

@Component({
  selector: 'app-admin-post-operations',
  templateUrl: './admin-post-operations.component.html',
  styleUrls: ['./admin-post-operations.component.css']
})
export class AdminPostOperationsComponent implements OnInit {
  allPost!:PostData[];

  constructor( private usersPost:UserDataService) {
    // console.log(usersPost.getPostsForAdmin());
    // this.allPost=usersPost.getPostsForAdmin();

   }
   getAllPosts(){
     this.usersPost.getPostsForAdmin().subscribe(data=>{this.allPost=data})
     console.log(this.allPost);
   }

  ngOnInit(): void {
    this.getAllPosts();
  }

}
