import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorCardComponent } from './color-card/color-card.component';
import { ColorListComponent } from './color-list/color-list.component';
import { DataService } from './services/data.service';
import { SwatchComponent } from './swatch/swatch.component';
import { IntroComponent } from './intro/intro.component';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ColordropdownComponent } from './colordropdown/colordropdown.component';
import { ColorPageComponent } from './color-page/color-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorCardComponent,
    ColorListComponent,
    SwatchComponent,
    IntroComponent,
    FilterPipe,
    FooterComponent,
    HeaderComponent,
    ColordropdownComponent,
    ColorPageComponent,
    HomePageComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
