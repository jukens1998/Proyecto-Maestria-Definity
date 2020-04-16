import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiempoExcelComponent } from './tiempo-excel.component';

describe('TiempoExcelComponent', () => {
  let component: TiempoExcelComponent;
  let fixture: ComponentFixture<TiempoExcelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiempoExcelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiempoExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
