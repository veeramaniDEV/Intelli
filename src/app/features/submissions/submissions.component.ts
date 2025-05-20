import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TabsModule } from 'primeng/tabs';
import { ProspectsComponent } from "../prospects/prospects.component";

@Component({
  selector: 'app-submissions',
  imports: [TabsModule, ButtonModule, ProspectsComponent],
  templateUrl: './submissions.component.html',
  styleUrl: './submissions.component.scss'
})
export class SubmissionsComponent {

}
