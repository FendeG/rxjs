import { Component, OnInit,ElementRef, ViewChild } from '@angular/core';
import { Observable, of, fromEvent ,interval} from 'rxjs';
import { map, mapTo ,scan,tap} from 'rxjs/operators';

const counter$ = interval(1000);

const counter1$ = counter$.pipe(
  mapTo(-1),
  scan((accumulator, current) => {
    return accumulator + current;
  }, 10)
); // .subscribe(console.log);

// counter$.pipe(
//   mapTo(-1)
// ).subscribe(console.log);

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss']
})
export class CountDownComponent implements OnInit {

  @ViewChild("counter") counter: ElementRef;
  
  constructor() { }

  ngOnInit() {
    counter1$.subscribe(value => {
      // console.log(value);
      this.counter.nativeElement.innerHTML = value;
    });
  }

}
