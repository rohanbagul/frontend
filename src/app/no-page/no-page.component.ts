import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-page',
  template: '<h1>no such url found</h1>',
  styleUrls: ['./no-page.component.css']
})
export class NoPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
