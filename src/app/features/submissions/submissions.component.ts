import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TabsModule } from 'primeng/tabs';

@Component({
  selector: 'app-submissions',
  imports: [ TabsModule,ButtonModule],
  templateUrl: './submissions.component.html',
  styleUrl: './submissions.component.scss'
})
export class SubmissionsComponent {

}
