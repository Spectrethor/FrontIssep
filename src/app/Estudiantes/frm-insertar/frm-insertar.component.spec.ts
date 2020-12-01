import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmInsertarComponent } from './frm-insertar.component';

describe('FrmInsertarComponent', () => {
  let component: FrmInsertarComponent;
  let fixture: ComponentFixture<FrmInsertarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrmInsertarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrmInsertarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
