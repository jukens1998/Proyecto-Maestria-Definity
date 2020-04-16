import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralExcelComponent } from './general-excel.component';

describe('GeneralExcelComponent', () => {
  let component: GeneralExcelComponent;
  let fixture: ComponentFixture<GeneralExcelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralExcelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
