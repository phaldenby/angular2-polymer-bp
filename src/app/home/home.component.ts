import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  testData = 'test data';

  testClick(event){
    let self = this;
    console.log(self.testData);
    alert("testData is now: "+this.testData);
    // console.log(event);
  }

  constructor() { }

  ngOnInit() {
  }

}
