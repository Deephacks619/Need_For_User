import { TestBed } from '@angular/core/testing';

import { ServicerDataService } from './servicer-data.service';

describe('ServicerDataService', () => {
  let service: ServicerDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicerDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
