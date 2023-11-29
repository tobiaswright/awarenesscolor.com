import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-color-list',
  templateUrl: './color-list.component.html',
  styleUrls: ['./color-list.component.css']
})

export class ColorListComponent implements OnInit {
  @Input() colorList: any
  @Input() isHome: any
  @Input() title: any;
  list: any[] = [];
  filterBy: any;
  


  constructor() {}

  ngOnInit() {
    this.list = this.colorList;
    this.AddToolTips();
    // this.title = this.colorList[0].htmlcolor
  }

  private AddToolTips() {
    this.list.forEach( item => {
      if ( item.causeFull === "") {
        item.causeFull = item.cause
      }
    })
  }
}
