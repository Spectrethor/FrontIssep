import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmActualizarComponent } from './frm-actualizar.component';

describe('FrmActualizarComponent', () => {
  let component: FrmActualizarComponent;
  let fixture: ComponentFixture<FrmActualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrmActualizarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrmActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
