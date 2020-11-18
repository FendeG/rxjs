import { Component, OnInit } from '@angular/core';
import { Observable, of, fromEvent, asyncScheduler } from 'rxjs';
import { map, throttleTime } from 'rxjs/operators';


function calcPerc(element) {
  const {
    scrollTop,
    scrollHeight,
    clientHeight
  } = element;

  return (scrollTop / (scrollHeight - clientHeight)) * 100;
}
const scroll$ = fromEvent(window, 'scroll');

const progress$ = scroll$.pipe(
  throttleTime(80, asyncScheduler, { leading: false, trailing: true }),
  map(({ target }) => calcPerc(target['documentElement']))
);


const progressBar = document.querySelector(
  '.progress-bar'
);

@Component({
  selector: 'app-scroll-event',
  templateUrl: './scroll-event.component.html',
  styleUrls: ['./scroll-event.component.scss']
})
export class ScrollEventComponent implements OnInit {

  perc: number;
  constructor() { }

  ngOnInit() {
    progress$.subscribe(percent => {
      // progressBar.style.width = `${percent}`;
      this.perc = percent;
      console.log(percent);
    });
  }

}
