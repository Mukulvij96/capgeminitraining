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
import { SearchbarComponent } from './Components/searchbar/searchbar.component';
import { LabelnotesdisplayComponent } from './Components/labelnotesdisplay/labelnotesdisplay.component';
import { NotesComponent } from './Components/notes/notes.component'
import { CartComponent } from './Components/cart/cart.component';
import { RemindernotesComponent } from './Components/remindernotes/remindernotes.component';
import { QuestionsandanswersComponent } from './Components/questionsandanswers/questionsandanswers.component';

const routes: Routes = [
  {
    path: 'cart',
    component: CartComponent
  },
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
    children: [

      {
        path: 'notes',
        component: NotesComponent
      },
      {
        path:'reminder',
        component:RemindernotesComponent
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
      },
      {
        path: 'search',
        component: SearchbarComponent
      },
      {
        path: 'labelList',
        component: LabelnotesdisplayComponent
      },
      {
        path: 'QuestionAnswer/:noteId', 
        component: QuestionsandanswersComponent
      },
      { path: '**', redirectTo: 'notes' }
    ]

  }
  // otherwise redirect to home
];
export const routing = RouterModule.forRoot(routes);
