import { Routes } from '@angular/router';
import { AppLayout } from './layout/components/app.layout';
import { authGuard } from './core/guards/auth.guard';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { LoginComponent } from './features/login/login.component';

export const appRoutes: Routes = [
    { path: '', component: LoginComponent },
        {
          path: '',
          component: AppLayout,
          canActivate: [authGuard],
          children: [
            { path: 'dashboard', component: DashboardComponent }
          ]
        }
];
