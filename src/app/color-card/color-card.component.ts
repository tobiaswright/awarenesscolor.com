import { Component, input } from '@angular/core';

@Component({
  selector: 'app-color-card',
  templateUrl: './color-card.component.html',
  styleUrls: ['./color-card.component.css']
})
export class ColorCardComponent {
  cause = input<string>('');
  colorName = input<string>('')
  constructor() { }
}
