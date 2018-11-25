import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TestACompComponent} from './test-a-comp.component';
import {TestACompService} from './test-a-comp.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TestACompComponent
  ],
  exports: [
    TestACompComponent
  ],
  providers: [
    TestACompService
  ]
})
export class TestACompModule {
}
