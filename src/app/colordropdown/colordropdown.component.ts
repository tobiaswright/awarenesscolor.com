import { Component, OnInit } from '@angular/core';
import { DataService } from './../services/data.service'


@Component({
  selector: 'app-colordropdown',
  templateUrl: './colordropdown.component.html',
  styleUrls: ['./colordropdown.component.css']
})
export class ColordropdownComponent implements OnInit {
  colorList: any = []

  constructor(private data:DataService) {



   }

  ngOnInit(): void {
    let colorList = this.data.getMap();

    this.colorList = colorList.sort( (a:any,b:any) => {
      let x = a.displayName.toLowerCase();
	    let y = b.displayName.toLowerCase();
      return x.localeCompare(y)
    })
  }

}
