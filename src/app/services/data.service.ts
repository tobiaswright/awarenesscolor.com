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
   let combinedData =  data.map( (item) => {
      let colorArry = item.htmlcolor.split(",")
       return {
        ...item,
        colorData: this.buildColorData(colorArry, map)
      }
    })

    return combinedData
  }

  private buildColorData( item: any[string], map: { get: (arg0: any) => { (): any; new(): any; displayName: string; hexCode: any; }; } ) {
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
