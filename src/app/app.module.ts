import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorCardComponent } from './color-card/color-card.component';
import { ColorListComponent } from './color-list/color-list.component';
import { DataService } from './services/data.service';
import { SwatchComponent } from './swatch/swatch.component';
import { FilterComponent } from './filter/filter.component';
import { IntroComponent } from './intro/intro.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorCardComponent,
    ColorListComponent,
    SwatchComponent,
    FilterComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
