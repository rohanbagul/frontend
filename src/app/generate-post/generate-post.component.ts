import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generate-post', 
  templateUrl: './generate-post.component.html',
  styleUrls: ['./generate-post.component.css']
})
export class GeneratePostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  doSubmitPost(data :any){
    console.log(data);
  }

}
