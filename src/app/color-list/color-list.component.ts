import { Component, OnInit, Input  } from '@angular/core';
import { DataService } from './../services/data.service';

@Component({
  selector: 'app-color-list',
  templateUrl: './color-list.component.html',
  styleUrls: ['./color-list.component.css']
})

export class ColorListComponent implements OnInit {
  @Input() colorList: any
  list: any[] = [];
  filterBy: any;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.list = this.colorList;
    this.AddToolTips();
    this.truncateLongNames();
  }

  private truncateLongNames() {
    this.list.forEach( item => {
      if ( item.cause.length > 22 ) {
        item.cause = item.cause.slice(0,22) + "..."
      }
    })
  }

  private AddToolTips() {
    this.list.forEach( item => {
      if ( item.causeFull === "") {
        item.causeFull = item.cause
      }
    })
  }
}
