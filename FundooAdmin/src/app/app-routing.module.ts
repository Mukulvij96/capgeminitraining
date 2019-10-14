import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminloginComponent } from './Component/adminlogin/adminlogin.component';

const routes: Routes = [
  {
    path:'adminlogin',
    component:AdminloginComponent
  },

  {
    path: '',
    redirectTo: 'adminlogin'
  }
];
export const routing=RouterModule.forRoot(routes);
