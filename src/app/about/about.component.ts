import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
infos ={name:"Florent",email:"niflorent4@gmail.com"};
  constructor() { }

  ngOnInit() {
  }

}
