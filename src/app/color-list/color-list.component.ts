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
  list: {
    cause: string,
    htmlcolor: string,
    colorData: {
     displayName: string,
     htmlName: string[] | string,
     hexCode: string[] | string,
     multi: boolean}
   }[] = [];
   

  constructor(private data: DataService) { }

  ngOnInit() {
    this.list = this.data.getList()
  }

  calculateStyles(item: any) {
    if (item.item.colorData.multi) {
      return 'background: linear-gradient(45deg,' + item.item.colorData.hexCode[0] +',' + item.item.colorData.hexCode[1]+')'
    }
    return 'background-color:' + item.item.colorData.hexCode
  }
}
