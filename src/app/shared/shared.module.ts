import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NbButtonModule, NbCardModule, NbInputModule} from '@nebular/theme';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    FormsModule
  ]
})
export class SharedModule { }
