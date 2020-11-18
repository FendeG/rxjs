import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollEventComponent } from './scroll-event.component';

describe('ScrollEventComponent', () => {
  let component: ScrollEventComponent;
  let fixture: ComponentFixture<ScrollEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
