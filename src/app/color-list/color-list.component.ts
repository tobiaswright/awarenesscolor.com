import { Component, OnInit  } from '@angular/core';
import { DataService } from './../services/data.service'

interface colorShapeo {
  cause: string,
  htmlcolor: string,
  colorData: {
   displayName: string | null,
   htmlName: string | null,
   hexCode: string | null,
   class: string | null}
 }[]

@Component({
  selector: 'app-color-list',
  templateUrl: './color-list.component.html',
  styleUrls: ['./color-list.component.css']
})

export class ColorListComponent implements OnInit {
  list: any[] = [];
  filterBy: any;
   

  constructor(private data: DataService) { }

  ngOnInit() {
    this.list = this.data.getList()
    this.truncateLongNames()
  }

  truncateLongNames() {
    this.list.forEach( item => {
      if ( item.cause.length > 17 ) {
        item.cause = item.cause.slice(0,17) + "..."
      }
    })
  }

}
