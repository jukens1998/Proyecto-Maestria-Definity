import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Eficiencia1ExcelComponent } from './eficiencia1-excel.component';

describe('Eficiencia1ExcelComponent', () => {
  let component: Eficiencia1ExcelComponent;
  let fixture: ComponentFixture<Eficiencia1ExcelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Eficiencia1ExcelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Eficiencia1ExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
