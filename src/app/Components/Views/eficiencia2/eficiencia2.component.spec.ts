import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Eficiencia2Component } from './eficiencia2.component';

describe('Eficiencia2Component', () => {
  let component: Eficiencia2Component;
  let fixture: ComponentFixture<Eficiencia2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Eficiencia2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Eficiencia2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
