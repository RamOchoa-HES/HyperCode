import { TestBed } from '@angular/core/testing';

import { AccessServiceServiceService } from './access-service-service.service';

describe('AccessServiceServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccessServiceServiceService = TestBed.get(AccessServiceServiceService);
    expect(service).toBeTruthy();
  });
});
