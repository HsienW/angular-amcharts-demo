import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AmChartsModule } from '@amcharts/amcharts3-angular';
import { FormsModule } from '@angular/forms';

import { AmchartsComponent } from './amcharts.component';

@NgModule({
  imports: [
    CommonModule,
    AmChartsModule,
    FormsModule
  ],
  declarations: [
    AmchartsComponent
  ],
  exports: [
    AmchartsComponent
  ]
})
export class AmchartsModule { }
