import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Components/login/component.login'
import { RegisterComponent} from './Components/register/register.component'
import { ForgotComponent } from './Components/forgot/forgot.component'
import { ResetComponent } from './Components/reset/reset.component'
const routes: Routes = [
  
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'forgotPassword', component: ForgotComponent },
    { path: 'resetPassword' , component: ResetComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: 'login' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
