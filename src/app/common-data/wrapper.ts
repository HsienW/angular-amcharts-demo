import {Injectable} from '@angular/core';
// import {TestACompService} from '../test-a-comp/test-a-comp.service';
// import {TestBCompService} from '../test-b-comp/test-b-comp.service';
// import {TestCCompService} from '../test-c-comp/test-c-comp.service';

@Injectable()
export class Wrapper {
  constructor(
    public testACompService?: string,
    public testBCompService?: string,
    // public testCCompService: any,
  ) {
    // super(testACompService);
    // this.testACompService = TestACompService;
    // this.testBCompService = TestBCompService;
    // this.testCCompService = TestCCompService;
  }
}
