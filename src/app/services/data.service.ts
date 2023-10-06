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

  constructor() {

    //think about create this in to a service
    // this.data = this.data.sort

    //copies the data?
    let sortedData = this.data.slice(0);
   
    sortedData.sort(function(a,b) {
	    let x = a.cause.toLowerCase();
	    let y = b.cause.toLowerCase();
      return x.localeCompare(y)
    });

    let map = this.createMap(colorData);

    this.newdata = this.combineData(sortedData, map);
  }


  getList(){
    return this.newdata
  }


  private createMap(array: any[]) {
    let map = new Map()
    array.forEach(item => {
      map.set(item.name, {...item})
    })
    return map
  }

  private combineData(data: any[], map: Map<any, any>) {
   return data.map( (item: { htmlcolor: string; }) => {
      let colorArry = item.htmlcolor.split(",")
      
      if ( colorArry.length === 1) {
        let colorData  = map.get(item.htmlcolor)
        let newColorData = {...colorData, multi:false}
        return {...item, colorData: newColorData}
      } else {
        return {
          ...item, colorData: {htmlName: colorArry, displayName: map.get(colorArry[0])?.displayName + ", " + map.get(colorArry[1])?.displayName, hexCode: [map.get(colorArry[0])?.hexCode, map.get(colorArry[1])?.hexCode], multi: true}
      }
    }
    }) 
  }
}
