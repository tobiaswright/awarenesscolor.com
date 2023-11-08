import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './../services/data.service';

@Component({
  selector: 'app-color-page',
  templateUrl: './color-page.component.html',
  styleUrls: ['./color-page.component.css']
})
export class ColorPageComponent implements OnInit {
  list: any[] = [];
  color = ""

  constructor(private router: Router, private data: DataService) {

    // https://stackoverflow.com/questions/59552387/how-to-reload-a-page-in-angular-8-the-proper-way
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };

    this.color = this.router.url.slice(1)
   }

  ngOnInit(): void {
    this.list = this.filterList(this.data.getList());
  }

  private filterList( arr: any[]) {
    return arr.filter( ( item ) => item.htmlcolor === this.color)
  }

}
