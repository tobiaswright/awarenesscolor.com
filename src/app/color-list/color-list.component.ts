import { Component, OnInit  } from '@angular/core';
import { DataService } from './../services/data.service'

@Component({
  selector: 'app-color-list',
  templateUrl: './color-list.component.html',
  styleUrls: ['./color-list.component.css']
})
export class ColorListComponent implements OnInit {
  list: { cause: string; htmlcolor: string; }[] = [];

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.list = this.data.getList()
  }
}
