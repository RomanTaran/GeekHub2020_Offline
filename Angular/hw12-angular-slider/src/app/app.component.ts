import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hw12-angular-slider';
  public imageSlides: Array<string> = [
    './assets/images/1.jpg',
    './assets/images/2.jpg',
    './assets/images/3.jpg',
    './assets/images/4.jpg',
    './assets/images/5.jpg',
    './assets/images/6.jpg',
    './assets/images/7.jpg',
    './assets/images/8.jpg',
    './assets/images/9.jpg',
    './assets/images/10.jpg',
    './assets/images/11.jpg',
    './assets/images/12.jpg',
    './assets/images/13.jpg',
    './assets/images/14.jpg',
    './assets/images/15.jpg'
  ];

  public cardsSlides: Array<string> = [
    './assets/cards/1.jpg',
    './assets/cards/2.jpg',
    './assets/cards/3.jpg',
    './assets/cards/4.jpg',
    './assets/cards/5.jpg',
    './assets/cards/6.jpg',
    './assets/cards/7.jpg',
    './assets/cards/8.jpg',
    './assets/cards/9.jpg',
    './assets/cards/10.jpg',
    './assets/cards/11.jpg',
    './assets/cards/12.jpg',
    './assets/cards/13.jpg',
    './assets/cards/14.jpg',
    './assets/cards/15.jpg'
  ];
  public textSlides: Array<string> = [
    'One',
    'Two',
    'Three',
    'Four',
    'Five',
    'Six',
    'Seven',
    'Eight',
    'Nine',
    'Ten',
    'Eleven',
    'Twelve',
    'Thirteen',
    'Fourteen',
    'Fivteen'
  ];
}
