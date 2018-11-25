import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TestBCompComponent} from './test-b-comp.component';
import {TestBCompService} from '../test-b-comp/test-b-comp.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TestBCompComponent
  ],
  exports: [
    TestBCompComponent
  ],
  providers: [
    TestBCompService
  ]
})
export class TestBCompModule {
}
