import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-swatch',
  templateUrl: './swatch.component.html',
  styleUrls: ['./swatch.component.css']
})
export class SwatchComponent implements OnInit {
  @Input()
  colorData: {
    displayName: string;
    htmlName: string | string [];
    hexCode: string | string [];
    multi: boolean
  } = {
    displayName: '',
    htmlName: '',
    hexCode: '',
    multi: false
  }
  constructor() { }

  ngOnInit(): void {
  }

  calculateStyles(item: any) {
    if (item.colorData.multi) {
      let gradient = item.colorData.hexCode.reduce( (acc: string, curr: string) => {
        return acc + "," + curr
      })
      return 'background: linear-gradient(45deg,' + gradient +')'
    }
    return 'background-color:' + item.colorData.hexCode
  }

}
