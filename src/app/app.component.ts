import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  posts: Observable<any> | undefined;
  constructor(private http: HttpClient) { }
  title = 'angular-service-worker';

  ngOnInit() {
    this.posts = this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
}
