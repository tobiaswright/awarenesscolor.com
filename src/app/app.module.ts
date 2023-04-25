import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorCardComponent } from './color-card/color-card.component';
import { ColorListComponent } from './color-list/color-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorCardComponent,
    ColorListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
