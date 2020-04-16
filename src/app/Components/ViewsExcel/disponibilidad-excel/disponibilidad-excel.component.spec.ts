import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisponibilidadExcelComponent } from './disponibilidad-excel.component';

describe('DisponibilidadExcelComponent', () => {
  let component: DisponibilidadExcelComponent;
  let fixture: ComponentFixture<DisponibilidadExcelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisponibilidadExcelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisponibilidadExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
