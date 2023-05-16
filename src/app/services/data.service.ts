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
    this.createMap();
    this.newdata = this.combineData();
  }


  getList(){
    return this.newdata
  }


  private createMap(): void {
    colorData.forEach(item => {

      this.map.set(item.name, {...item})
    })
  }

  private combineData() {
   return this.data.map( item => {
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
