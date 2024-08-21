import { Component, OnInit, input  } from '@angular/core';
import { ColorData } from '../color-data.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-color-list',
  templateUrl: './color-list.component.html',
  styleUrls: ['./color-list.component.css'],
})

export class ColorListComponent {
  list: ColorData[] = [];
  isHome = input<boolean>();
  title = input<string>();
  filterBy: string = "";

  constructor (private data: DataService) {
    this.list = data.getList();
    // this.list = data
  }
}
