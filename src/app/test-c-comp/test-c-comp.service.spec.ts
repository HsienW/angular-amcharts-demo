import { TestBed, inject } from '@angular/core/testing';

import { TestCCompService } from './test-c-comp.service';

describe('TestCCompService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestCCompService]
    });
  });

  it('should be created', inject([TestCCompService], (service: TestCCompService) => {
    expect(service).toBeTruthy();
  }));
});
