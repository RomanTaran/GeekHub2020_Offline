import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TextSliderComponent } from './text-slider/text-slider.component';
import { CardsSliderComponent } from './cards-slider/cards-slider.component';
import { ImagesSliderComponent } from './images-slider/images-slider.component';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    TextSliderComponent,
    CardsSliderComponent,
    ImagesSliderComponent,
  ],
  imports: [
    BrowserModule,
    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
