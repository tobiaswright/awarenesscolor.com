import { Component, OnInit, input  } from '@angular/core';
import { ColorData } from '../color-data.model';

@Component({
  selector: 'app-color-list',
  templateUrl: './color-list.component.html',
  styleUrls: ['./color-list.component.css'],
})

export class ColorListComponent implements OnInit {
  colorList = input.required<ColorData[]>();
  isHome = input<boolean>();
  title = input<string>();
  filterBy: string = "";

  ngOnInit() {
    console.log( this.colorList(),  "hello")
    this.AddToolTips();
  }

  private AddToolTips() {
    this.colorList().forEach( item => {
      if ( item.causeFull === "") {
        item.causeFull = item.cause
      }
    })
  }
}
