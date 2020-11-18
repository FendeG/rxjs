import { Component, OnInit } from '@angular/core';
import { Observable,of,fromEvent } from 'rxjs';
import {filter} from 'rxjs/operators'
import {map} from 'rxjs/operators'

const keyup$ = fromEvent(document, 'keyup'); // .subscribe(console.log);

const keycode$ = keyup$.pipe(
  map(event => event)
);

@Component({
  selector: 'app-course1',
  templateUrl: './course1.component.html',
  styleUrls: ['./course1.component.scss']
})
export class Course1Component implements OnInit {

  x: number;
  
   observer = {
     next: val => {
       console.log('next', val);
       this.x = val;
     },
    error: val => console.log('error',val),
    complete: () => console.log('Complete!')
   }
  
 
  
  constructor() { }

  ngOnInit() {
    const source$ = of(1, 2, 3, 4, 5).pipe(
      filter(x => x > 2)
    );

    source$.subscribe(this.observer);
    source$.subscribe(result => {
      console.log(result)
    });
    keycode$.subscribe(data => {
      console.log(data);
      console.log(data['code']);
      
    });
    

   

  }

}
