import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmBusquedaComponent } from './frm-busqueda.component';

describe('FrmBusquedaComponent', () => {
  let component: FrmBusquedaComponent;
  let fixture: ComponentFixture<FrmBusquedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrmBusquedaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrmBusquedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
