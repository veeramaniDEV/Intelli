import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubmissionListComponent } from './add-submission-list.component';

describe('AddSubmissionListComponent', () => {
  let component: AddSubmissionListComponent;
  let fixture: ComponentFixture<AddSubmissionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddSubmissionListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSubmissionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
