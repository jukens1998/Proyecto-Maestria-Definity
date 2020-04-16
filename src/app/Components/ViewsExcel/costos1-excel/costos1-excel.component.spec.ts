import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Costos1ExcelComponent } from './costos1-excel.component';

describe('Costos1ExcelComponent', () => {
  let component: Costos1ExcelComponent;
  let fixture: ComponentFixture<Costos1ExcelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Costos1ExcelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Costos1ExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
