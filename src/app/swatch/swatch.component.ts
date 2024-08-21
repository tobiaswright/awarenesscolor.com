import { Component, input } from '@angular/core';
import { ColorMap } from '../color-map.model';

@Component({
  selector: 'app-swatch',
  templateUrl: './swatch.component.html',
  styleUrls: ['./swatch.component.css']
})
export class SwatchComponent {
  colorData = input.required<any>();

  constructor() {
    console.log(this.colorData)
  }

  calculateStyles(item: any ) {
    // console.log(item, "pppp")
    if (item.multi) {
      console.log( typeof(item.hexCode))
      let gradient = item.hexCode.reduce( (acc: string, curr: string) => {
        return acc + "," + curr
      })
      return 'background: linear-gradient(45deg,' + gradient +')'
    }
    return 'background-color:' + item.hexCode
  }

}
