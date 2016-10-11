import { Component, OnInit } from '@angular/core';
import { ApiService } from './../services/api.service.ts';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [ApiService]
})
export class AboutComponent implements OnInit {

  isSpinning = false;
  apiData = "";

  getApiData(){
    let self = this;

    self.isSpinning = true;

    this.apiService.getTest().then( result => {
      this.apiData = result;
      this.isSpinning = false;
    })
  }

  constructor(private apiService:ApiService) { }

  ngOnInit() {
  }

}
