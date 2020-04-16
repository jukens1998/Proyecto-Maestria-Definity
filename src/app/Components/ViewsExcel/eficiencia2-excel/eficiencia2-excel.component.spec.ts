import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Eficiencia2ExcelComponent } from './eficiencia2-excel.component';

describe('Eficiencia2ExcelComponent', () => {
  let component: Eficiencia2ExcelComponent;
  let fixture: ComponentFixture<Eficiencia2ExcelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Eficiencia2ExcelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Eficiencia2ExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
