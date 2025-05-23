import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TabsModule } from 'primeng/tabs';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { ProgressBarModule } from 'primeng/progressbar';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
import { SelectModule } from 'primeng/select';
import { SliderModule } from 'primeng/slider';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { ToggleButtonModule } from 'primeng/togglebutton';

@Component({
  selector: 'app-submissions',
  imports: [TabsModule, ButtonModule, TableModule,
    MultiSelectModule,
    SelectModule,
    InputIconModule,
    TagModule,
    InputTextModule,
    SliderModule,
    ProgressBarModule,
    ToggleButtonModule,
    ToastModule,
    CommonModule,
    FormsModule,
    RatingModule,
    RippleModule,
    IconFieldModule],
  templateUrl: './submissions.component.html',
  styleUrl: './submissions.component.scss'
})
export class SubmissionsComponent {
  dt: any;
  constructor(private router: Router) { }
  
  addSubmissions() {

    this.router.navigate(['/addsubmission']);

  }
  customers = [
    {
      id: 1,
      reqId: 'Midwest Skiing Company, LLC',
      title: 'WI',
      by: '$456,928.06',
      team: '$0.00',
      priority: '05/22/2025',
      status: 'Ralph Mencia',
      projectstatus: 'Work Comp Now1',
      projectstatus2: '05/22/2025',
      projectstatus3: 'Naveen Sukumaran',
      projectstatus4: 'Application Initiated',
      projectstatus5: 'Setup in Progress',
    },
    {
      id: 1,
      reqId: 'Midwest Skiing Company, LLC',
      title: 'WI',
      by: '$456,928.06',
      team: '$0.00',
      priority: '05/22/2025',
      status: 'Ralph Mencia',
      projectstatus: 'Work Comp Now1',
      projectstatus2: '05/22/2025',
      projectstatus3: 'Naveen Sukumaran',
      projectstatus4: 'Application Initiated',
      projectstatus5: 'Setup in Progress',
    },
    {
      id: 1,
      reqId: 'Midwest Skiing Company, LLC',
      title: 'WI',
      by: '$456,928.06',
      team: '$0.00',
      priority: '05/22/2025',
      status: 'Ralph Mencia',
      projectstatus: 'Work Comp Now1',
      projectstatus2: '05/22/2025',
      projectstatus3: 'Naveen Sukumaran',
      projectstatus4: 'Application Initiated',
      projectstatus5: 'Setup in Progress',
    },
    {
      id: 1,
      reqId: 'Midwest Skiing Company, LLC',
      title: 'WI',
      by: '$456,928.06',
      team: '$0.00',
      priority: '05/22/2025',
      status: 'Ralph Mencia',
      projectstatus: 'Work Comp Now1',
      projectstatus2: '05/22/2025',
      projectstatus3: 'Naveen Sukumaran',
      projectstatus4: 'Application Initiated',
      projectstatus5: 'Setup in Progress',
    },
    {
      id: 1,
      reqId: 'Midwest Skiing Company, LLC',
      title: 'WI',
      by: '$456,928.06',
      team: '$0.00',
      priority: '05/22/2025',
      status: 'Ralph Mencia',
      projectstatus: 'Work Comp Now1',
      projectstatus2: '05/22/2025',
      projectstatus3: 'Naveen Sukumaran',
      projectstatus4: 'Application Initiated',
      projectstatus5: 'Setup in Progress',
    }

  ];

  selectedCustomers: any[] = [];
}
