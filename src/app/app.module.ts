import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AmchartsModule } from './amcharts/amcharts.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AmchartsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
