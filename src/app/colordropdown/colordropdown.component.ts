import { Component, OnInit, Input } from '@angular/core';
import { DataService } from './../services/data.service'
import { Router } from '@angular/router';
import { ColorMap } from '../color-map.model';

@Component({
  selector: 'app-colordropdown',
  templateUrl: './colordropdown.component.html',
  styleUrls: ['./colordropdown.component.css']
})
export class ColordropdownComponent implements OnInit {
  @Input() colorData: ColorMap = {name: "", displayName:"",hexCode:""}
  colorMap: ColorMap[] = []
  selectedColor: string = ""

  constructor(private data:DataService, private router: Router) {}

  ngOnInit(): void {
    this.colorMap  = this.data.getMap();
  }

  filterColor() {
    this.router.navigate( [this.selectedColor] );
  }
}
