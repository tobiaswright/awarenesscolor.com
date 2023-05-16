import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-color-card',
  templateUrl: './color-card.component.html',
  styleUrls: ['./color-card.component.css']
})
export class ColorCardComponent {
  @Input() cause:string = ""
  @Input() displayName:string =""
  constructor() { }


}
