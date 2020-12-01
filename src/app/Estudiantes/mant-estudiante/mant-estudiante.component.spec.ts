import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantEstudianteComponent } from './mant-estudiante.component';

describe('MantEstudianteComponent', () => {
  let component: MantEstudianteComponent;
  let fixture: ComponentFixture<MantEstudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantEstudianteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MantEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
