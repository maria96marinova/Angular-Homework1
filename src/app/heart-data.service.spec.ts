import { TestBed, inject } from '@angular/core/testing';

import { HeartDataService } from './heart-data.service';

describe('HeartDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeartDataService]
    });
  });

  it('should be created', inject([HeartDataService], (service: HeartDataService) => {
    expect(service).toBeTruthy();
  }));
});
