import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Eficiencia1Component } from './eficiencia1.component';

describe('Eficiencia1Component', () => {
  let component: Eficiencia1Component;
  let fixture: ComponentFixture<Eficiencia1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Eficiencia1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Eficiencia1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
