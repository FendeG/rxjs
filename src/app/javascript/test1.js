import { Observable } from 'rxjs';
import { of } from 'rxjs';
const observer = {
    next: val => console.log('next',val),
    error: val => console.log('error',val),
    complete: () => console.log('Complete!')
}
   
const source$ = of(1, 2, 3, 4, 5);

source$.subscribe(observer);