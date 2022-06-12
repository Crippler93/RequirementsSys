import { TestBed } from '@angular/core/testing';

import { RequirementsRequestService } from './requirements-request.service';

describe('RequirementsRequestService', () => {
  let service: RequirementsRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequirementsRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
