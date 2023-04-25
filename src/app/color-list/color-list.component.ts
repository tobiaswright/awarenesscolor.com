import { Component } from '@angular/core';

@Component({
  selector: 'app-color-list',
  templateUrl: './color-list.component.html',
  styleUrls: ['./color-list.component.css']
})
export class ColorListComponent {
  list: {"cause":string, "htmlcolor":string}[] =[{"cause":"Breast Cancer","htmlcolor":"pink"},{"cause":"Birth Parents","htmlcolor":"pink"},{"cause":"Nursing Mothers","htmlcolor":"pink"}]
}
