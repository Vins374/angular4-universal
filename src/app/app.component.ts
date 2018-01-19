import { Component } from '@angular/core';
import { BrowserModule, Title, Meta }  from '@angular/platform-browser';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  // 

  constructor(private titleService:Title, private metaService:Meta,private http:HttpClient) {
  	console.log("coming here");
  	


  	// this.http.get("http://localhost/shoppe/api/v2/home-page-mobile?url_check="+true,{
   //    headers: new HttpHeaders({
   //      'Content-Type':'application/json',
   //      'Authorization': '1234567',
   //    })}
   //  ).subscribe(data => {
   //    console.log(data['meta']);
   //    let title = data['meta'];
   //    this.titleService.setTitle(title.title);    

      
   //    // this.commonService.fun_change_meta(data['meta']);
      
   //  });

  }

}
