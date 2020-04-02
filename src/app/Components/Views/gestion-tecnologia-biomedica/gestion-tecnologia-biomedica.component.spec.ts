import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionTecnologiaBiomedicaComponent } from './gestion-tecnologia-biomedica.component';

describe('GestionTecnologiaBiomedicaComponent', () => {
  let component: GestionTecnologiaBiomedicaComponent;
  let fixture: ComponentFixture<GestionTecnologiaBiomedicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionTecnologiaBiomedicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionTecnologiaBiomedicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
