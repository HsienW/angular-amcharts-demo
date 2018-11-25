import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AmchartsModule } from './amcharts/amcharts.module';
import { TestACompModule } from './test-a-comp/test-a-comp.module';
import { TestBCompModule } from './test-b-comp/test-b-comp.module';
// import { TestCCompModule } from './test-c-comp/test-c-comp.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AmchartsModule,
    TestACompModule,
    TestBCompModule,
    // TestCCompModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
