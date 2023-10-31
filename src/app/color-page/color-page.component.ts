import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-color-page',
  templateUrl: './color-page.component.html',
  styleUrls: ['./color-page.component.css']
})
export class ColorPageComponent implements OnInit {
  title = ""

  constructor(private router: Router) {

    // https://stackoverflow.com/questions/59552387/how-to-reload-a-page-in-angular-8-the-proper-way
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };

    this.title = this.router.url
   }

  ngOnInit(): void {
  }

}
