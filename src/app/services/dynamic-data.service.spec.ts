import { TestBed, inject } from '@angular/core/testing';

import { DynamicDataService } from './dynamic-data.service';

describe('DynamicDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DynamicDataService]
    });
  });

  it('should be created', inject([DynamicDataService], (service: DynamicDataService) => {
    expect(service).toBeTruthy();
  }));
});
