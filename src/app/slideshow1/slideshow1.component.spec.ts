import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Slideshow1Component } from './slideshow1.component';

describe('Slideshow1Component', () => {
  let component: Slideshow1Component;
  let fixture: ComponentFixture<Slideshow1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Slideshow1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Slideshow1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
