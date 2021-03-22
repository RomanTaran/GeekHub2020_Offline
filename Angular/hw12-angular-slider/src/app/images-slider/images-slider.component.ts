import {AfterViewInit, Component, Inject, OnDestroy, ViewChild} from '@angular/core';
import {fromEvent, Subscription} from 'rxjs';
import {DOCUMENT} from '@angular/common';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-images-slider',
  templateUrl: './images-slider.component.html',
  styleUrls: ['./images-slider.component.scss']
})
export class ImagesSliderComponent implements AfterViewInit, OnDestroy {

 public images: Array<string> = [
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
  public width = 250;
  public count = 5;
  public position = 0;
  public numberOfElements: number = this.images.length;
  private subscriptions: Subscription[] = [];

  @ViewChild('draggable') draggableElement: any;

  constructor(@Inject(DOCUMENT) private document: any) {
  }

  ngAfterViewInit(): void {
    this.initDrag();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }

  handlePrevClick = () => {
    this.position += this.width;
    this.position = Math.min(this.position, 0);
    this.draggableElement.nativeElement.style.transform = 'translate3d(' + this.position + 'px,0,0)';
  }

  handleNextClick = () => {
    this.position -= this.width;
    this.position = Math.max(this.position, -this.width * (this.numberOfElements - this.count));
    this.draggableElement.nativeElement.style.transform = 'translate3d(' + this.position + 'px,0,0)';
  }

  initDrag(): void {
    const dragStart$ = fromEvent<MouseEvent>(this.draggableElement.nativeElement, 'mousedown');
    const dragEnd$ = fromEvent<MouseEvent>(this.document, 'mouseup');
    const drag$ = fromEvent<MouseEvent>(this.document, 'mousemove').pipe(takeUntil(dragEnd$));

    let initialX: number;
    let currentX = 0;
    let dragSub: Subscription;

    const dragStartSub = dragStart$.subscribe((event: MouseEvent) => {
      initialX = event.clientX - currentX;

      dragSub = drag$.subscribe((e: MouseEvent) => {
        e.preventDefault();
        currentX = Math.max(Math.min(e.clientX - initialX, 0), -2500);
        this.draggableElement.nativeElement.style.transform = 'translate3d(' + currentX + 'px,0,0)';
      });
    });

    const dragEndSub = dragEnd$.subscribe(() => {
      let delta = 0;
      if (Math.abs(currentX % this.width) > this.width / 2) {
        delta = currentX - currentX % this.width - this.width;
      } else {
        delta = currentX - currentX % this.width;
      }
      this.draggableElement.nativeElement.style.transform = 'translate3d(' + delta + 'px,0,0)';
      currentX = delta;
      if (dragSub) {
        dragSub.unsubscribe();
      }
    });

    this.subscriptions.push.apply(this.subscriptions, [dragStartSub, dragEndSub]);
  }

}
