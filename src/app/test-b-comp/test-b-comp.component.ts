import {Component, OnInit} from '@angular/core';
import {Wrapper} from '../common-data/wrapper';
import {CommonData} from '../common-data/common-data';
import {TestACompService} from '../test-a-comp/test-a-comp.service';
import {TestBCompService} from './test-b-comp.service';
import {TestCCompService} from '../test-c-comp/test-c-comp.service';

@Component({
  selector: 'app-test-b-comp',
  templateUrl: './test-b-comp.component.html',
  styleUrls: ['./test-b-comp.component.css']
})
export class TestBCompComponent implements OnInit {

  public localWrapper: Wrapper;

  ownMessage;

  constructor(
    private testBCompService: TestBCompService
  ) {
    this.testBCompService.getMessage().subscribe(wrapper => {
      this.localWrapper = wrapper;
    });
  }

  ngOnInit() {
    this.ownMessage = CommonData.message;
  }

  sendChange(): void {
    this.localWrapper.testBCompService = 'update B';
    this.testBCompService.sendMessage(this.localWrapper);
  }

}
