import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TabsModule } from 'primeng/tabs';
import { ProspectsComponent } from "../prospects/prospects.component";
import { RiskUnderwritingComponent } from "../risk-underwriting/risk-underwriting.component";
import { CsaSentsSignatureComponent } from "../csa-sents-signature/csa-sents-signature.component";
import { SoldComponent } from "../sold/sold.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-submissions',
  imports: [TabsModule, ButtonModule, ProspectsComponent, RiskUnderwritingComponent, CsaSentsSignatureComponent, SoldComponent],
  templateUrl: './submissions.component.html',
  styleUrl: './submissions.component.scss'
})
export class SubmissionsComponent {
  constructor( private router: Router) { }
  addSubmissions() {
    
      this.router.navigate(['/addsubmission']);
    
  }
}
