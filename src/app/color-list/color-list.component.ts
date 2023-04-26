import { Component, OnInit  } from '@angular/core';
import { DataService } from './../data.service'

@Component({
  selector: 'app-color-list',
  templateUrl: './color-list.component.html',
  styleUrls: ['./color-list.component.css']
})
export class ColorListComponent {
  constructor(private data: DataService) { }

  list = this.data.getList()

  
}
