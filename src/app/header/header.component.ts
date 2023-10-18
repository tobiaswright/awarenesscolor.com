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
    this.color = this.getRandomColor(this.data.getList() );
  }

  private getRandomColor( array: any[] ) {
    let color = array[Math.floor(Math.random() * array.length)]

    if (!color.colorData.multi && color.htmlcolor !== "white") {
      return color.htmlcolor;
    } else {
      this.getRandomColor( array )
    }
  }
  
}
