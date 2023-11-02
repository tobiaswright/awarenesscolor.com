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
   
    sortedColorData = this.sortList(sortedColorData, "cause")

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

  private sortList( arr: any[], prop: string) {
    return arr.sort( (a:any,b:any) => {
      let x = a[prop].toLowerCase();
	    let y = b[prop].toLowerCase();
      return x.localeCompare(y)
    })
  }
}
