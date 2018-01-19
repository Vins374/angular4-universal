import { Component, OnInit } from '@angular/core';
import { BrowserModule, Title, Meta }  from '@angular/platform-browser';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private titleService:Title, private metaService:Meta,private http:HttpClient) {
  	console.log("coming here");

  	this.http.get("http://localhost/shoppe/api/v2/home-page-mobile?url_check="+true,{
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': '1234567',
      })}
    ).subscribe(data => {
      console.log(data['meta']);
      let title = data['meta'];
      this.titleService.setTitle(title.title);    

      
      // this.commonService.fun_change_meta(data['meta']);
      
    });

  }

  ngOnInit() {
  }

}
