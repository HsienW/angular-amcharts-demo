import { TestBed, inject } from '@angular/core/testing';

import { TestACompService } from './test-a-comp.service';

describe('TestACompService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestACompService]
    });
  });

  it('should be created', inject([TestACompService], (service: TestACompService) => {
    expect(service).toBeTruthy();
  }));
});
