import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Costos2ExcelComponent } from './costos2-excel.component';

describe('Costos2ExcelComponent', () => {
  let component: Costos2ExcelComponent;
  let fixture: ComponentFixture<Costos2ExcelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Costos2ExcelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Costos2ExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
