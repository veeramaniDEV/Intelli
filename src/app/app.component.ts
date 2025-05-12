import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';
import { InputTextModule } from 'primeng/inputtext';
import { ToggleButton } from 'primeng/togglebutton';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule, StepperModule, StepperModule,
    ButtonModule,
    InputTextModule,
    CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'basic';
  activeStep: number = 1;



  option1: boolean | undefined = false;

  option2: boolean | undefined = false;

  option3: boolean | undefined = false;

  option4: boolean | undefined = false;

  option5: boolean | undefined = false;

  option6: boolean | undefined = false;

  option7: boolean | undefined = false;

  option8: boolean | undefined = false;

  option9: boolean | undefined = false;

  option10: boolean | undefined = false;
}
