import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isAgeSent = false;

  constructor() { }

  ngOnInit() {
    // console.log('In home!');
    // console.log('Age sent : ' + this.isAgeSent);
  }

  ageDataFromChild(age) {
    // console.log('Age : ' + age);
    this.isAgeSent = true;
    // console.log('Age sent : ' + this.isAgeSent);
  }

}
