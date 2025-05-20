import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsaSentsSignatureComponent } from './csa-sents-signature.component';

describe('CsaSentsSignatureComponent', () => {
  let component: CsaSentsSignatureComponent;
  let fixture: ComponentFixture<CsaSentsSignatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsaSentsSignatureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsaSentsSignatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
