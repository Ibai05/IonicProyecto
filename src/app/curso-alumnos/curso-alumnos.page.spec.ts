import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CursoAlumnosPage } from './curso-alumnos.page';

describe('CursoAlumnosPage', () => {
  let component: CursoAlumnosPage;
  let fixture: ComponentFixture<CursoAlumnosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoAlumnosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
