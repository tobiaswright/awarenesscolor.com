import { Component, OnInit } from '@angular/core';
import { DataService } from './../services/data.service'
import { Router } from '@angular/router';
import { ColorMap } from '../color-map.model';

@Component({
  selector: 'app-colordropdown',
  templateUrl: './colordropdown.component.html',
  styleUrls: ['./colordropdown.component.css']
})
export class ColordropdownComponent implements OnInit {
  colorMap: ColorMap[] = []
  selectedColor: string = ""

  constructor(private data:DataService, private router: Router) {}

  ngOnInit(): void {
    let map = this.data.getMap();

    this.colorMap = map.sort( (a:any,b:any) => {
      let x = a.displayName.toLowerCase();
	    let y = b.displayName.toLowerCase();
      return x.localeCompare(y)
    })
  }

  filterColor() {
    this.router.navigate( [this.selectedColor] );
  }
}
