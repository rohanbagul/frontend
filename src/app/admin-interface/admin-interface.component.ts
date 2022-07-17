import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-admin-interface',
  templateUrl: './admin-interface.component.html',
  styleUrls: ['./admin-interface.component.css']
})
export class AdminInterfaceComponent implements OnInit {

  profileData:any={
    name:"deepak",
    email:"deepak@gnail.com"
  };
  router: any;
      
  constructor() { }

  ngOnInit(): void {
  }
  userOp(){
    const navigationExtras:NavigationExtras={
      state:{
        customData:this.profileData
      }
    };
    this.router.navigate(['adminPanel/adminUserOp'],navigationExtras);
  }
}
