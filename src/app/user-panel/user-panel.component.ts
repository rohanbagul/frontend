import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {

  profileData:any={
    name:"deepak",
    email:"deepak@gnail.com"
  };
  
  
  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  showProfile(){
    const navigationExtras:NavigationExtras={
      state:{
        customData:this.profileData
      }
    };
    this.router.navigate(['userPanel/userProfile'],navigationExtras);
  }
  showPost(){ 
    const navigationExtras:NavigationExtras={
      state:{
        customData:this.profileData
      }
    };
    this.router.navigate(['userPanel/seePost'],navigationExtras);
  }
  generatePost(){
    const navigationExtras:NavigationExtras={
      state:{
        customData:this.profileData
      }
    };
    this.router.navigate(['userPanel/generatePost'],navigationExtras);
  }
  showHome(){
    const navigationExtras:NavigationExtras={
      state:{
        customData:this.profileData
      }
    };
    this.router.navigate(['userPanel'],navigationExtras);
  }
}
