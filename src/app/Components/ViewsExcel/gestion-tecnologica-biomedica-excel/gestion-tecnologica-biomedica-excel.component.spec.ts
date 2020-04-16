import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionTecnologicaBiomedicaExcelComponent } from './gestion-tecnologica-biomedica-excel.component';

describe('GestionTecnologicaBiomedicaExcelComponent', () => {
  let component: GestionTecnologicaBiomedicaExcelComponent;
  let fixture: ComponentFixture<GestionTecnologicaBiomedicaExcelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionTecnologicaBiomedicaExcelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionTecnologicaBiomedicaExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
