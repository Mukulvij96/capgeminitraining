
import { Routes, RouterModule } from '@angular/router';
import { AdminloginComponent } from './Component/adminlogin/adminlogin.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path: 'adminlogin',
    component: AdminloginComponent
  },
  {
    path: 'Dashboard',
    component: DashboardComponent,
    canActivate:[AuthGuard]
  },
  {
    path: '**',
    redirectTo: 'adminlogin'
  }
];
export const routing = RouterModule.forRoot(routes);
