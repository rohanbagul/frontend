import { Component, OnInit } from '@angular/core';
import { UserData } from '../admin-post-operations/userData';
import { UserDataService } from '../service/user-data.service';

@Component({
  selector: 'app-admin-user-operations',
  templateUrl: './admin-user-operations.component.html',
  styleUrls: ['./admin-user-operations.component.css']
})
export class AdminUserOperationsComponent implements OnInit {
  users!: UserData[];

  constructor(private u:UserDataService) {

  }
  private getAllUsers(){
    this.u.getAllUsers().subscribe(data=>{this.users=data});
    // console.log(this.users);
  }
  ngOnInit(): void {
    this.getAllUsers();
  }

}
