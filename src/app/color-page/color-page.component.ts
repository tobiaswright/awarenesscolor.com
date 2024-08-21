import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './../services/data.service';
import { ColorData } from '../color-data.model';

@Component({
  selector: 'app-color-page',
  templateUrl: './color-page.component.html',
  styleUrls: ['./color-page.component.css']
})
export class ColorPageComponent implements OnInit {
  list: ColorData[] = [];
  title = "";
  color = "";
  isValidColor = true

  constructor(private router: Router, private data: DataService) {

    // https://stackoverflow.com/questions/59552387/how-to-reload-a-page-in-angular-8-the-proper-way
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };

    this.color = this.router.url.slice(1)
   }

  ngOnInit(): void {
    this.list = this.data.getList()

    if (this.list.length > 0) {
      this.title = this.list[0].colorData?.displayName
      this.color = this.list[0].colorData?.name
    } else {
      this.isValidColor = false
    }

  }

  private filterList( arr: ColorData[]) {
    return arr.filter( ( item ) => item.colorData.htmlcolor === this.color)
  }

}
