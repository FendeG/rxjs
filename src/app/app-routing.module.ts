import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScrollEventComponent } from './components/scroll-event/scroll-event.component';
import { Course1Component } from './components/course1/course1.component';
import { CountDownComponent } from './components/count-down/count-down.component';


const routes: Routes = [
  { path: 'intro', component: Course1Component },
  { path: 'scroll', component: ScrollEventComponent },
  { path: 'countdown', component: CountDownComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
