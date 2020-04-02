import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Costos2Component } from './costos2.component';

describe('Costos2Component', () => {
  let component: Costos2Component;
  let fixture: ComponentFixture<Costos2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Costos2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Costos2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
