import { Component, OnInit  } from '@angular/core';
import { DataService } from './../services/data.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  color: string = ""

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.color = this.data.getColor()
    console.log("hello",this.color, this.data.getColor())
  }
  
}
