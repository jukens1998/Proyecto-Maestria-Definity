import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Costos1Component } from './costos1.component';

describe('Costos1Component', () => {
  let component: Costos1Component;
  let fixture: ComponentFixture<Costos1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Costos1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Costos1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
