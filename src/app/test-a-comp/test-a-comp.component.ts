import {Component, OnInit} from '@angular/core';
import {Wrapper} from '../common-data/wrapper';
import {CommonData} from '../common-data/common-data';
import {TestACompService} from './test-a-comp.service';
import {TestBCompService} from '../test-b-comp/test-b-comp.service';
import {TestCCompService} from '../test-c-comp/test-c-comp.service';

@Component({
  selector: 'app-test-a-comp',
  templateUrl: './test-a-comp.component.html',
  styleUrls: ['./test-a-comp.component.css']
})
export class TestACompComponent implements OnInit {

  public localWrapper: Wrapper;

  ownMessage;

  constructor(
    public testACompService: TestACompService
  ) {
    this.testACompService.getMessage().subscribe(wrapper => {
      this.localWrapper = wrapper;
    });
  }

  ngOnInit() {
    this.ownMessage = CommonData.message;
  }

  sendChange(): void {
    this.localWrapper.testACompService = 'update A';
    this.testACompService.sendMessage(this.localWrapper);
  }
}
