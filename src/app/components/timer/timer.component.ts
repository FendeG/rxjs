import { Component, OnInit } from '@angular/core';
import { Observable, of, fromEvent, asyncScheduler, timer, interval } from 'rxjs';
import { map, mapTo, scan, startWith, throttleTime ,filter} from 'rxjs/operators';


const timer$ = interval(1000);

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  countdownStart = 3;
  countDownTimer = 0;

  constructor() { }

  ngOnInit() {
    timer$.pipe(
      mapTo(-1),
      scan((acc, curr) => acc + curr, this.countdownStart),
    
      startWith(this.countdownStart)
    ).subscribe(data => {
      if (data === 0) {
        this.countdownStart = 3;
        console.log('start agiain');
      }
      this.countDownTimer = data;
      
    })
  }

}
