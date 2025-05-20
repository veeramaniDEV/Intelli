import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';

@Component({
  selector: 'app-add-submission-list',
  imports: [ButtonModule,StepperModule],
  templateUrl: './add-submission-list.component.html',
  styleUrl: './add-submission-list.component.scss'
})
export class AddSubmissionListComponent {

}
