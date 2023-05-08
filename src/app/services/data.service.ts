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

    console.log("allo", this.newdata)
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
    //will remove this check once I figure out how I want to handle multi-colors
      let muliCheck = item.htmlcolor.split(",")


      if ( muliCheck.length === 1) {
        return {...item, colorData: (this.map.get(item.htmlcolor))
        }
      } else {
        return {
          ...item, colorData: {htmlName: "test", displayName: "test", hexCode: "test"}
      }
    }
    }) 
  }
}
