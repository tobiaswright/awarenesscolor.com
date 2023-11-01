import { Injectable, } from '@angular/core';
import { ColorData } from '../color-data.model';
import data from '../../assets/data.json';
import { ColorMap } from '../color-map.model';
import colorMap from '../../assets/color-map.json';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  combinedColorData: ColorData[];
  colorData: ColorData[] = data;
  colorMap: ColorMap[] = colorMap

  constructor() {

    //think about create this in to a service
    // this.data = this.data.sort

    //copies the data?
    let sortedColorData = this.colorData.slice(0);
   
    sortedColorData.sort(function(a,b) {
	    let x = a.cause.toLowerCase();
	    let y = b.cause.toLowerCase();
      return x.localeCompare(y)
    });

    let map = this.createMap(colorMap);

    this.combinedColorData = this.combineData(sortedColorData, map);
  }


  getList(){
    return this.combinedColorData
  }

  getMap(){
    return colorMap
  }

  private createMap(array: ColorMap[]) {
    let map = new Map()
    array.forEach(item => {
      map.set(item.name, {...item})
    })
    return map
  }

  private combineData(data: ColorData[], map: Map<any, any>) {
   return data.map( (item) => {
      let colorArry = item.htmlcolor.split(",")
       return {
        ...item,
        colorData: this.buildColorData(colorArry, map)
      }
    })
  }

  private buildColorData( item: string[], map: Map<any, any> ) {
    let displayName = "";
    let hexCode = [];

    if (item.length > 1) {
      for ( let i=0; i<item.length; i++) {
        displayName += map.get(item[i]).displayName
        hexCode.push(map.get(item[i]).hexCode)

        if ( item.length - 1 > i) {
          displayName += ", "
        }
      }

      return {
          htmlName: item,
          displayName: displayName,
          hexCode:hexCode,
          multi: true
        }
    }
 
    return {
      ...map.get(item[0]),
      multi:false
    }
  }
}
