import {AfterViewInit, Component, Inject, Input, OnDestroy, ViewChild} from '@angular/core';
import {fromEvent, Subscription} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements AfterViewInit, OnDestroy {

  constructor(@Inject(DOCUMENT) private document: any) {
  }

  @Input() content: Array<string> = [];
  public width = 250;
  public count = 5;
  public position = 0;
  private subscriptions: Subscription[] = [];

  @ViewChild('draggable') draggableElement: any;
  public numberOfElements = 0;

  ngAfterViewInit(): void {
    this.numberOfElements = this.content.length;
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
    console.log(this.position);
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
