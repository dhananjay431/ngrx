import { Component, OnInit, VERSION } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name :any;
  oa = (d) => d;
  aj(url) {
   let d2 = fetch(url).then(response => response.json());
    return from(d2);
  }
  ngOnInit() {
    this.name = this.aj('https://jsonplaceholder.typicode.com/users');
  }
}
