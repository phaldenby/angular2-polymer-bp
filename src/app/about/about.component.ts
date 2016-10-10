import { Component, OnInit } from '@angular/core';
import { ApiService } from './../services/api.service.ts';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [ApiService]
})
export class AboutComponent implements OnInit {

  apiData = "";
  getApiData(){

    let apiData = this.apiService.getTest().then( result => {
      console.log(result);
      this.apiData = result;
    })
  }

  constructor(private apiService:ApiService) { }

  ngOnInit() {
  }

}
