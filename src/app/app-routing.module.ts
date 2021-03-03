import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {LoginModule} from './login/login.module';
import {MainComponent} from './main/main.component';
import {MainModule} from './main/main.module';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'main',
    component: MainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), LoginModule, MainModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
