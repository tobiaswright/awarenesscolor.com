import { Component, OnInit } from '@angular/core';
import { DataService } from './../services/data.service';
import { ColorData } from '../color-data.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  list: ColorData[] = [];

  constructor(private data: DataService) {
    this.list = this.data.getList()
  }

  ngOnInit(): void {
  }

}
