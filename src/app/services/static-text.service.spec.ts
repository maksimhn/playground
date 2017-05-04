import { TestBed, inject } from '@angular/core/testing';

import { StaticTextService } from './static-text.service';

describe('StaticTextService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StaticTextService]
    });
  });

  it('should ...', inject([StaticTextService], (service: StaticTextService) => {
    expect(service).toBeTruthy();
  }));
});
