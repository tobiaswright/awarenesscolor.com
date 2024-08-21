import { Injectable, } from '@angular/core';
import { ColorData, ColorMap } from '../color-data.model';
import data from '../../assets/data.json';
import colorMap from '../../assets/color-map.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private combinedColorData: ColorData[];
  // private colorData = data;

  constructor() {
    //think about create this in to a service
    // this.data = this.data.sort
    //copies the data?
    // let colorDataCopy = this.colorData.slice(0);
    let sortedColorData = this.sortList(data, "cause");
    let map = this.createMap(  this.sortList(colorMap, "displayName" ));

    this.combinedColorData = this.combineData(sortedColorData, map);
  }


  getList(){
    return this.combinedColorData
  }

  getMap(){
    return colorMap
  }

  private createMap(array: ColorMap[]) {
    let map = new Map();
    array.forEach(item => {
      map.set(item.name, {...item});
    })
    return map
  }

  private combineData(data: any[], map: Map<string, ColorMap>) {
   return data.map( (item) => {
      let colorArry = item.colorData.htmlcolor.split(",");

      if ( item.causeFull === "") {
        item.causeFull = item.cause;
      }

       return {
        ...item,
        id: Math.random(),
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

  private sortList( arr: any[], prop: string) {
    return arr.sort( (a:any,b:any) => {
      let x = a[prop].toLowerCase();
	    let y = b[prop].toLowerCase();
      return x.localeCompare(y)
    })
  }
}
