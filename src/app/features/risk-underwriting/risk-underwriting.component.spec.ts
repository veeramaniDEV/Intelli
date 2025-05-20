import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskUnderwritingComponent } from './risk-underwriting.component';

describe('RiskUnderwritingComponent', () => {
  let component: RiskUnderwritingComponent;
  let fixture: ComponentFixture<RiskUnderwritingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RiskUnderwritingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RiskUnderwritingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
