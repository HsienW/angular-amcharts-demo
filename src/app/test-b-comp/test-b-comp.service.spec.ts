import { TestBed, inject } from '@angular/core/testing';

import { TestBCompService } from './test-b-comp.service';

describe('TestBCompService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestBCompService]
    });
  });

  it('should be created', inject([TestBCompService], (service: TestBCompService) => {
    expect(service).toBeTruthy();
  }));
});
