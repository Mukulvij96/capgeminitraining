import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Components/login/component.login'
import { RegisterComponent } from './Components/register/register.component'
import { ForgotComponent } from './Components/forgot/forgot.component'
import { ResetComponent } from './Components/reset/reset.component'
import { DashboardComponent } from './Components/dashboard/dashboard.component'
import { NotefieldComponent } from './Components/notefield/notefield.component';
import { AuthGuard } from './authguard/auth.guard';
import { DisplayComponent } from './Components/display/display.component'
import { TrashnotesComponent } from './Components/trashnotes/trashnotes.component'
import { ArchivenotesComponent } from './Components/archivenotes/archivenotes.component';
import { DialogboxComponent } from './Components/dialogbox/dialogbox.component';
const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'forgotPassword',
    component: ForgotComponent
  },
  {
    path: 'resetPassword',
    component: ResetComponent
  },
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard], 
    children:[
      {
        path: 'display',
        component: DisplayComponent
      },
      {
        path: 'trash',
        component: TrashnotesComponent,
      },
      {
        path: 'archive',
        component: ArchivenotesComponent,
      },
      { 
        path: 'dialogbox',
        component: DialogboxComponent
      }
    ]
  
  },
  
  // otherwise redirect to home
  {
    path: '**',
    redirectTo: 'login'
  }

];
export const routing=RouterModule.forRoot(routes);
