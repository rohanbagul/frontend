import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  // data:any={
  //   name:"deepak",
  //   email:"acbabcba"
  // };
  data:any=window.history.state.customData;
  
  @Input() item = ''; 
  constructor() { }

  ngOnInit(): void {
  }

}
