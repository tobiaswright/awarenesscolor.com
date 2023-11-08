import { Component, OnInit, Input } from '@angular/core';
import { DataService } from './../services/data.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  list: any[] = [];

  constructor(private data: DataService) {
    this.list = this.data.getList()
  }

  ngOnInit(): void {
  }

}
