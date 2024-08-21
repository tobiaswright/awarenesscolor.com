import { Component, input } from '@angular/core';
import { ColorMap } from '../color-map.model';

@Component({
  selector: 'app-swatch',
  templateUrl: './swatch.component.html',
  styleUrls: ['./swatch.component.css']
})
export class SwatchComponent {
  colorData = input.required<any>();

  calculateStyles(item: { multi: boolean; hexCode: any; } ) {
    console.log(item, "pppp")
    if (item.multi) {
      let gradient = item.hexCode.reduce( (acc: string, curr: string) => {
        return acc + "," + curr
      })
      return 'background: linear-gradient(45deg,' + gradient +')'
    }
    return 'background-color:' + item.hexCode
  }

}
