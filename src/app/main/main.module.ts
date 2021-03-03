import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import {SharedModule} from '../shared/shared.module';
import {NbListModule, NbTabsetModule} from '@nebular/theme';



@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    SharedModule,
    NbListModule,
    NbTabsetModule
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
