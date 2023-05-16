import { Injectable, } from '@angular/core';
import data from '../../assets/data.json'
import colorData from '../../assets/color-map.json'


@Injectable({
  providedIn: 'root'
})
export class DataService {
  newdata
  data = data
  colorData = colorData
  map = new Map()

  constructor() {

    //think about create this in to a service
    // this.data = this.data.sort

    let sortedData = this.data.slice(0);
    sortedData.sort(function(a,b) {
	var x = a.cause.toLowerCase();
	var y = b.cause.toLowerCase();
	return x < y ? -1 : x > y ? 1 : 0;
});

    this.createMap();
    this.newdata = this.combineData(sortedData);
  }


  getList(){
    return this.newdata
  }


  private createMap(): void {
    colorData.forEach(item => {
      this.map.set(item.name, {...item})
    })
  }

  private combineData(data: any[]) {
   return data.map( (item: { htmlcolor: string; }) => {
      let colorArry = item.htmlcolor.split(",")
      
      if ( colorArry.length === 1) {
        let colorData  = this.map.get(item.htmlcolor)
        let newColorData = {...colorData, multi:false}
        return {...item, colorData: newColorData}
      } else {
        return {
          ...item, colorData: {htmlName: colorArry, displayName: item.htmlcolor, hexCode: [this.map.get(colorArry[0])?.hexCode, this.map.get(colorArry[1])?.hexCode], multi: true}
      }
    }
    }) 
  }
}
