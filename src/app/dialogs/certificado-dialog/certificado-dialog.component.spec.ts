import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoDialogComponent } from './certificado-dialog.component';

describe('CertificadoDialogComponent', () => {
  let component: CertificadoDialogComponent;
  let fixture: ComponentFixture<CertificadoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificadoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
