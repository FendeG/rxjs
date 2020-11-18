import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Course1Component } from './components/course1/course1.component';
import { ScrollEventComponent } from './components/scroll-event/scroll-event.component';
import { CountDownComponent } from './components/count-down/count-down.component';

@NgModule({
  declarations: [
    AppComponent,
    Course1Component,
    ScrollEventComponent,
    CountDownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
